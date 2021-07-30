/* eslint-disable react/jsx-boolean-value */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobApplication from "../../components/jobApplication/JobApplication";
import JobCard from "../../components/jobCard/JobCard";
import Modal from "../../components/modal/Modal";
import SearchBar from "../../components/searchBar/SearchBar";
import Spinner from "../../components/spinner/Spinner";
import { toastSuccess } from "../../utils/helpers/helper";
import { checkNull } from "../../utils/helpers/validation";
import { fetchAllJobs, jobApplication, searchJobs } from "./Jobs.action";
import { allJobs, isLoading, jobApplicationSuccessful } from "./jobs.selector";

const initialValues = {
  coverLetter: "",
  motivation: "",
};

const AllJobs = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedJob, setSelectedJob] = useState({});

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const jobs = useSelector(allJobs());
  const loading = useSelector(isLoading());
  const isApplicationSuccessful = useSelector(jobApplicationSuccessful());

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, []);

  const validate = {
    coverLetter: checkNull,
    motivation: checkNull,
  };

  const handleChange = (event) => {
    const { name, value: newValue } = event.target;

    setValues({
      ...values,
      [name]: newValue,
    });

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    const { [name]: removedError, ...rest } = errors;

    const error = validate[name](name, value);

    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isApplicationSuccessful) {
      toastSuccess("Application Successful");
      handleCloseModal();
      setValues({});
    }
  }, [isApplicationSuccessful]);

  const handleSubmitApplication = (event, jobId) => {
    event.preventDefault();

    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](key, values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);
    if (
      !Object.values(formValidation.errors).length
      && Object.values(formValidation.touched).length
        === Object.values(values).length
      && Object.values(formValidation.touched).every((t) => t === true)
    ) {
      const data = {
        cover_letter: values.coverLetter,
        motivation: values.motivation,
      };
      dispatch(jobApplication(jobId, data));
    }
  };

  const searchOnchageHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    dispatch(searchJobs(searchValue));
  };

  const applyHandler = (event, jobId) => {
    event.stopPropagation();
    const job = jobs.find((job) => job.id === jobId);
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <div className="my-14 all-jobs-page">
      <div className="mb-4">
        <h2 className="text-2xl fomt-bold">Jobs</h2>
      </div>
      <div>
        <SearchBar
          searchValue={searchValue}
          handleSearch={searchHandler}
          handleSearchValue={searchOnchageHandler}
        />
      </div>
      <div className="border-b border-t grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 mt-10">
        {loading ? (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 mx-auto">
            <Spinner />
          </div>
        ) : (
          jobs?.map((job) => (
            <JobCard
              key={job.id}
              jobId={job.id}
              jobTitle={job.title}
              jobLocation={job.location}
              jobCompany={job.company}
              jobType={job.job_type}
              applicantCount={job.applicant_count}
              jobTags={job.skills_tag.slice(0, 3).toString()}
              handleApply={applyHandler}
            />
          ))
        )}
      </div>
      <div>
        <Modal open={modalOpen} onClose={handleCloseModal} modalClass="w-4/6">
          <JobApplication
            job={selectedJob}
            closeModalHandler={handleCloseModal}
            submitApplicationHandler={handleSubmitApplication}
            touched={touched}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errors={errors}
          />
        </Modal>
      </div>
    </div>
  );
};

export default AllJobs;

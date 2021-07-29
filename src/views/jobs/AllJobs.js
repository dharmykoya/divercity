import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/jobCard/JobCard";
import SearchBar from "../../components/searchBar/SearchBar";
import Spinner from "../../components/spinner/Spinner";
import { fetchAllJobs, searchJobs } from "./Jobs.action";
import { allJobs, isLoading } from "./jobs.selector";

const AllJobs = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector(allJobs());
  const loading = useSelector(isLoading());

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, []);

  const searchOnchageHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    dispatch(searchJobs(searchValue));
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
              jobTitle={job.title}
              jobLocation={job.location}
              jobCompany={job.company}
              jobType={job.job_type}
              applicantCount={job.applicant_count}
              jobTags={job.skills_tag.slice(0, 3).toString()}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllJobs;

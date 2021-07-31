/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-danger */
import PropTypes from "prop-types";
import {
  OfficeBuildingIcon,
  LocationMarkerIcon,
  BriefcaseIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const JobApplication = ({
  job,
  closeModalHandler,
  submitApplicationHandler,
  values,
  handleBlur,
  handleChange,
  errors,
  isAuthenticated,
}) => {
  const {
    id,
    description,
    title,
    location,
    company,
    job_type: jobType,
    applicant_count: applicantCount,
    skills_tag: skillsTag,
  } = job;
  return (
    <div className="">
      <div className="bg-blue-200 text-center py-6 px-4 drop-shadow-md -mx-8 -mt-10 text-blue-800">
        <div className="text-4xl">{title}</div>
        <div className="flex justify-center my-3">
          <div className="flex items-center mx-2 md:mx-4">
            <div>
              <OfficeBuildingIcon className="h-5 w-5 mr-1" />
            </div>
            <span>{company}</span>
          </div>
          <div className="flex items-center mx-2 md:mx-4">
            <div>
              <LocationMarkerIcon className="h-5 w-5 mr-1" />
            </div>
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center mx-2 md:mx-4">
            <div>
              <BriefcaseIcon className="h-5 w-5 mr-1" />
            </div>
            <span>{jobType}</span>
          </div>
        </div>
        <div>
          <div>{skillsTag.toString()}</div>
          <div className="flex items-center justify-center mt-3">
            <PaperClipIcon className="h-5 w-5  mr-1" />
            <span className="mr-2">{applicantCount}</span>
            applications received
          </div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="border py-8 px-3 mt-5 rounded-lg"
      />
      {isAuthenticated ? (
        <>
          <div className="mt-8">
            <label htmlFor="coverLetter" aria-controls="4" className="">
              Cover letter
            </label>
            <textarea
              name="coverLetter"
              id="coverLetter"
              className="border px-2 w-full mt-4"
              rows="4"
              value={values?.coverLetter}
              onChange={(e) => handleChange(e)}
              onBlur={handleBlur}
            />
            <div className="text-red-500">
              {errors && errors.coverLetter?.length ? (
                <p>cover letter is required</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-8">
            <label htmlFor="coverLetter" aria-controls="4" className="">
              Motivation letter
            </label>
            <textarea
              name="motivation"
              id="motivation"
              className="border px-2 w-full mt-4"
              rows="4"
              value={values?.motivation}
              onChange={(e) => handleChange(e)}
              onBlur={handleBlur}
            />
            <div className="text-red-500">
              {errors && errors.motivation?.length ? (
                <p>{errors.motivation}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-10 mb-2 text-right">
            <Button
              buttonText="Cancel"
              handleClick={closeModalHandler}
              customClass="bg-red-500 text-white text-base font-bold px-6 py-3 mr-4 rounded-lg"
            />
            <Button
              buttonText="Apply"
              handleClick={(e) => submitApplicationHandler(e, id)}
              customClass="bg-blue-500 text-white text-base font-bold px-6 py-3 rounded-lg"
            />
          </div>
        </>
      ) : (
        <div className="my-6 text-center text-2xl" data-testid="loginToApply">
          Please
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
          to apply for this position.
        </div>
      )}
    </div>
  );
};

JobApplication.propTypes = {
  job: PropTypes.object.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  submitApplicationHandler: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default JobApplication;

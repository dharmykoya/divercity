import {
  LocationMarkerIcon,
  BriefcaseIcon,
  PaperClipIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import PropTypes from "prop-types";
import Button from "../button/Button";
import "./JobCard.css";

const JobCard = ({
  jobTitle,
  jobLocation,
  jobCompany,
  jobType,
  applicantCount,
  jobTags,
}) => (
  <div className="job-card shadow-md transform duration-300 px-6 py-8 border border-black-300 rounded-lg hover:-translate-y-1">
    <div>
      <div className="font-bold mb-2">{jobTitle}</div>
      <div>
        By
        <span className="text-blue-400 ml-2">{jobCompany}</span>
      </div>
    </div>

    <div className="my-6">
      <div className="flex items-center">
        <div>
          <BriefcaseIcon className="h-5 w-5 text-black mr-2" />
        </div>
        <span>{jobType}</span>
      </div>
      <div className="flex items-center">
        <div>
          <LocationMarkerIcon className="h-5 w-5 text-black mr-2" />
        </div>
        <span>{jobLocation}</span>
      </div>
      <div className="flex items-center">
        <PaperClipIcon className="h-5 w-5 text-black mr-2" />
        <span className="mr-2">{applicantCount}</span>
        applications
      </div>
      <div className="flex items-center">
        <div>
          <HashtagIcon className="h-5 w-5 text-black mr-2" />
        </div>
        <span className="truncate">{jobTags}</span>
      </div>
    </div>

    <div className="text-right">
      <Button
        buttonText="Apply"
        handleClick={() => {}}
        customClass="bg-blue-500 text-white text-base font-bold px-6 py-3 rounded-lg"
      />
    </div>
  </div>
);

JobCard.defaultProps = {
  jobLocation: "N/A",
};

JobCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  jobLocation: PropTypes.string,
  jobCompany: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired,
  applicantCount: PropTypes.number.isRequired,
  jobTags: PropTypes.string.isRequired,
};

export default JobCard;

import {
  LocationMarkerIcon,
  BriefcaseIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";
import Button from "../button/Button";
import "./JobCard.css";

const JobCard = () => (
  <div className="job-card px-3 py-6 border border-black-300 rounded-lg">
    <div>
      <div className="font-bold mb-2">title</div>
      <div>
        By
        <span className="text-blue-400 ml-2">someone</span>
      </div>
    </div>

    <div className="my-6">
      <div className="flex items-center">
        <BriefcaseIcon className="h-5 w-5 text-black mr-2" />
        <span>Job Type</span>
      </div>
      <div className="flex items-center">
        <LocationMarkerIcon className="h-5 w-5 text-black mr-2" />
        <span>location</span>
      </div>
      <div className="flex items-center">
        <PaperClipIcon className="h-5 w-5 text-black mr-2" />
        <span>applicant count</span>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div>tags</div>
      <div>
        <Button buttonText="Apply" onClick={() => {}} />
      </div>
    </div>
  </div>
);

export default JobCard;

import JobCard from "../../components/jobCard/JobCard";

const AllJobs = () => (
  <div className="my-14 all-jobs-page">
    <div>
      <h2 className="text-2xl fomt-bold">Jobs</h2>
    </div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  </div>
);

export default AllJobs;

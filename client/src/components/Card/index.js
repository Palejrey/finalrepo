import React from 'react';

const JobCard = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No Jobs have been posted as of yet.</h3>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {jobs &&
        jobs.map((job) => (
          <div>
          <h1>{job._id}</h1>
          <h1>{job.description}</h1>
          <h1>{job.title}</h1>
          </div>
       ))}
    </div>
  );
};

export default JobCard;



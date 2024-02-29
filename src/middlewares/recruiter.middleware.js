import JobsModel from "../models/jobs.model.js";

// recruiter.middleware.js
// checking the recruiter Authorization only who posted a job can have the access to modify it.
const authorizeJobAccess = (req, res, next) => {
    const loggedInRecruiterId = req.session.userId; 
    const jobId = req.params.id; 

    // Check if the job exists and is associated with the logged-in recruiter
    const job = JobsModel.getById(jobId);
    console.log(job);
    if (!job || job.recruiterId !== loggedInRecruiterId) {
        return res.status(403).render("un-authorize"); // or redirect to an error page
    }

    next();
};

export default authorizeJobAccess;

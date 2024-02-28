import JobsModel from "../models/jobs.model.js";

const authorizeJobAccess = (req, res, next) => {
    const loggedInRecruiterId = req.session.userId; // Assuming you store userId in the session
    const jobId = req.params.id; // Assuming job ID is passed in the URL
    
    // Check if the job exists and is associated with the logged-in recruiter
    const job = JobsModel.getById(jobId);
    if (!job || job.recruiterId !== loggedInRecruiterId) {
        return res.status(403).render("un-authorize"); // or redirect to an error page
    }
  
    // Authorized, proceed to the next middleware or route handler
    next();
};

export default authorizeJobAccess;

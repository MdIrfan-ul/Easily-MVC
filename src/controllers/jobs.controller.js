import JobsModel from "../models/jobs.model.js";
import ApplicantsModel from "../models/applicant.model.js";


export default class JobsController{
    getJobs(req,res,next){
        let jobs = JobsModel.getData();
        res.render("jobs",{jobs});
    }
     getJobDetails(req,res,next){
        const id = req.params.id;
        let jobs =   JobsModel.getById(id);
        if (!jobs) {
            res.status(404).render("error", { message: "Job not found" });
            return;
        }
        
        const applicantCount = ApplicantsModel.getApplicantsCountForJob(id); 
        res.render("jobDetails", { jobs:[jobs], applicantCount });
    }
    postJobsView(req,res,next){
        res.render("postjob");
    }
    postJobs(req,res,next){
        const { job_category, job_designation, job_location, company_name, salary, number_of_openings, skills_required, apply_by } = req.body;
        JobsModel.add(job_category, job_designation, company_name, job_location, salary, skills_required, apply_by,number_of_openings);
        res.redirect("/jobs");
    }

}

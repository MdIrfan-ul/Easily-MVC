import JobsModel from "../models/jobs.model.js";
import ApplicantsModel from "../models/applicant.model.js";




export default class JobsController{
    getJobs(req,res,next){
        let jobs = JobsModel.getData();
        res.render("jobs",{jobs,userName:req.session.userName});
    }
     async getJobDetails(req,res,next){
        const id = req.params.id;
        let jobs =   JobsModel.getById(id);
        if (!jobs) {
            res.status(404).render("error", { message: "Job not found" });
            return;
        }
        
        const applicantCount =  await ApplicantsModel.getApplicantsCountForJob(id); 
        res.render("jobDetails", { jobs:[jobs], applicantCount,userName:req.session.userName,userEmail:req.session.userEmail });
    }
    postJobsView(req,res,next){
        res.render("postjob",{userName:req.session.userName,userEmail:req.session.userEmail});
    }
    postJobs(req,res,next){
        const { job_category, job_designation, job_location, company_name, salary, number_of_openings, skills_required, apply_by } = req.body;
        JobsModel.add(job_category, job_designation, company_name, job_location, salary, skills_required, apply_by,number_of_openings);
        res.redirect("/jobs");
    }
    getJobUpdateView(req,res,next){
        const id = req.params.id;
        let job = JobsModel.getById(id);
        if(job){
            res.status(201).render("update-job",{job,userName:req.session.userName,userEmail:req.session.userEmail});
        }else{
            res.status(401).render("not-found");
        }
    }
    postJobsUpdateview(req, res, next) {
        const jobId = req.params.id;
        const { category, designation, cName, location, salary, skills, applyBy, openings } = req.body;
    
        // Update the job with the provided details
         JobsModel.update(jobId, category, designation, cName, location, salary, skills, applyBy, openings);
    
        
        const updatedJob = JobsModel.getById(jobId);
        
        if (updatedJob) {
            // If job is successfully updated, render the jobDetails view with only the updated job
            res.render('jobDetails', { jobs: [updatedJob], userName: req.session.userName, applicantCount: 0 ,userEmail:req.session.userEmail});
        } else {
            // If job with given id is not found, render an error page or redirect to some other page
            res.render('error'); 
        }

    }
    removeJobsView(req,res,next){
        const id = req.params.id;
        const jobs = JobsModel.getById(id);
    if (!jobs) {
      return res.status(401).render("error");
    }
    JobsModel.remove(id);
    res.redirect("/jobs");
        
    }
    getErrorPage(req,res){
        res.render("not-found");
    }
    
     
}



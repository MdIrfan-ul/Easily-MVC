import ApplicantsModel from "../models/applicant.model.js";

export default class  ApplicantsController{
    getApplicants(req,res,next){
        let applicants = ApplicantsModel.getApplicants();
        res.render('applicants',{applicants});
    }
    addApplicants(req,res,next){
        const {name,email,contact} = req.body;
        const resume = "uploads/"+req.file.filename;
        const jobId = req.params.id;
        ApplicantsModel.addNewApplicants(name,email,contact,resume,jobId);
        let applicants = ApplicantsModel.getApplicants();
        res.redirect('/jobs');
    }
    applicantsView(req,res,next){
        const jobId = req.params.id;
        let applicants = ApplicantsModel.getApplicantsForJob(jobId);
        if(applicants){
            applicants = applicants.map((applicant, index) => ({
                ...applicant,
                id: index + 1 // Start from 1 for each job
            }));
            res.render("applicants",{applicants});
        }else{
            res.status(401).render("error");
        }
    }

}
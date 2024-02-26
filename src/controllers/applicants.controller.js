import ApplicantsModel from "../models/applicant.model.js";

export default class  ApplicantsController{
    getApplicants(req,res,next){
        let applicants = ApplicantsModel.getApplicants();
        res.render('applicants',{applicants});
    }
    addApplicants(req,res,next){
        const {name,email,contact} = req.body;
        const resume = "uploads/"+req.file.filename;
        ApplicantsModel.addNewApplicants(name,email,contact,resume);
        let applicants = ApplicantsModel.getApplicants();
        res.redirect('/jobs');
    }
    applicantsView(req,res,next){
        const jobId = req.params.id;
        ApplicantsModel.getByApplicantsId(jobId);
        let applicants = ApplicantsModel.getApplicants();
        if(applicants){
            res.render("applicants",{applicants});
        }else{
            res.status(401).render("error");
        }
    }

}
export default class ApplicantsModel{
    
    constructor(id,name,email,contact,resume,jobId){
        this.id = id;
        this.name= name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
        this.jobId = jobId;
    }
    static addNewApplicants(name,email,contact,resume,jobId){
        let newApplicants = new ApplicantsModel(applicants.length+1,name,email,contact,resume,jobId);
        applicants.push(newApplicants);
    }
    static getApplicants(){
        return applicants;
    }
    static getApplicantsForJob(jobId) {
        return applicants.filter(applicant => applicant.jobId === jobId);
    }
    static getApplicantsCountForJob(jobId) {
        return this.getApplicantsForJob(jobId).length;
    }
    }



var applicants = [];
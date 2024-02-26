export default class ApplicantsModel{
    
    constructor(id,name,email,contact,resume){
        this.id = id;
        this.name= name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
    }
    static addNewApplicants(name,email,contact,resume){
        let newApplicants = new ApplicantsModel(applicants.length+1,name,email,contact,resume);
        applicants.push(newApplicants);
    }
    static getApplicants(){
        return applicants;
    }
    static getByApplicantsId(id){
        return applicants.find((a)=>a.id==id);
    }
    static getApplicantsCountForJob(id) {
        let count = 0;
        applicants.forEach(applicant => {
            if (applicant.id == id) { 
                count++;
            }
        });
        return count;
    }

    
}
var applicants = [];



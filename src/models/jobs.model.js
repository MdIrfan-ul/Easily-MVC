export default class JobsModel{
    constructor(id,category,designation,cName,location,salary,skills,applyBy,openings,){
        this.id = id;
        this.category = category;
        this.designation = designation;
        this.cName = cName;
        this.location = location;
        this.salary = salary;
        this.skills = skills;
        this.applyBy = applyBy;
        this.openings = openings;
    }
    static update(id, category, designation, cName, location, salary, skills, applyBy, openings) {
        let index = jobs.findIndex((job) => job.id == id);
        if (index !== -1) {
            // Update the existing job object in the array
            let updatedJob = new JobsModel(id, category, designation, cName, location, salary, skills, applyBy, openings);
            jobs[index] = updatedJob;
        }
    }



    static getData(){
        return jobs;
    }
    static getById(id){
        return jobs.find(job=>job.id == id);
    }
    static add(category,designation,cName,location,salary,skills,applyBy,openings){
        let newJobs = new JobsModel(
            jobs.length+1,
            category,
            designation,
            cName,
            location,
            salary,
            skills,
            applyBy,
            openings
        );
        jobs.push(newJobs);

    }
    static remove(id){
        const index = jobs.find((job)=>job.id == id);
        jobs.splice(index,1);
    }
    
    
    
}


var  jobs = [
    new JobsModel(1, "Tech", "SDE", "Coding Ninjas", "Gurgaon HR Ind Remote", "14-20lpa", ["React", "NodeJs", "JS", "SQL", "MONGODB", "Express", "AWS"],"30 Aug 2023",5),
    new JobsModel(2, "Tech", "SDE", "ZOHO Corp", "Chennai", "10-15lpa", ["React", "NodeJs", "JS", "SQL", "MONGODB", "Express", "AWS"],"30 Aug 2023",6),
    new JobsModel(3, "Non-Tech", "HR", "XYZ Corp", "Banglore HR Ind Remote", "6-11lpa", ["NodeJs", "JS", "SQL", "MONGODB","AWS","OOPS"],"30 Aug 2023",3),

]
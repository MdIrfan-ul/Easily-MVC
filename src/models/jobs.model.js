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
}


var  jobs = [
    new JobsModel(1, "Tech", "SDE", "Coding Ninjas", "Gurgaon HR Ind Remote", "14-20lpa", ["React", "NodeJs", "JS", "SQL", "MONGODB", "Express", "AWS"],"30 Aug 2023",5),
    new JobsModel(2, "Tech", "SDE", "ZOHO Corp", "Chennai", "10-15lpa", ["React", "NodeJs", "JS", "SQL", "MONGODB", "Express", "AWS"],"30 Aug 2023",6),
    new JobsModel(3, "Non-Tech", "HR", "XYZ Corp", "Banglore HR Ind Remote", "6-11lpa", ["NodeJs", "JS", "SQL", "MONGODB","AWS","OOPS"],"30 Aug 2023",3),

]
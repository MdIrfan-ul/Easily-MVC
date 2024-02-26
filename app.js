import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import UserController from "./src/controllers/user.controller.js";
import JobsController from "./src/controllers/jobs.controller.js";
import ApplicantsController from "./src/controllers/applicants.controller.js";
import  validationMiddleware  from "./src/middlewares/validate.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import session from "express-session";
const app = express();

app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src","views"));


app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret:'M7xOu3ux1S',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));


const userController = new UserController();
const jobsController = new JobsController();
const applicantsController = new ApplicantsController();

app.get("/login",userController.getLogin);
app.get("/",userController.getHome);
app.get("/jobs",jobsController.getJobs);
app.get("/jobs/:id",jobsController.getJobDetails);
app.get("/postjob",jobsController.postJobsView);
app.post("/jobs",jobsController.postJobs);
app.post("/apply/:id",uploadFile.single('resume'),validationMiddleware,applicantsController.addApplicants)
app.get("/applicants/:id",applicantsController.applicantsView);
app.get("/jobs/:id/update",jobsController.getJobUpdateView);
app.post("/jobs/:id/update",jobsController.postJobsUpdateview);
app.get("/jobs/:id/delete",jobsController.removeJobsView);
app.use(express.static("src/views"));
app.use(express.static("public"));
export default app;
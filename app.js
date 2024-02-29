// Imported necessary modules for the app
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import UserController from "./src/controllers/user.controller.js";
import JobsController from "./src/controllers/jobs.controller.js";
import ApplicantsController from "./src/controllers/applicants.controller.js";
import  validationMiddleware  from "./src/middlewares/validate.middleware.js";
import UserValidation from "./src/middlewares/user-validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import { setLastVisit } from "./src/middlewares/last-Visit.middleware.js";
import { auth } from "./src/middlewares/auth.middleware.js";
import authorizeJobAccess from "./src/middlewares/recruiter.middleware.js";
import session from "express-session";
import cookieParser from "cookie-parser";


const app = express();


// setting the view engine
app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src","views"));

// setting  the middleware is executed for every request to the application.
app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret:'M7xOu3ux1S',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));
app.use(express.static("src/views"));
app.use(express.static("public"));
// instantiating the module property
const userController = new UserController();
const jobsController = new JobsController();
const applicantsController = new ApplicantsController();



// Auth Routes
app.post("/register",UserValidation.userValidationMiddleware,userController.postRegister);
app.get("/login",userController.getLogin);
app.post("/login",userController.checkUser);
app.get("/logout",userController.logOutUser);
// Home Route
app.get("/",userController.getHome);

//  /jobs Job Routes
app.get("/jobs",jobsController.getJobs);
app.get("/jobs/:id",setLastVisit,jobsController.getJobDetails);
app.get("/jobs/:id/update",auth,authorizeJobAccess,jobsController.getJobUpdateView);
app.post("/jobs/:id/update",auth,authorizeJobAccess,setLastVisit,jobsController.postJobsUpdateview);
app.get("/jobs/:id/delete",auth,authorizeJobAccess,jobsController.removeJobsView);

// jobs/:id/applicants Routes
app.get("/applicants/:id",auth,authorizeJobAccess,applicantsController.applicantsView);

// Apply Routes
app.post("/apply/:id",uploadFile.single('resume'),validationMiddleware,applicantsController.addApplicants);
app.get("/postjob",auth,setLastVisit,jobsController.postJobsView);
app.post("/jobs",jobsController.postJobs);

// 404 Routes
app.get("/404",jobsController.getErrorPage);
app.get('/unauthorized',userController.unAuthorized);

// setting the route for client side fetch data
app.get("/jobs-json",jobsController.jsonJobs);


export default app;
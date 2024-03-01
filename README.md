# Easily-MVC
This project is a job portal website that allows users to post and manage job listings, as well as provides a user-friendly platform for job seekers to find and apply for suitable roles. It is implemented using the MVC (Model-View-Controller) architecture with Express.js, separating data handling, interface rendering, and routing control.

## Features

- **Job Listings**: Users can post and manage job listings.
- **Job Search Functionality**: Users can filter jobs using the search input in the navbar.
- **Recruiter Redirection**: Recruiters are redirected to the all jobs page if they are already logged in instead of showing login/register options.
- **Resource-Based Authorization**: Only the recruiter who posted a job can update or delete it.
- **Last Visit Date and Time**: The user's last visit date and time are displayed on the frontend to provide personalized information.
- **Confirmation Dialogs**: Confirmation dialogs are implemented for update and delete operations to prevent accidental modifications.
- **Common Validation**: A common validation is implemented for consistent form validation across the application.
- **Email Notification**: When a job application is submitted, an email is sent to the applicant's email address using Nodemailer.

## Technologies Used
[![Languages Used](https://skillicons.dev/icons?i=js,html,css,nodejs,express)](https://skillicons.dev)

- **Express.js**: For handling routing and server logic.
- **Node.js**: For server-side JavaScript runtime.
- **HTML/CSS**: For structuring the web pages and styling.
- **JavaScript**: For client-side interactivity.
- **Nodemailer**: For sending email notifications.
- **Multer**: For storing applicant details in the uploads folder.


## Installation

To install the required libraries, use npm:

```bash
npm install express 
npm install nodemailer
npm install multer 
npm install express-ejs-layouts
npm install express-validator
npm install express-session
npm install cookie-parser
```


## How to Use

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Access the application through your web browser.
5. Explore the job listings, search for jobs, and interact with the application as a recruiter or job seeker.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

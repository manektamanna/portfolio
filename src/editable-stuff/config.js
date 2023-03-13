// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Tamanna",
  middleName: "",
  lastName: "Manek",
  message: "Driven to make a difference through technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/manektamanna",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tm0407/",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@tamannamanek",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/tamanna.jpeg"),
  imageSize: 375,
  message:
    "Hi, I'm Tamanna, a computer science graduate student at New York University. I'm passionate about leveraging technology to create positive impact and develop innovative solutions. Inspired by the power of technology to change the world, I am dedicated to continuous learning and pushing my boundaries to achieve excellence in everything I do. Through my portfolio, I hope to showcase my projects and share my journey with you..",
  resume: "https://drive.google.com/file/d/1QLcJ_-t-yZdrjLNAmtbOcH31XM10MoaX/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "manektamanna", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Dining-Concierge-Chatbot-Restaurant_Recommendation", "Smart-Text-Voice-Controlled-Photo-Album", "Email_Spam_Detection", "Customer-Churn-Analysis", "Movie-Recommendation-System", "NYUnite"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/tamanna.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/tamanna.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "Java", value: 90 },
    { name: "SQL", value: 90 },
    { name: "C++", value: 75 },
    { name: "Data Structures and Algorithm", value: 90 },
    { name: "Database Management Systems", value: 85 },
    { name: "Cloud Computing", value: 90 },
    { name: "DevOps", value: 90 },
    { name: "AWS", value: 95 },
    { name: "Docker", value: 80 },
    { name: "Terraform", value: 90 },
    { name: "Infrastructure as Code", value: 90 },
    { name: "GitHub", value: 90 },
    { name: "Git", value: 90 },
    { name: "JIRA", value: 80 },
    { name: "Jenkins", value: 75 },
    { name: "CI/CD", value: 85 },
    { name: "Software Engineering", value: 90 },
    { name: "Agile Methodology", value: 90 },
    { name: "Django", value: 80 },
    { name: "Flask", value: 75 },
    { name: "REST APIs", value: 85 },
    { name: "Cloud Custodian", value: 80 },
    { name: "CFN Guard", value: 80 },
    { name: "HTML", value: 75 },
    { name: "CSS", value: 75 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Leadership", value: 90 },
    { name: "Time Management", value: 95 },
    { name: "Team Work", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Communication", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am actively seeking full-time opportunities in Software Engineering or DevOps Engineering domain. If there are any available positions that you are aware of, or if you have any questions, or simply want to say hello, please don't hesitate to contact me via email at",
  email: "tamannamanek0407@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Cloud Engineering Intern',
      companylogo: require('../assets/img/Transamerica.png'),
      date: 'May 2022 – Aug 2022',
    },
    {
      role: 'Graduate Course Assistant - Cloud Computing and Big Data',
      companylogo: require('../assets/img/NYU.png'),
      date: 'May 2022 – Present',
    },
    {
      role: 'Software Engineering Intern',
      companylogo: require('../assets/img/Bosch.png'),
      date: 'Jan 2020 – May 2020',
    },
    
  ]
}

//Blog SECTION
const blog = {
  show: true,
};

export { navBar, mainBody, about, repos, blog, skills, leadership, getInTouch, experiences };

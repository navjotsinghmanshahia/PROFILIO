// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hashir",
  middleName: "",
  lastName: "Shoaib",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/navjotsinghmanshahia",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/navjotsingh.manshahia.5",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/navjot_singh_manshahia/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/navjotsinghmanshahia/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/its_navjotsingh/",
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
//      i.e: profilePictureLink: require("../editable-stuff/navjot.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume1.pdf"),
//         resume: "https://docs.google.com/document/d/",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/navjot.png"),
  imageSize: 375,
  message:
    "My name is Navjot Singh Manshahia. I’m a high school graduate of 2022 from Saint Fateh Singh Convent School at Maur, Mansa with Non Medical Stream. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Web Development. In my free time I like working on open source projects.",
  resume: "https://docs.google.com/document/d/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "navjotsinghmanshahia", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/navjot.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/navjot.png"), 
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
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "C#", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 30 },
    { name: "Positivity", value: 99 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "navjotsinghmanshahia@icloud.com.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Web Development',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2021 – Present',
    },
    {
      role: 'Carding',
      companylogo: require('../assets/img/boeing.png'),
      date: 'October 2021 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

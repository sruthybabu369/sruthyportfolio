import ecounityImage from './assets/ecounity_imgg.png';
import infobitesimage from './assets/infobites_img.png';
import Todoimage from './assets/todo_img.png';
import Bigmartimage from './assets/bigmart_img.png';
import Restaurantsysimage from './assets/rmspic3.png';
import Booktrailimage from './assets/booktrail_img.png';

const projects = [
    {
      id: 1,
      image: ecounityImage,
      title: "EcoUnity",
      description:
        "EcoUnity is a web platform dedicated to ecosystem conservation, offering interactive activities, quizzes, and educational content to promote environmental awareness.",
      techStack: ["python", "Django", "HTML", "CSS", "JavaScript", "jQuery", "PostgreSQL"],
      github: "https://github.com/sruthybabu369/Ecounity",
    },
    {
      id: 2,
      image: Bigmartimage,
      title: "Bigmart",
      description: "A full-featured e-commerce website with user authentication, product management, and payment gateway integration.",
      techStack: ["python", "Django", "HTML", "CSS", "JavaScript","jQuery", "Bootstrap", "PostgreSQL"],
      github: "https://github.com/sruthybabu369/Bigmart.git",
    },
    {
      id: 3,
      image: infobitesimage,
      title: "Infobites",
      description:
        "Infobites is a modern web application designed to deliver concise and informative content snippets to users. Built with React and Vite, it offers a fast and responsive user experience.",
      techStack: ["React", "Vite", "JavaScript", "HTML", "CSS","Axios", "wikipedia API", "unsplash API"],
      github: "https://github.com/sruthybabu369/Infobites",
      liveDemo: "https://infobites.netlify.app/",
    },
    {
      id: 4,
      image: Todoimage,
      title: "To-Do Planner",
      description: "A dynamic and user-friendly React.js To-Do application that allows users to manage tasks with features like task completion toggling, editing, categorization, due dates, and localStorage persistence.",
      techStack: ["React","Vite", "CSS", "Axios", "JavaScript","localStorage"],
      github: "https://github.com/sruthybabu369/todo_app",
      liveDemo: "https://todoapp-sruthycb-19b98b.netlify.app/",
    },
    {
      id: 5,
      image: Restaurantsysimage,
      title: "Restaurant Management System",
      description: "A Django-based web application for managing food and shop records with user-friendly forms and dynamic data display.",
      techStack: ["Python","Django","SQLite","HTML","CSS","Bootstrap","JavaScript","jQuery"],
      github: "https://github.com/sruthybabu369/Restaurant-Management",
      
    },
    {
      
      id: 6,
      image: Booktrailimage,
      title: "BookTrail",
      description: "A React-based online platform that allows users to explore, search, and manage their favorite books with a user-friendly UI.",
      techStack: [
          "React","JavaScript","HTML","CSS","Axios","Open Library API"
        ],
      github: "https://github.com/sruthybabu369/BookTrail",
      liveDemo: "" // Leave empty if it's not deployed
      
    },
  ];
  
  export default projects;
  
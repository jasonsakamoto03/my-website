import './App.css';
import Navbar from './Components/NavBar';
import pfp from './pfp.jpeg'
import pdf from './Docs/Resume_Jason_Sakamoto.pdf'
import { ContactUs } from './ContactUs';

function App() {
  return (
    <>
    <Navbar />
    <div className='homepage'>
      <div className='title'>
        <h1>Jason Sakamoto</h1>
      </div>
      <img src={pfp} alt="pfp"></img>
      <p>Welcome! I am a sophmore at the University of Washington majoring in Applied Mathematics with a focus in Data Science and minoring in Statistics</p>
      <div className='links'>
        <a href={pdf}> <button>Click here to view my resume</button></a>
        <a href='https://www.linkedin.com/in/jason-sakamoto/'><button>LinkedIn</button></a>
        <a href='https://github.com/jasonsakamoto03'><button>Github</button></a>
      </div>
    </div>
    <div className="title" id='about'>
                <h1>About Me</h1>
    </div>
    <div className="about">
      <h2>Education and Career</h2>
        <p>Mathematics has been a lifelong passion of mine. I have always enjoyed the problem solving nature of the field and have always felt that it is a very powerful subject due to the many applications and high-level thinking behind it. Since coming to the University of Washington, I have taken courses in computer science, statistics, and data science along with my math courses which influenced my decision to become a data scientist. With the incomprehensible amount of data we have at our fingertips today, I feel that my knowledge and passion for mathematics and technology can be effectively used in this field to obtain a better understanding of the world around us.</p>
        <p>I am interested in machine learning and the development of artificial intelligence. My coursework in probability, linear algebra, and data science is giving me a good understanding of the principles behind machine learning and how I can use it in practice. I am also very familiar with database systems and working with large amounts of data and have experience managing and using real world datasets to answer insightful questions.</p>
        <h2>Relevant Coursework</h2>
        <li>AMATH 301 Beginning Scientific Computing</li>
        <li>AMATH 351 Ordinary Differential Equations and Applications</li>
        <li>AMATH 352 Applied Linear Algebra and Numerical Analysis</li>
        <li>AMATH 353 Partial Differential Equations and Waves</li>
        <li>CSE 121/122/123 Java Programming</li>
        <li>CSE 180 Introduction of Data Science</li>
        <li>CSE 373 Data Structures and Algorithms</li>
        <li>CSE 414 Database Systems</li>
        <li>INFO 201 Foundational Skills for Data Science</li>
        <li>MATH 224 Advanced Multivariable Calculus</li>
        <li>MATH/STAT 394 Probability I</li>
        <h2>Personal Life and Hobbies</h2>
        <p>My main hobby outside of class is golf. I have been playing for several years now currently working to become a single digit handicap. My driver and 3 wood are both Callaway Paradyms and I use a 2 hybrid that is a Callaway Rogue. I currently use Callaway Mavrik irons (soon switching to Srixon ZX5) and use Taylormade MG1 wedges (52, 54, and 60). My putter is an Oddysey White Hot Pro. I play nearly every weekend and have worked at in the pro shop at Bellevue Golf Course for two summers.</p>
        <p>My other big hobby outside of school is football. I take fantasy football so seriously I am working on a data science project in Python to help me find which players will lead me to a championship. In my free time all thoughout the year, I like to consume any form of NFL content whether that is highlights, free agency, draft, or podcasts. I am a bit agnostic when it comes supporting a team, but if it came down to it my NFC team is the Seattle Seahawks and my AFC team is the Tenessee Titans, also a part-time Dolphins fan.</p>
        </div>
        <div>
            <div className="title" id='projects'>
                <h1>Projects</h1>
            </div>
            <div className="about">
                <h2>Completed Projects</h2>
                <h4>Vaccine Scheduler</h4>
                <i>Utilized Java, SQL, Microsoft Azure, Java Database Connectivity (JDBC)</i>
                <p>This project is a vaccine reservation system application that is connected to a cloud database. I used JDBC to be able to directly update and query the database that contains appointments, caregiver availabilities, and avaiable vaccine doses. This program runs in the terminal and handles actions from patients and caregivers, requiring each user to sign in with username and password before perfroming viable such as updating availability or creating an appointment. I utilize salting and hashing to safely store user's passwords.</p>
                <h4>Connect-Four | <a href="https://github.com/jasonsakamoto03/connect-four">Link to Github Repository</a> | <a href="https://jasonsakamoto03.github.io/connect-four/">Link to Game</a></h4>
                <i>Utilized React.js</i>
                <p>This project is a simple game of Connect-Four developed using React.js to familiarize myself with the framework.</p>
                <h2>In the Works</h2>
                <h4>NFL Player Analytics | <a href="https://github.com/jasonsakamoto03/NFL-Player-Analytics">Link to Github Repository</a></h4>
                <i>Utilized Python (numpy, sqlite3, matplotlib, Jupyter Notebook), SQL</i>
                <p>This project is a program that manages, analyzes, and models NFL player data with the intention of predicting fantasy football success. Uses machine learning and numerical methods such as linear regression to identify trends in data and better understand the impacts of certain statistics.</p>
            </div>
        </div>
        <div className="title" id='contact'>
                <h1>Contact</h1>
            </div>
        <ContactUs></ContactUs>
    </>
  );
}



export default App;

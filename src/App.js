import './App.css';
import Navbar from './Components/NavBar';
import pfp from './pfp.jpeg'
import pdf from './Docs/Resume_Jason_Sakamoto.pdf'

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
    
    </>
  );
}



export default App;

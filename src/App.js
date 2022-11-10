
import './App.css';
import {React,useState} from 'react';
import Container from './Components/Container';

function App() {
  const [isDark, setDark] = useState(false);
  const toggleTheme = () =>{
    if(isDark){
      setDark(false);
    }else{
      setDark(true);
    }
  }
  console.log(isDark);
  return (
    <div className="App">
      
      <Container darkMode={isDark}/>
      <br/>
      <button style={{padding:"10px",
      backgroundColor:"pink",
      color:" 	#4B0082",
      borderRadius:"10%",
      border:"none",
      fontWeight:"bold",
      boxShadow:"gray 2px 2px 5px"}} onClick={toggleTheme} > DARK MODE  </button>
      <p>Created with ❤️. Happy Coding..</p>
      <h6>Renuka Choudhary</h6>
    </div>
  );
}

export default App;

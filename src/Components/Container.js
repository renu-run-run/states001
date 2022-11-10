const Container = (props) =>{
    const DarkStyleH2  = {
        color:"#FFC0CB",
    }
    const DarkStyleh5 ={
        color:"#F5F5F5",
    }
    const LightStyleH2 ={
         color:"#E56E94",
    }
    const LightStyleh5 ={
        color:"#778899",
   }
    if(props.darkMode){
        return(
            <div style={{backgroundColor:"#5E5A80"}}>
            <br/>
            <h1 style={{color:"#FFF0F5"}}>MY PROJECTS</h1>
             <h2 style={DarkStyleH2}>The GeekGallery </h2>
             <h5 style={DarkStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
             <h2 style={DarkStyleH2}>Memory Game </h2>
             <h5 style={DarkStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
             <h2 style={DarkStyleH2}>Password Generator </h2>
             <h5 style={DarkStyleh5}>It is implemented in React. It uses react Hooks, statelifting and random function </h5>
             <h2 style={DarkStyleH2}>My Portfolio</h2>
             <h5 style={DarkStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
             <br/>
            </div>
            )
    }
    else{
        return(
            <div style={{backgroundColor:" 	#F8F8FF"}}>
            <br/>
            <h1 style={{color:"#7575CF"}}>MY PROJECTS</h1>
            <h2 style={LightStyleH2}>The GeekGallery </h2>
            <h5 style={LightStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
            <h2 style={LightStyleH2}>Memory Game </h2>
            <h5 style={LightStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
            <h2 style={LightStyleH2}>Password Generator </h2>
            <h5 style={LightStyleh5}>It is implemented in React. It uses react Hooks, statelifting and random function </h5>
            <h2 style={LightStyleH2}>My Portfolio</h2>
            <h5 style={LightStyleh5}>It is implemented in React. It uses the concept of react Hooks, propsdrilling statelifting</h5>
            <br/>
            </div>
        )
    }
    
}
export default Container
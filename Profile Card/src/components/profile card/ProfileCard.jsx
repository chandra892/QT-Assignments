import React, { useState } from 'react';
import './ProfileCard.css'

const ProfileCard = () => {
  const [profile, setProfile] = useState("https://th.bing.com/th/id/OIP.F_poP7oigM0fO5AvUWM2SAHaJ3?w=156&h=208&c=7&r=0&o=5&pid=1.7");
  const [name, setName] = useState("Harry");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("harry@gamil.com");
  const [position, setPosition] = useState("The estimated total pay for a Software Engineer is $159,558 per year, with an average salary of $115,693 per year. These numbers represent the median, which is the midpoint of the ranges from our proprietary Total Pay Estimate model and based on salaries collected from our users.");
  const [theme, setTheme] = useState({bgColor:"white", textColor:"black" , message:"Click Switch To DarkMode"})

  //Light and Dark theme state variable
 /*  const [isDarkMode, setIsDarkMode] = useState();
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }; */


  function changeToSneha() {
    setProfile("https://www.bing.com/th?id=OIP.9HYbuHazDv_KDgZAoyTzywHaLG&w=150&h=225&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2");
    setName("Jessy");
    setGender("female");
    setEmail("jessy@gamil.com")
    setPosition("Architects in the UK typically charge between 3% and 15% of the total construction costs. However, this varies depending on factors including their level of involvement, the complexity of the project and the architect's experience. Some architects may also offer a fixed fee or hourly rate.");

  }

  function changeToRohit() {
    setProfile("https://th.bing.com/th/id/OIP.F_poP7oigM0fO5AvUWM2SAHaJ3?w=156&h=208&c=7&r=0&o=5&pid=1.7");
    setName("Harry");
    setGender("male");
    setEmail("harry@gamil.com");
    setPosition("The estimated total pay for a Software Engineer is $159,558 per year, with an average salary of $115,693 per year. These numbers represent the median, which is the midpoint of the ranges from our proprietary Total Pay Estimate model and based on salaries collected from our users.");

  }

  const themeChange=(event)=>{
    if(event.target.checked){
      setTheme({bgColor:"black", textColor:"white", message:"Click Switch To LightMode"});
    }
    else{
      setTheme({bgColor:"white", textColor:"black", message:"Click Switch To DarkMode"});
  }
}

 /*  function themeChange(){ 
    if(theme.bgColor === "white"){
      setTheme({bgColor:"black", textColor:"white", message:"Click Switch To LightMode"});  
    }
    else{
      setTheme({bgColor:"white", textColor:"black", message:"Click switch to DarkMode"})
    }
  } */

  return (
    <div className='empcard'>
      <div className="image">
        <img src={profile}
          alt="image" width={"100%"} height={"100%"}
          />
      </div>
      <div className="details" style={{backgroundColor:theme.bgColor, color:theme.textColor}}>
        <dl>
          <dt><b>Name</b></dt>
          <dd>{name}</dd>

          <dt><b>Gender</b></dt>
          <dd>{gender}</dd>

          <dt><b>Email</b></dt>
          <dd>{email}</dd>

          <dt><b>Designation</b></dt>
          <dd>{position}</dd>

        </dl>

        <div className='radio-buttons'>
          <div>
            <input type='radio' name='gender' onClick={changeToRohit} />
            <label >male</label>
          </div>
          <div>
            <input type='radio' name='gender' onClick={changeToSneha} />
            <label >Female</label>
          </div>
          
        </div>

        <div className='checkbox'>
          <input type="checkbox"  onChange={themeChange}/>
          <label >{theme.message}</label>
        </div>
      </div>


    </div>

  )
}


export default ProfileCard
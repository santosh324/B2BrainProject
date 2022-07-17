import "./cards.css";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
export default function Cards({company,website,logo,color,slug}) {

  const [buttonClicked,setClicked] = useState(false);

  const handleButtonClick = (event)=>{    
    console.log(`${company} (${slug}) tracked at ${new Date().getTime()}`)
    setClicked(true)
    setTimeout(()=>{setClicked(false)},1000)
  }

  
  return (
    <div className="card-parent">
      <div className="card-logo-description">
       {logo.length? <div className="logo-image-div">
          <img className="logo-image" src={logo} alt="card-logo" />
        </div>:<div className="logo-image-div" style={{backgroundColor:color}}>
          <h3 style={{fontSize:"2rem",paddingTop:"2px",marginTop:0,paddingBottom:0,marginBottom:0,paddingLeft:"10px",paddingRight:"10px"}}>{company[0]}</h3>
        </div>}

        <div className="text-detail">
          <h5>{company}</h5>
          <p>{website}</p>
        </div>
      </div>
      <div className="card-button">
        {!buttonClicked?<button className="track-button" onClick={()=>setTimeout(handleButtonClick,200)}>Track</button>:
                                <button className="track-button" style={{backgroundColor:"white",border:"1px solid green",color:"green"}}><CircularProgress size={"10px"} marginTop={"1px"}/>Tracking</button>}
      </div>
    </div>
  );
}

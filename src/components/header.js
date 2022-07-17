import "./header.css";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ setNewPage,setApiData }) {
  // state with boolean value to switch search icon to close icon
  // state to store searched query 
  const [searchQueryEntered, setQuery] = useState(false);
  const [value, setValue] = useState("");
  const url = "https://tva.staging.b2brain.com/search/autocomplete_org_all/"

  // useEffect hook with dependency to "value" state
  useEffect(() => {    
    async function onLoad(){
      if(value===""){
        setNewPage(false);
        setQuery(false);
      }else{
        const data = await fetch(`${url}?q=${value}`).then((response)=>response.json())
        setApiData(data);
      }      
    }    
    onLoad();

  }, [value]);

  // function run on after debounce timeout cleared 
  const handleInputChange = (...data) => {
    setValue(data[0].target.value);
    setQuery(true);
    setNewPage(true);
  };


  // function to handle click event on close icon
  const handleCloseButtonClick = () => {
    console.log("close button clicked");
    let query = document.getElementById("searchQuery");
    query.value = ""
    setQuery(false);
    setNewPage(false);
  };


  // debounce function will forward input string only when user stops entering,
  // this will prevent multiple API calling
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay)
    }
  }


  return (
    <div className="header">
      <div className="search-bar">
        {!searchQueryEntered ? (
          <SearchIcon sx={{ width: "20px", color: "gray" }} />
        ) : (
          <CloseIcon
            sx={{ width: "20px", color: "gray", cursor: "pointer" }}
            onClick={handleCloseButtonClick}
          />
        )}
        <input
          id="searchQuery"
          placeholder="search by account name or website"
          onChange={debounce(handleInputChange,500)}
        />
      </div>

      <div className="user-icon">
        <div className="notification-circle"></div>
        <div className="notification-icon">
          <NotificationsNoneIcon
            sx={{ width: "14px", paddingLeft: "5px", color: "gray" }}
          />
        </div>
        <div className="user-pic"></div>
      </div>
    </div>
  );
}

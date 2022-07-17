// import HeaderContent from "./components/headerContent";
import Header from "./components/header";
import LeftPanel from "./components/leftPanel";
import "./styles.css";
import Content from "./components/content";
import Accounts from "./components/account";
import { useState } from "react";

export default function App() {
  // state with boolean value to switch between main page to page with cards
  const [newPage, setNewPage] = useState(false);
  // apiData array will store API response, entered on search bar
  const [apiData,setApiData] = useState([])

  return (
    <div className="App">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="header-parent">
        <Header setNewPage={setNewPage} setApiData={setApiData}/>
      </div>
      <div className="content-parent">
        {!newPage ? (
          <Content setNewPage={setNewPage} />
        ) : (
          <Accounts setNewPage={setNewPage} apiData={apiData}/>
        )}
      </div>
    </div>
  );
}

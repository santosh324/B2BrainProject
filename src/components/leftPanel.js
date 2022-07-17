import PsychologyIcon from "@mui/icons-material/Psychology";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import LinkIcon from "@mui/icons-material/Link";
import PeopleIcon from "@mui/icons-material/People";
import QuizIcon from "@mui/icons-material/Quiz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRef, useState } from "react";
import "./leftPanel.css";

export default function LeftPanel() {
  // state to switch mui up arrow to down arrow
  const [downArrow1, setDownArrow1] = useState([
    <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
  ]);

  // state to switch mui downArrow to upArrow
  const [downArrow2, setDownArrow2] = useState([
    <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
  ]);

  // click1 and click2 used to toggle accordion
  const click1 = useRef(1);
  const click2 = useRef(1);

  // first accordion click event
  const accountTab = (event) => {
    let firstAccordion = document.getElementById("accordion1");

    if (click1.current === 1) {
      firstAccordion.style.transition = ".5s";
      firstAccordion.style.display = "block";
      click1.current++;
      if (click2.current === 2) {
        prefrenceTab();
      }
      setDownArrow1([<KeyboardArrowUpIcon sx={{ cursor: "pointer" }} />]);
    } else if (click1.current === 2) {
      firstAccordion.style.display = "none";
      click1.current--;
      setDownArrow1([<KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />]);
    }
  };

  // second accordion click event
  const prefrenceTab = () => {
    let secondAccordion = document.getElementById("accordion2");

    if (click2.current === 1) {
      secondAccordion.style.display = "block";
      click2.current++;
      if (click1.current === 2) {
        accountTab();
      }
      setDownArrow2([<KeyboardArrowUpIcon sx={{ cursor: "pointer" }} />]);
    } else if (click2.current === 2) {
      secondAccordion.style.display = "none";
      click2.current--;
      setDownArrow2([<KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />]);
    }
  };

  return (
    <div className="inner-left-panel">
      <div className="logo-brand">
        <div className="brand-logo-image">
          <PsychologyIcon />
        </div>
        <div className="company-name item-name"> B2Brain</div>
      </div>
      <div className="menu-list">
        <div className="item">
          <div>
            <HomeIcon />
          </div>
          <div className="item-name">Dashboard</div>
        </div>
        <div className="intel-info">
          <p>4 unread </p>
        </div>
        <div className="item">
          <div>
            <StarIcon />
          </div>
          <div className="item-name">Intels</div>
        </div>

        <div className="intel-info">
          <p>4 unseen </p>
        </div>
        <div className="item">
          <div>
            <PersonIcon />
          </div>
          <div className="item-name">Leads</div>
        </div>

        <div className="item" onClick={(event) => accountTab(event)}>
          <div className="down-arrow" id="downArrow">
            {downArrow1}
          </div>
          <div>
            <ApartmentIcon />
          </div>
          <div className="item-name">Accounts</div>
        </div>
        <div className="accordion1" id="accordion1">
          <table>
            <tr>
              <td>Manage All</td>
            </tr>
            <tr>
              <td>Track new Accounts</td>
            </tr>
            <tr>
              <td>Bulk Import</td>
            </tr>
          </table>
        </div>

        <div className="item" onClick={(event) => prefrenceTab(event)}>
          <div className="down-arrow2">{downArrow2}</div>
          <div>
            <SettingsIcon />
          </div>
          <div className="item-name">Prefrences</div>
        </div>

        <div className="accordion2" id="accordion2">
          <table>
            <tr>
              <td>Product Focus</td>
            </tr>
            <tr>
              <td>Intel Prefrences</td>
            </tr>
            <tr>
              <td>Lead Persona</td>
            </tr>
          </table>
        </div>
        <div className="item">
          <div>
            <LinkIcon />
          </div>
          <div className="item-name">Integrations</div>
        </div>
        <div className="item">
          <div>
            <PeopleIcon />
          </div>
          <div className="item-name">Team</div>
        </div>
        <div className="item">
          <div>
            <QuizIcon />
          </div>
          <div className="item-name">Help/Support</div>
        </div>
      </div>
    </div>
  );
}

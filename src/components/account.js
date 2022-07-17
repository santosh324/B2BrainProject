import "./accounts.css";
import Cards from "./cards";
import {arr} from "./dataArray";

export default function Accounts({apiData}) {
 
  let newArr = [...arr]
  newArr = [...newArr,...apiData]
 
  return (
    <div className="top-div">
      <div clasName="text-card">
        <div clasName="card-description">
          <h6 className="card-font">Similar Accounts</h6>
        </div>
        <div className="account-parent">
          {newArr.map((val) => (
            <Cards company={val.company} logo={val.logo} website={val.website} color={val.color} slug={val.slug}/>
          ))}
        </div>
      </div>

      <div className="quick-actions">
        <div className="card-description">
          <h6 className="card-font">Quick Actions</h6>
        </div>
        <div className="quick-actions-table">
          <table>
            <tr>
              <td>Track new Accounts</td>
            </tr>
            <tr>
              <td>Bulk track Accounts</td>
            </tr>
            <tr>
              <td>Manage Accounts</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

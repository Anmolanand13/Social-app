import "./topbar.css"
import { Search ,Person,Chat,Notifications} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
      <div className="logo">SocialApp</div>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
         <Search className="searchIcon"/>
         <input placeholder="Search for friend,post or video" className="searchinput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaritems">
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="assests/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

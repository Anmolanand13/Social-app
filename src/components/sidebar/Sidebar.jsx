import './sidebar.css'
import { RssFeed,Chat,Group,Bookmark,QuestionAnswer,Event} from '@mui/icons-material'
import VideocamIcon from '@mui/icons-material/Videocam';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummydata';
import WorkIcon from '@mui/icons-material/Work';
import Close from '../closefriends/Close';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className="sideBarList">
          <li className="sidebarListItem">
           <RssFeed className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
           <Chat className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Chat</span>
          </li>
          <li className="sidebarListItem">
           <Group className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Group</span>
          </li>
          <li className="sidebarListItem">
           <Bookmark className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Bookmark</span>
          </li>
          <li className="sidebarListItem">
           <QuestionAnswer className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Questions</span>
          </li>
          <li className="sidebarListItem">
           <Event className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Event</span>
          </li>
          <li className="sidebarListItem">
           <VideocamIcon className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Video</span>
          </li>
          <li className="sidebarListItem">
           <WorkIcon className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
           <SchoolIcon className='sideBarIcon'/>
           <span className='sidebarlistItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebar-button'>Show more</button>
        <hr className='sidebar-hr'/>
        <ul className="sidebarfriendList">
         {Users.map((u)=>(
          <Close key={u.id} user={u}/>
         ))}
        </ul>
      </div>
      </div>
  )
}

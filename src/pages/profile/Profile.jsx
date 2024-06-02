import './profile.css'
import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export const Profile=()=> {
  return (
    <><Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileright">
        <div className="profilerighttop">
          <div className="profilecover">
          <img className="profileCoverImg" src="assests/person/upload4.jpeg" alt="" />
          <img className="profileuserImg" src="assests/person/1.jpeg" alt="" />
          </div>
          <div className="profileinfo">
            <h4 className="profileinfoname">Anmol Anand</h4>
            <span className='profileinfoDesc'>Hello my Friends!</span>
          </div>
        </div>
        <div className="profilerightbottom">
             <Feed/>
    <Rightbar profile/>
        </div>
   
    </div>
    </div>
  </>
  )
}

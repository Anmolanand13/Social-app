import './rightbar.css'
import {Users} from '../../dummydata'
import Online from '../online/Online'
// import Online from '../online/Online'
export default function Rightbar({profile}) {
  const HomeRightbar=()=>
    {
      return(
        <>
        <div className="birthdaycontainer">
          <img src="assests/person/gift.jpeg" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Ankit Sharma</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assests/person/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online friends</h4>
        <ul className="rightbarfriendlist">
         {Users.map(u=>(
          <Online key={u.id} user={u}/>
         ))}
        </ul>
        </>
      );
    };
    const ProfileRightbar=()=>
      {
        return(
          <>
          <h4 className='rightbartitle'>User information</h4>
          <div className="rightbarinfo"></div>
          <div className="rightbarinfoitem">
          <span className="rightbarinfokey">City:</span>
          <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">
          <span className="rightbarinfokey">From:</span>
          <span className="rightbarinfovalue">India</span>
          </div>
          <div className="rightbarinfoitem">
          <span className="rightbarinfokey">Relationship:</span>
          <span className="rightbarinfovalue">Single</span>
          </div>
          <h4 className='rightbartitle'>User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarfollowing">
              <img src="assests/person/1.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Arun Maheshwari
              </span>
            </div>
            <div className="rightbarfollowing">
              <img src="assests/person/2.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Aman Chaturwedi
              </span>
            </div>
            <div className="rightbarfollowing">
              <img src="assests/person/3.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Yusuf Sheikh
              </span>
            </div>
            <div className="rightbarfollowing">
              <img src="assests/person/4.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Anshika Rastogi
              </span>
            </div>
            <div className="rightbarfollowing">
              <img src="assests/person/5.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Aradhya Anand
              </span>
            </div>
            <div className="rightbarfollowing">
              <img src="assests/person/6.jpeg" alt="" className="rightbarfollowingimg" />
              <span className="rightbarfollowingname">
                Anmol Anand
              </span>
            </div>
          </div>
          </>
        )
      }
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
        <ProfileRightbar/>
       </div>
        </div>
  )
}

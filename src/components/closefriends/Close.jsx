import "./close.css"

export default function Close({user}) {
  return (
    <div>
         <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className='sidebarFriendName'>{user.username}</span>
          </li>
    </div>
  )
}

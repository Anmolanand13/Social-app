import { Users } from '../../dummydata';
import './post.css'
import { MoreVert } from '@mui/icons-material'
import { useState } from 'react';
export const Post = ({post}) => {
  const [like,setlike]=useState(post.like)
  const [isliked,setisliked]=useState(false)
  const likehandler=()=>
    {
      setlike(isliked? like-1:like+1)
      setisliked(!isliked)
    }
  return (
    <div className='post'>
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src={Users.filter((u) => u.id === post.userid)[0].profilePicture} alt="" className="postprofileimg" />
            <span className="postusername">{Users.filter((u) => u.id === post.userid)[0].username}</span>
            <span className="posttime">{post.date}</span>
          </div>
          <div className="posttopright">
         <MoreVert/>
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">
           {post?.desc}
          </span>
          <img className='postimg' src={post.Photo} alt="" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img src="assests/person/like1.jpeg" alt="" className="likeicon" onClick={likehandler} />
            <img src="assests/person/like2.jpeg" alt="" className="likeicon" onClick={likehandler}/>
            <span className="likecounter">{like}</span>
          </div>
          <div className="postbottomright">
            <span className="postcomment">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  )
}

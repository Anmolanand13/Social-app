import './share.css'
import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'

export const Share = () => {
  return (
    <div className='share'>
      <div className="sharewrapper">
      <div className="sharetop">
        <img src="./assests/person/1.jpeg" alt="" className="shareprofileimg" />
        <input placeholder='whats in your mind,Anmol?' className="shareInput" />
      </div>
      <hr className="sharehr" />
      <div className="sharebottom">
        <div className="shareoptions">
          <div className="shareoption">
            <PermMedia htmlColor='tomato' className='shareicon'/>
            <span className="shareoptiontext">Photo or Video</span>
          </div>
          <div className="shareoption">
            <Label htmlColor='blue' className='shareicon'/>
            <span className="shareoptiontext">Tag</span>
          </div>
          <div className="shareoption">
            <Room htmlColor='green' className='shareicon'/>
            <span className="shareoptiontext">Location</span>
          </div>
          <div className="shareoption">
            <EmojiEmotions htmlColor='goldenrod' className='shareicon'/>
            <span className="shareoptiontext">feelings</span>
          </div>
        </div>
        <button className='sharebutton'>share</button>
      </div>
      </div>
     
    </div>
  )
}

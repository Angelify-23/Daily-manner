import callIcon from '../../assets/images/contactus.png';
import mailIcon from '../../assets/images/mail.png';
import twitterIcon from '../../assets/images/twit.png';
import youtubeIcon from '../../assets/images/youtube.png';
import instagramIcon from '../../assets/images/inst.png';
import facebookIcon from '../../assets/images/fb.png';

const TopHeader = () => {
  return (
    <div className="top-header">
        <div className="contact">
            <img src={callIcon} alt="call icon" /><span>08143712761</span>
        </div>
        <div className="mail">
            <img src={mailIcon} alt="mail icon" /><span>ogaziangel460@gmail.com</span>
        </div>
        <span>Follow Us and get a chance to win 80% off</span>
        <div className="social-media">
            <span>Follow Us:</span><img src={twitterIcon} alt="twitter icon" />
            <img src={youtubeIcon} alt="youtube icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={facebookIcon} alt="facebook icon" />
        </div>
        
    </div>
  )
}

export default TopHeader
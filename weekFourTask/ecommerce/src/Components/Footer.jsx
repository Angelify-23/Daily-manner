import facebookIcon from '../assets/images/fb.png';
import instagramIcon from '../assets/images/inst.png';
import twitterIcon from '../assets/images/twit.png';
const Footer = () => {
    return (
        <>
        <nav className='foot-icons'>
                <h3>Bandage</h3>
            <div className="foot-icon">
                <img src={facebookIcon} alt="facebook icon" />
                <img src={instagramIcon} alt="instagram icon" />
                <img src={twitterIcon} alt="twitter icon" />
            </div>
        </nav>

        </>
    )
}
export default Footer
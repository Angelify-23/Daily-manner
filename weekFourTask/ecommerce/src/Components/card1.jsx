import menImg from '../assets/images/men.png';
import womenImg from '../assets/images/women.png';
import accessoryImg from '../assets/images/accessories.png';
import kidsImg from '../assets/images/kids.png';
const Card = () => {
    return(
        <>
            <nav className='editor-card'>
                <section className='editor-text'>
                    <h2>EDITOR'S PICK</h2>
                    <p>Problems trying to resolve the conflict between</p>
                </section>
                <div className='editor-img'>
                    <img src={menImg} alt=' men wears' />
                    <img src={womenImg} alt=' women wears' />
                    <nav className='editor-imga'>
                    <img src={accessoryImg} alt=' accessory wears' />
                    <img src={kidsImg} alt=' kids wears' />
                    </nav>
                </div>
            </nav>
    
        </>
    )
}
export default Card
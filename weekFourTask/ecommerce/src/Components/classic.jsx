import shopHero from '../assets/images/shophero2.png';

const Classic = () => {
    return (
        <>
            <section className="container">
                <div className="shop-hero-img">
                <img src={shopHero} alt="shop Hero" />  
                </div> 
                <div className="shop-hero-text">
                  <p>SUMMER 2020</p>
                  <h1>Vita Classic <br></br>Product</h1>
                  <h3>We know how large objects will act,we know 
                    <br></br>how are objects will act, we know</h3>
                  <h4>$16.48</h4>
                  <button>ADD TO CART</button>
               </div>
            </section>
        </>
    )   
}

export default Classic;
import bannerImg from '../assets/images/banner.png' ;
const Banner = () => {
    return (
        <>
          <section className="banner">
               <div className="banner-img">
                  <img src={bannerImg} alt= "header background" />
               </div>
               <div className="banner-text">
                  <p>SUMMER 2020</p>
                  <h1>NEW COLLECTION</h1>
                  <h3>We know how large objects will act, <br></br>buy things on a small scale.</h3>
                  <button>SHOP NOW</button>
               </div>
           </section>
        </>
    )
}
export default Banner
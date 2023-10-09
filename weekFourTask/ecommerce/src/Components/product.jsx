import graphicDesignA from '../assets/images/gd1.png';
import graphicDesignB from '../assets/images/gd2.png';
import graphicDesignC from '../assets/images/gd3.png';
import graphicDesignD from '../assets/images/gd4.png';
import graphicDesignE from '../assets/images/Ellipse 14.png';
import graphicDesignF from '../assets/images/Ellipse 15.png';
import graphicDesignG from '../assets/images/Ellipse 16.png';
import graphicDesignH from '../assets/images/Ellipse 17.png';
const Product = () => {
    return(
        <>
        <div className="product-container">
           <section className='product-title'>
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between</p>
           </section>
            <div className='product-list'>
                <div className="pruduct-lista">
                            <img src ={graphicDesignA} alt ='graphic design a' />
                        <h5>Graphic Design</h5>
                            <h6>English Department<br></br> $16.48 $6.48</h6>
                    <span>
                            <img src ={graphicDesignE} alt ='graphic design e' />
                            <img src ={graphicDesignF} alt ='graphic design f' />
                            <img src ={graphicDesignG} alt ='graphic design g' />
                            <img src ={graphicDesignH} alt ='graphic design h' />
                    </span>
                </div>
                <div className="product-listb">
                            <img src ={graphicDesignB} alt ='graphic design b' />
                            <h5>Graphic Design</h5>
                            <h6>English Department<br></br> $16.48 $6.48</h6>
                    <span>
                            <img src ={graphicDesignE} alt ='graphic design e' />
                            <img src ={graphicDesignF} alt ='graphic design f' />
                            <img src ={graphicDesignG} alt ='graphic design g' />
                            <img src ={graphicDesignH} alt ='graphic design h' />
                    </span>
                </div>
                <div className="product-listc">
                            <img src ={graphicDesignC} alt ='graphic design c' />
                            <h5>Graphic Design</h5>
                            <h6>English Department<br></br> $16.48 $6.48</h6>
                    <span>
                            <img src ={graphicDesignE} alt ='graphic design e' />
                            <img src ={graphicDesignF} alt ='graphic design f' />
                            <img src ={graphicDesignG} alt ='graphic design g' />
                            <img src ={graphicDesignH} alt ='graphic design h' />
                    </span>
                </div>
                <div className="product-listd">
                            <img src ={graphicDesignD} alt ='graphic design d' />
                            <h5>Graphic Design</h5>
                            <h6>English Department<br></br> $16.48 $6.48</h6>
                    <span>
                            <img src ={graphicDesignE} alt ='graphic design e' />
                            <img src ={graphicDesignF} alt ='graphic design f' />
                            <img src ={graphicDesignG} alt ='graphic design g' />
                            <img src ={graphicDesignH} alt ='graphic design h' />
                    </span>
                </div>
           </div>
           </div>

        </>
    )
}
export default Product
import { clockImg, commentImg, arrowImg } from '../utilities/image';
const BlogCard = ({blog}) => {
    const {Image, navText1, navText2, navText3, blogCardHeader, blogCardText, date, comment, btn} = blog;
    return (
        <section className='blog-card-container'>
            <div className="blog-card-image">
                <img src ={Image} alt =' house img' />
                <div className='image-text'>
                    <p>NEW</p>
                </div>
            </div>
            <div>
                <div>
                    <a href="#">{navText1}</a>
                    <a href="#">{navText2}</a>
                    <a href="#">{navText3}</a>
                </div>
                <div>
                    <h2>{blogCardHeader}</h2>
                </div>
                <div>
                    <p>{blogCardText}</p>
                </div>
                <div>
                    <span>
                        <img src ={clockImg} alt ='clock img' />
                        <p>{date}</p>
                    </span>
                    <span>
                        <img src = {commentImg} alt ='comment img' />
                        <p>{comment}</p>   
                    </span>
                </div>
                <div>
                    <button>
                        <span>{btn}</span>
                        <img src ={arrowImg} alt ='arrow next' />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default BlogCard
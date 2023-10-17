import coupleImg from '../assets/images/couple.png';
import { blogCardArray } from '../utilities/mockData';
import BlogCard from './BlogCard';

const Blog = () => {
    return (
        <>
        <div className="cople-container">
            <div className="cople-img">
                <img src ={coupleImg} alt = "couple img" />
            </div>
            <div className="cople-text">
                <h6>SUMMER 2020</h6>
                <h3>Part of the Neutral Universe</h3>
                <p>We know how large objects will act,<br></br>but things on a small scale</p>
                <button>BUY NOW</button><button>READ MORE</button>
            </div>
        </div>
        <div className='featured-post'>
            <span className='featured-post-header'>
                <h6>Practice Advice</h6>
                <h2>Featured Posts</h2>
                <p>Problems trying to resolve the conflict between the major realms of Classical physics: Newtonian mechanics</p>
            </span>
            <div className="blog-post">
                {blogCardArray.map((blogs)=>{
                    return (
                        <BlogCard 
                            key = {blogs.Image}
                            blog ={blogs}
                        />
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default Blog
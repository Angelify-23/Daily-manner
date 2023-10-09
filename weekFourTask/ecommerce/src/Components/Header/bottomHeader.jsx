import loginIcon from '../../assets/images/login.png';
import searchIcon from '../../assets/images/search.png';
import cartIcon from '../../assets/images/addtocart.png';
import likeIcon from '../../assets/images/likes.png';

const BottomHeader = () => {
  return (
    <>
      <nav className='bottom-header'>
        <h3>Bandage</h3>
        <ul className='nav-links'>
            <li className="nav-link"><a href=""></a>Home</li>
            <li><a href="nav-link"></a>Shop</li>
            <li><a href="nav-link"></a>About</li>
            <li><a href="nav-link"></a>Blog</li>
            <li><a href="nav-link"></a>Contact</li>
            <li><a href="nav-link"></a>Pages</li>
        </ul>
        <div className='bottom-icons'>
          <img src={loginIcon} alt="login icon" /><span>Login/Register</span>
          <img src={searchIcon} alt="search icon" className='searchIcon' />
          <img src={likeIcon} alt="like icon" />
          <img src={cartIcon} alt="cart icon" />  
        </div>
      </nav>
    </> 
  )
}

export default BottomHeader
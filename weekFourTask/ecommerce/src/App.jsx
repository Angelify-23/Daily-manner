import Header from './Components/Header/Header'
import Banner from './Components/banner.jsx/'
import Card from './Components/Card.jsx'
import Product from './Components/Product.jsx/'
import Classic from './Components/Classic.jsx/'
import Footer from './Components/Footer.jsx/'
import Blog from './Components/Blog.jsx/'
function App() {

  return (
    <>
      <Header />
      <Banner />
      <Card headerText= "EDITOR'S PICK" pText="Problems trying to resolve the conflict between"  />
      <Product />
      <Classic />
      <Blog />
      <Footer />
    </>
  )
}

export default App

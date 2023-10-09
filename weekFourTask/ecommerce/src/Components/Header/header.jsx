import BottomHeader from "./bottomHeader"
import TopHeader from "./topHeader"

const Header = () => {
  return (
    <header className="header">
      <div>
       <TopHeader />
       <BottomHeader />  
      </div>
    </header>
  )
}
export default Header

import "./App.css"
import { Navbar } from './HomePage/navbar/Navbar'
import { MainSection } from "./HomePage/MainSection/MainSection"
import { CardSection } from "./HomePage/CardSection/CardSection"
import { CardBlog } from "./HomePage/CardSection/CardBlog"
import { Interested } from "./HomePage/Interested/Interested"
import { MissionSectionA } from "./HomePage/MissionSection/MissionSectionA"




function App() {
  return (
    <>
    
      <Navbar />
      
      <div className="sections">
        <MainSection />
        <CardSection />
        <MissionSectionA />
        <Interested />
        <CardBlog />
        
      </div>



    </>
  )
}

export default App

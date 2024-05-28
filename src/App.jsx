
import "./App.css"
import { Navbar } from './HomePage/navbar/Navbar'
import { MainSection } from "./HomePage/MainSection/MainSection"
import { CardSection } from "./HomePage/CardSection/CardSection"




function App() {
  return (
    <>
    
      <Navbar />
      
      <div className="sections">
        <MainSection />
        <CardSection />
      </div>



    </>
  )
}

export default App

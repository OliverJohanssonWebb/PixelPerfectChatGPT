import Hero from "./Components/Hero/Hero"
import SideBarLeft from "./Components/SideBarLeft/SideBarLeft"
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    <>
    <div className="flex">
    <SideBarLeft />
      <Hero />
    </div>
    
    </>
  )
}

export default App
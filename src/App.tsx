import Hero from "./Components/Hero/Hero"
import SideBarLeft from "./Components/SideBarLeft/SideBarLeft"
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Chatwindow from "./Components/ChatWindow/Chatwindow";

const App = () => {
  return (
<div className="flex h-screen">
  <SideBarLeft />

  <div className="w-5/6 flex flex-col">
    <Hero />
    <Chatwindow />
  </div>
</div>
  )
}

export default App
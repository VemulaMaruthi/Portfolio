import { Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import Greeting from './Components/Greeting'
import Information from "./Components/Information"
import About from "./Components/About/About"
import Skills from './Components/Skills/Skills'
import ProjectMain from './Components/Projects/ProjectMain'
import Educations from './Components/Education/Educations'
//import Blog from './Components/Blog/Blog'
import Contacts from './Components/Contact/Contacts'
import CopyRights from './Components/CopyRights/CopyRights'
function App() {
    const contactsRef = useRef(null);
 return(
  <>
  <div className="bg-background">
      <Greeting/>
      <Information contactsRef = {contactsRef}/>
      <About/>
      <Skills/>
      <ProjectMain/>
      <Educations/>
   {/*<Blog/> */}
      <Contacts ref = {contactsRef}/>
      <CopyRights/>
  </div>
  </>
 )
}

export default App

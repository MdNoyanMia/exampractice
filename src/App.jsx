
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rootlayout from './components/Layouts/Rootlayout'
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Journal from './components/Pages/Journal'
import Countdown from './components/Layouts/Countdown'



function App() {


  return (
    <>


      <div className="App">

      </div>

 

      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='journal' element={<Journal />} />
          <Route path='journal' element={<Countdown />} />


        </Route>
      </Routes>

     
    </>
  )
}

export default App


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Email from './email'
import Formget from './assets/Formget'
import Formupdate from './formupdate'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Email/>} />
      <Route path='/get' element={<Formget/>} />
<Route path='/update/:id' element={<Formupdate/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

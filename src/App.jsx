import {Route,Routes} from 'react-router-dom'
import Anime from './Pages/Anime'
import Buisness from './Pages/Buisness'
import Space from './Pages/Space'
import Stock from './Pages/Stock'
import Tech from './Pages/Tech'
import Layout from './Layout'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Tech/>}/>
        <Route path='anime' element={<Anime/>}/>
        <Route path='space' element={<Space/>}/>
        <Route path='buisness' element={<Buisness/>}/>
        <Route path='stock' element={<Stock/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

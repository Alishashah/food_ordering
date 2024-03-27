import About from "./component/About"
import Cart from "./component/Cart"
import Contact from "./component/Contact"
import { Error } from "./component/Error"
// import Grocery from "./component/Grocery"
import Header from "./component/Header"
import Mainbody from "./component/Mainbody"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Restromenu from "./component/Restromenu"
import { Suspense, lazy } from "react"
import { UserdataContext } from "./context/User"
// import Shimmer from "./component/Shimmer"

const Grocery=lazy(()=>import("./component/Grocery"))

function App() {
  return (
    <UserdataContext>
    <Router>
        <Header/>
      <Routes>
          <Route>
          <Route path="/" element={<Mainbody/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/grocery" element={<Suspense fallback={<h1>loading....</h1>}> <Grocery/></Suspense>}/>
          <Route path='/restaurants/:resid' element={<Restromenu/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>

    </Router>
    </UserdataContext>
  )
}

export default App

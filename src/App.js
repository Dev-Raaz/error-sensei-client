
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


//@User-defined imports
//Pages
import Home from "./pages/Home"
import ErrorCategory from "./pages/ErrorCategory"
import Error from "./pages/Error"
import Error404 from "./pages/Error404"

//Components
import Navbar from "./components/Navbar"

//@Main Component
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:cat" element={<ErrorCategory/>}/>
        <Route path="/:category/:error" element={<Error/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;

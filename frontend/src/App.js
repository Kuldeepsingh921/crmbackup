import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AllRoutes from './components/AllRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from "./action/authAction";
import {useDispatch} from "react-redux"
import {useEffect} from "react"
function App() {

  const dispatch  = useDispatch()
  useEffect(()=>{
    dispatch(loadUser())
   
},[dispatch])
  return (
    <div className="App">
   <AllRoutes />
   <ToastContainer />
    </div>
  );
}

export default App;

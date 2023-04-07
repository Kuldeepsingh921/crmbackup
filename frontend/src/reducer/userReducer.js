
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Cookies from 'universal-cookie';



const cookies = new Cookies();



const token  = cookies.get('cns-token')
const user=token?jwtDecode(token):""
const initialState = {
  token: token,
  name: token?user.name:null,
  role: token?user.role:null,
  email: token?user.email:null,
  _id: token?user._id:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      
      const user = token?jwtDecode(token): jwtDecode(action.payload.token||token)
      // console.log(action.)
      
      return {
        ...initialState,
        token: token?token:action.payload.token,
        name: user.name,
        email: user.email,
        role:user.role,
        _id: user._id,
      }; 
    case "SIGN_OUT":
      cookies.remove("cns-token");
      toast.success('goodbye...', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    
      return {
        token: null,
        name: null,
        phone:null,
        email: null,
        _id: null,
        role: null,
      };
    default:
      return state;
  }
};

export default authReducer;
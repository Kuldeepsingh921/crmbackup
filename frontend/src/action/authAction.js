
import axios from "axios";
import { toast } from "react-toastify";

// import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';





export const signIn = (logindata) => {
  console.log(logindata)
  const cookies = new Cookies()
  return  (dispatch) => {
    axios
      .post(`http://localhost:8080/login`, logindata)
      .then((token) => {
      console.log(token.data)
        cookies.set('cns-token', token.data.token);
        if(token.data.token){
          toast.success(token.data.msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            dispatch({
              type: "SIGN_IN",
              payload: token.data,
            });
        }
        else{
          toast.error(token.data.msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
         
        }
       
      })
      .catch((error) => {
        toast.error(error.messae?.data, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        

     
      
      });
  };
};


export const signOut = () => {
  return (dispatch) => {
    
    dispatch({
      type: "SIGN_OUT",
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {

    const token = getState().authReducer.token;
    if(token){
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};


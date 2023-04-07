import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SuperAdminPrivateRoute = ({children}) => {
    const navigate=useNavigate()
    const auth = useSelector((state) => state.authReducer);
    console.log(auth)
 
        if(auth.token){
            return children
        }
        else{
            navigate("/login")
        }
        
}

export default SuperAdminPrivateRoute
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Modedelivery from '../Pages/Modedelivery'
import Caurse from '../Pages/Course'
import Home from '../Pages/Home'
import Qualification from '../Pages/qualification'
import Organisation from '../Pages/organisation'
import Tax from '../Pages/Tax'
import Designation from '../Pages/Designation'
import Country from '../Pages/Country'
import State from '../Pages/state'
import Followup from '../Pages/Followup'
import Source from '../Pages/Source'
import Department from '../Pages/Department'
import ManageProfile from '../Pages/ManageProfile'
const MasterRoute = () => {
  return (
    <div>
      <Routes>
        <Route path={"master/modeofdelivery"} element={<Modedelivery />}></Route>
        <Route path={"master/course"} element={<Caurse />}></Route>
        <Route path={"master/qualification"} element={<Qualification />}></Route>
        <Route path={"master/organisation"} element={<Organisation />}></Route>
        <Route path={"master/tax"} element={<Tax />}></Route>
        <Route path={"master/designation"} element={<Designation />} ></Route>
        <Route path={"master/country"} element={<Country />}></Route>
        <Route path={"master/state"} element={<State />}></Route>
        <Route path={"master/followup"} element={<Followup />}></Route>
        <Route path={"master/source"} element={<Source />}></Route>
        <Route path={"master/department"} element={<Department />}></Route>
        <Route path={"/superadmin/manageprofile"} element={<ManageProfile />}></Route>
      </Routes>
    </div>
  )
}

export default MasterRoute

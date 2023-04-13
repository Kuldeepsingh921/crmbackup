import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Tax from './Master/Tax'
import Country from './Master/Country'
import Course from './Master/Course'
import Department from './Master/Department'
import Designation from './Master/Designation'
import Followup from './Master/Followup'
import Organisation from './Master/organisation'
import Qualification from './Master/qualification'
import Source from './Master/Source'
import State from './Master/State'
import Subject from "./Master/Subject"
import BankAccount from "./Master/BankAccount/"
import City from "./Master/City"
import Employee from "./Master/Employee"
import { AddEmployee } from './Master/Employee/AddEmployee'
import Batch from './Master/Batch'
import { AddBatch } from './Master/Batch/AddBatch'
import Class from './Master/Class'
import {ManageProfile} from '../Pages/ManageProfile'
import SuperAdminPrivateRoute from "./SuperAdminPrivateRoute"
import {Navigate} from "react-router-dom"
import { useSelector } from 'react-redux'
import AddleadsExcel from '../Pages/AddleadsExcel'
import Addleads from "../Pages/Addleads"
import ViewLeads from "./Enquiry/ViewLeads"
import CreateCounsellor from '../Pages/AddCounsellor'
import ShowCounsellorTable from '../Pages/ShowCounsellorTable'
import CounsellorSidebar from "./CounsellorSidebar"
import Modedelivery from './Master/ModeOfDelivery/index'
import ShowLeadsTable from '../Pages/ShowLeadsTable'
import LeadStatusTableDiv from './Master/Lead/LeadStatusTable'
import LeadStatus from './Master/Lead'

const AllRoutes = () => {
  const auth=useSelector((store)=>store.authReducer)
  console.log(auth.token)
 
  return (
    <div>
      <Routes>
       
        <Route path="/" element={auth.token? <Navigate to="/superadmindashboard" />: <Navigate to="/login" /> } />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/superadmindashboard" element={auth.token?<Home />:<Navigate to="/login" />}>
        <Route path="master/tax" element={<Tax />}></Route>
        <Route path="enquiry/addleads" element={<Addleads />}></Route>
        <Route path="enquiry/viewleads" element={<ViewLeads />}></Route>
        <Route path="master/country" element={<Country />}></Route>
        <Route path="master/course" element={<Course />}></Route>
        <Route path="master/subject" element={<Subject />}></Route>
        <Route path="master/department" element={<Department />}></Route>
        <Route path="master/designation" element={<Designation />}></Route>
        <Route path="master/followup" element={<Followup />}></Route>
        <Route path="master/organisation" element={<Organisation />}></Route>
        <Route path="master/qualification" element={<Qualification />}></Route>
        <Route path="master/source" element={<Source />}></Route>
        <Route path="master/state" element={<State />}></Route>
        <Route path="master/bank" element={<BankAccount />}></Route>
        <Route path="master/city" element={<City />}></Route>
        <Route path="master/employee" element={<Employee />}></Route>
        <Route path="master/employee/addemployee" element={<AddEmployee />}></Route>
        <Route path="master/batch" element={<Batch />}></Route>
        <Route path="master/batch/addbatch" element={<AddBatch />}></Route>
        <Route path="master/class" element={<Class />}></Route>
        <Route path="master/leadstatus" element={<LeadStatus />}></Route>
        <Route path="master/modeofdelivery" element={<Modedelivery />}></Route>
        <Route path="manageprofile" element={<ManageProfile />}></Route>
        <Route path="createcounsellor" element={<CreateCounsellor />}></Route>
        <Route path="counsellortable" element={<ShowCounsellorTable />}></Route>
        <Route path="counsellorleads" element={<AddleadsExcel />}></Route>
        <Route path="leadstable" element={<ShowLeadsTable />}></Route>
        </Route>
      </Routes>
    </div>
  )
}
export default AllRoutes

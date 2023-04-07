import React from 'react'
import {Icon,Flex, Button} from '@chakra-ui/react'
import DataTable from "react-data-table-component";
  import {useEffect} from "react"
  import axios from "axios"
import { MdDelete} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import CityPatchModel from "./CityPatchModel"
import Export from "react-data-table-component"

const CityTableDiv = ({mode,remark,data,handleData,value}) => {
  
    const handleDelete=async(id)=>{    
        const data=await axios.delete(`http://localhost:8080/mastercity/delete/${id}`)
        console.log(data)
        handleData()
    }
    const hover={
        transform:"scale(1.1)",
        transition:"0.5s"
      }
    console.log(data)
    useEffect(()=>{
     handleData()
    },[value])

    const downloadCSV = (data) => {
      const filteredData = data.map(({ userId, ...rest }) => rest);
      const csvData = filteredData.map(row => Object.values(row).join(',')).join('\n');
      const blob = new Blob([csvData], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `data.csv`);
      link.click();
    };

    const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    const customStyles = {
      rows:{
          style: {
              minHeight: '72px',  // override the row height
          },
      },
      headCells: {
          style: {
             fontWeight:"bold",
             fontSize:"14px"
          },
      },
  };

    const columns = [
      { name: "Country Name" ,selector: (row) => row.countryname, sortable: true,},
      { name: "State Name", selector: (row) => row.statename, sortable: true },
      { name: "City", selector: (row) => row.cityname, sortable: true },     
      {
        name: "Action",
        selector: (row) => (
      
              <p>
                <Flex gap='20px'>
              <CityPatchModel name={<Icon as={FaEdit}  color="#3182ce" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}}></Icon>} bgcolor={"white"} hover={hover} id={row._id} countryname={row.countryname} statename={row.statename} cityname={row.cityname}  handleData={handleData}/>
              <Icon as={MdDelete}  color="red" fontSize="25px" _hover={{transform:"scale(1.1)",transition:"0.5s"}} border="none" onClick={()=>handleDelete(row._id)}></Icon>
              </Flex>
              </p >          
        ),        
      },
    ];
  return (
    <div style={{marginTop:"25px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px",borderRadius:"20px"}}>
     <Button onClick={()=>downloadCSV(data)} bgColor='green.500' _hover={{bgColor:"green.400"}} color='white'>Export CSV</Button>
<DataTable
                columns={columns}
                pagination
                highlightOnHover
                data={data}
                //subHeader
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="400px"
                customStyles={customStyles}
                actions={actionsMemo}
                      />
    </div>
  )
}

export default CityTableDiv

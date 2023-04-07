import React, { useEffect,useState } from 'react'
import {Box,Flex,Text,Image,Textarea,Input,Select,Button,FormControl} from "@chakra-ui/react"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
 export const ManageProfile = () => {
  const [admindata,setAdmindata]=useState("")
  
const countryarr=[ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ]
   
  const auth=useSelector((store)=>store.authReducer)
console.log(auth._id)
 
  const [profiledata,setProfileData]=useState({})

   useEffect(()=>{
    try{
      axios.get(`http://localhost:8080/superadmin/${auth._id}`).then((res)=>{
        console.log(res.data)
      setProfileData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    catch(err){
      console.log(err)
    }
   },[auth])

   console.log(profiledata)
    
   useEffect(()=>{
     setFirstname(profiledata.firstname)
     setAddress(profiledata.address)
     setEmail(profiledata.email)
     setPostalCode(profiledata.postalcode)
     setCountry(profiledata.country)
     setCity(profiledata.city)
   },[profiledata])

  const [firstname,setFirstname]=useState()
  const [email,setEmail]=useState(auth.email)
  const [address,setAddress]=useState("")
  const [password,setPassword]=useState("")
  const [city,setCity]=useState("")
  const [postalcode,setPostalCode]=useState("")
  const [country,setCountry]=useState("")
  const [website,setWebsite]=useState("")
  const [imageData,setImageData]=useState("")
  const [image,setImage]=useState("")

  console.log(typeof country)
  console.log(postalcode)
  console.log(image)
        
  const handleSubmit=async()=>{
    const formdata = new FormData()
    formdata.append("firstname",firstname)
    formdata.append("email",email)
    formdata.append("city",city)
    formdata.append("address",address)
    formdata.append("country",country)
    formdata.append("postalcode",postalcode)
    formdata.append("image",image)
    formdata.append("UserId",auth._id)

    const res=await axios.patch(`http://localhost:8080/counsellor/${auth._id}`,formdata).then((res)=>{
      toast.success(`User Updated successfully`, {
                    position: "top-center", 
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"light",
                    });
     })
     .catch((err)=>{
      toast.error(`Please fill all the details`,{
          position: "top-center", 
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
     })
}


    
       
       
  return (
    <div>
    <Flex width="95%" margin="auto" marginTop="30px" gap="20px">
        <form style={{display:"flex",gap:"20px"}}>
        <Box id="profile" width={"30%"} textAlign="start" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="20px" borderRadius={"10px"} paddingBottom="40px">
           <Text fontSize="24px" fontWeight={"500"}>My Profile</Text>
           <hr style={{marginTop:"10px"}}/>
           <Flex marginTop="10px" gap="20px" alignItems={"center"}>
            <Image src={profiledata.image ? `http://localhost:5000/${profiledata.image}` : 'https://dashboard.ifastacademy.com/public/avatars/avatar_1.jpg'} width="80px" height="80px" borderRadius={"50%"}></Image>
            <Box>
            <Text fontSize={"20px"} fontWeight="500">{profiledata.firstname}</Text>
            <Text fontSize={"17px"} fontWeight="500">Counsellor</Text>
            </Box>
            </Flex>
            <hr style={{marginTop:"10px"}}/>
            
          <Box marginTop="10px" fontWeight="500" >
          <label htmlFor="" marginTop="10px" onChange={(e)=>setEmail(e.target.value)}>Email Address</label>
            <Input placeholder="Enter Email Address" value={email ||''}></Input>
          </Box>
           <Box marginTop="10px" fontWeight="500">
           <label htmlFor="" marginTop="10px" >Password</label>
            <Input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} ></Input>
           </Box>
            <Box marginTop="10px" fontWeight="500">
            <label htmlFor="" marginTop="10px">Website</label>
            <Input type="text" placeholder="https://www.didm.in/" onChange={(e)=>setWebsite(e.target.value)}></Input>
            </Box>
            <Flex marginTop="10px">
                <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}} padding="10px 30px 10px 30px">Save</Button>
              </Flex>
            </Box>
            <Box id="edit profile" width="65%"  textAlign={"start"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding="20px" borderRadius={"10px"}>
              <Text fontSize="24px" fontWeight={"500"}>Edit Profile</Text>
              <hr style={{marginTop:"10px"}}/>
              <Flex marginTop="10px">
                <Box width="35%" fontWeight="500" margin="auto">
                  <FormControl>
                  <label htmlFor="" >Full Name</label>
                <Input placeholder='Enter First Name' onChange={(e)=>setFirstname(e.target.value)} value={firstname ||''} isRequired></Input>
                  </FormControl>
                </Box>
                <Box width="57%" fontWeight="500" margin="auto">
                <label htmlFor="">Email Address</label>
                <Input placeholder='Enter Email Address' onChange={(e)=>setEmail(e.target.value)} value={email ||''}></Input>
                </Box>
              </Flex>
              <Box fontWeight="500" width="95%" margin="auto" marginTop="10px">
              <label htmlFor="" >Address</label>
              <Input placeholder="Home Address" onChange={(e)=>setAddress(e.target.value)}value={address ||''}></Input>
              </Box>
              
              <Flex marginTop="10px" alignItems={"center"}>
                <Box width="28%" fontWeight="500" margin="auto">
                <label htmlFor="">City</label>
                <Input placeholder='Enter City Name' onChange={(e)=>setCity(e.target.value)} value={city||''}></Input>
                </Box>
                <Box width="28%" fontWeight="500" margin="auto">
                <label htmlFor="">Postal Code</label>
                <Input type='text' placeholder='Enter Zip Code' onChange={(e)=>setPostalCode(e.target.value)} value={postalcode ||''}></Input>
                </Box>
                <Box width="28%" fontWeight="500" margin="auto" marginTop="20px">
                  <label htmlFor="">Country</label>
                    <Select onChange={(e)=>setCountry(e.target.value)}>
                    <option value={country ||''}>{country ||'select'}</option>
                    {countryarr.map((el)=><option value={el.name||''}>{el.name}</option>)}
                   </Select>
                </Box>
              </Flex>
              {/* <Box fontWeight={"500"}>
                <label htmlFor="">About Me</label>
              <Textarea placeholder='Enter About your description' />
              </Box> */}
              <Box fontWeight={"500"} width="40%" marginTop="10px" marginLeft={"20px"}>
                <label htmlFor="">Profile Photo</label>
              <Input  type="file" border={"none"} marginTop="5px" onChange={(e)=>setImage(e.target.files[0])}></Input>
              </Box>
              <Flex justifyContent={"end"}>
                <Button backgroundColor={"#be1e2d"} color="white" _hover={{transform:"scale(1.1)",transition:"0.5s"}} onClick={handleSubmit}>Update Profile</Button>
              </Flex>
            </Box>
        </form>     
        
      </Flex>
      
      
    </div>
  )
}
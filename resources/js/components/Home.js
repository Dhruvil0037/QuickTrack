import React,{ useEffect,useState,useMemo }  from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs';
import 
 { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import '../../css/app.css';
import { set } from 'lodash';

function Home({AppName}) {
    
    const appName = AppName.replaceAll('-', '');
    const [Data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    const navigate = useNavigate();

    // Function to go back to the previous page
    const handleGoBack = () => {
      navigate(-1);
    };

    useEffect(() => {
    const FetchData = async() =>{
      await axios.post(`/api/${appName}/AllData`)
      .then(response => { 
          setData(response.data);
          setLoading(false);
      })
      .catch(error => {console.log(error)});
    };
    FetchData();
  }, []);
  
  if(!loading){console.log("Data",Data);}
    
  const activeMerchantData = useMemo(() => {
    if (Data) {
        return Data.topTenActiveMerchants.map((item, index) => ({
            storeName: item.name,
            email: item.store_email,
            submitedCount: item.total_submission_row,
        }));
    }
    return [];
}, [Data]);
    console.log("activeMerchantData",activeMerchantData);
      
      const activeDataColumns = useMemo(
        () => [
        {
          accessorKey: 'storeName', //access nested data with dot notation
          header: 'Store Name',
          size: 150,
        },
        {
          accessorKey: 'email',
          header: 'email',
          size: 150,
        },
        {
          accessorKey: 'submitedCount', //normal accessorKey
          header: 'Submited Count',
          size: 200,
        },
        ],
        [],
        );
      //? Change this according to the activeMerchantData
    const [loginData,setLoginData] = useState([
      {
      user:'username',
      email:'user1@gmail.com',
      loginTime: '12:00',
    },
      {
      user:'username',
      email:'user1@gmail.com',
      loginTime: '12:00',
    },
      {
      user:'username',
      email:'user1@gmail.com',
      loginTime: '12:00',
    },
      {
      user:'username',
      email:'user1@gmail.com',
      loginTime: '12:00',
    },
      {
      user:'username',
      email:'user1@gmail.com',
      loginTime: '12:00',
    },
  ]);
  
    const LoginData = useMemo(() =>loginData,[],
    );
    
    const loginColumns = useMemo(()=>[
      {
        accessorKey: 'user', 
        header: 'user',
        size: 150,
      },
      {
        accessorKey: 'email', 
        header: 'email',
        size: 150,
      },
      {
        accessorKey: 'loginTime', 
        header: 'Login Time',
        size: 150,
      },
    ],[]);
    
  const activeMerchantDataTable = useMaterialReactTable({
      columns : activeDataColumns,
      data: activeMerchantData,
      mrtTheme: {
          baseBackgroundColor: '#1d2634', 
      },
      muiTableBodyRowProps: ({ row }) => ({
          onClick: (event) => {
             
              if ( row.original.email) {
                  navigate(`/${appName}/${row.original.email}`);
              } else {

                  navigate(0);
              }
          },
          sx: {
          cursor: 'pointer',
          
      }}),
      muiTableContainerProps: { sx: { maxHeight: '100vh' , overflow: 'auto' } },
      enableBottomToolbar: false,
      });
      
  const loginDataTable = useMaterialReactTable({
    columns: loginColumns,
    data:LoginData,
    mrtTheme: {
        baseBackgroundColor: '#1d2634', 
    },
    muiTableBodyRowProps: ({ row }) => ({
        onClick: (event) => {
            
            if ( row.original.email) {
                navigate(`/${appName}/${row.original.email}`);
            } else {

                navigate(0);
            }
        },
        sx: {
        cursor: 'pointer',
        
    }}),
    muiTableContainerProps: { sx: { maxHeight: '100vh' , overflow: 'auto' } },
    enableBottomToolbar: false,
    });
    
    const data = [
        {
          month:'Jan',
          ActiveMerchants: 4000,
          FreeMerchants: 2400, 
          PaidMerchants:1200,
        },
        {
          month:'Feb',
          ActiveMerchants: 3000,
          FreeMerchants: 3000, 
          PaidMerchants:1320,
        },
        {
          month:'Mar',
          ActiveMerchants: 2000,
          FreeMerchants: 3908,
          PaidMerchants:2780,
        },
        {
          month:'Apr',
          ActiveMerchants: 2780,
          FreeMerchants: 4800,
          PaidMerchants:1800,
        },
        {
          month:'May',
          ActiveMerchants: 1890,
          FreeMerchants: 3800,
          PaidMerchants:2390,
        },
        {
          month:'Jun',
          ActiveMerchants: 2390,
          FreeMerchants: 2400, 
          PaidMerchants:1200,
        },
        {
          month:'Jul',
          ActiveMerchants: 3490,
          FreeMerchants: 4800,
          PaidMerchants:1800,
        },
        {
          month:'Aug',
          ActiveMerchants: 2000,
          FreeMerchants: 3000, 
          PaidMerchants:1320,
        },
        {
          month:'Sep',
          ActiveMerchants: 1890,
          FreeMerchants: 3800,
          PaidMerchants:2390,
        },
        {
          month:'Oct',
          ActiveMerchants: 3490,
          FreeMerchants: 2400, 
          PaidMerchants:1200,
        },
        {
          month:'Nov',
          ActiveMerchants: 3000,
          FreeMerchants: 4800, 
          PaidMerchants:1320,
        },
        {
          month:'Dec',
          ActiveMerchants: 3490,
          FreeMerchants: 2400, 
          PaidMerchants:1200,
        },
      ];
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
           
            <div className="custom-tooltip">
              <p className="label">{`Month: ${label}`}</p>
              {payload.map((entry, index) => {
                const { name, value } = entry;
                const displayText = name.replace(/([A-Z])/g, ' $1').trim();
                return (
                  <p key={`tooltip-${index}`} style={{ color: entry.color }}>
                    {`${displayText}: ${value}`}
                  </p>
                );
              })}
            </div>
          );
        }
      
        return null;
      
      
      };
      

  return (
    <>
    {!loading&&
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>       
        <div className='main-cards'>
          <div className='card'>
            <Link to={`/${AppName}/MerchantList/Active`} > 
                <div className='card-inner'>
                    <h3>Total Active Merchants</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{Data.activeMerchantCounts}</h1>
            </Link>
          </div>
          <div className='card'>
            <Link to={`/${AppName}/MerchantList/All`} >
                <div className='card-inner'>
                    <h3>Submitted Reviews</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{Data.allReviewCounts}</h1>
            </Link>
          </div>
          <div className='card'>
            <Link to={`/${AppName}/MerchantList/Free`} >
                <div className='card-inner'>
                    <h3>Free Plan Merchants</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Data.freeMerchantCounts}</h1>
            </Link>
          </div>
          <div className='card'>
            <Link to={`/${AppName}/MerchantList/Paid`} >
                <div className='card-inner'>
                    <h3>Paid Plan Merchants</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{Data.paidMerchantCounts}</h1>
            </Link>
          </div>
        </div>
        <div className='charts'>
          
                <ResponsiveContainer width="100%" height="100%">       
                      
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />                                                 
                        <Bar dataKey="ActiveMerchants" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey="FreeMerchants" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="PaidMerchants" stroke="#82ca9d" activeDot={{ r: 8 }}/>
                    </LineChart>
                </ResponsiveContainer>
        </div>
        <div className="active-merchantst-table-wrapper">
                <div className="active-merchantst-table-left">
                    <p className="active-merchantst-table-heading">
                        Top Active Merchants
                    </p>
                    <div className="active-merchantst-table-card">
                    <ThemeProvider theme={theme}>
                        <MaterialReactTable table={activeMerchantDataTable} />
                    </ThemeProvider>
                    </div>
                </div>
                <div className="active-merchant-table-right">
                    <p className="active-merchantst-table-heading">
                        Last Visited By
                    </p>
                    <div className="active-merchantst-table-card">
                    <ThemeProvider theme={theme}>
                        <MaterialReactTable table={loginDataTable} />
                    </ThemeProvider>
                    </div>
                </div>
            </div>
        
    </main>}
    </>
  )
}

export default Home;
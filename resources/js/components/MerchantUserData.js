import React, { useEffect,useState,useMemo } from 'react'
import {BrowserRouter,useParams , Link , useNavigate  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from './Header';
import '../../css/app.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

function MerchantUserData({OpenSidebar}) {
    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
    const [Data, setData] = useState();
    const navigate = useNavigate();

    // Function to go back to the previous page
    const handleGoBack = () => {
      navigate(-1);
    };

    const RequestedData = useParams().requestedData;

    
    console.log(useParams().appName);
    let AppName = useParams().appName.replaceAll('-', ' ');
    let appName = useParams().appName.replaceAll('-', '');

    useEffect(() => {
      FetchMerchantData();
    }, []);

    const FetchMerchantData = ()=>{
      axios.post(`/api/${appName}/url-${RequestedData}`)    
        .then(response => { 
            setData(response.data);
        })
        .catch(error => {console.log(error)});
    }
   

//nested data is ok, see accessorKeys in ColumnDef below
const data = useMemo(() => [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Test',
      lastName: 'Test',
    },
    address: '32188 Test Test',
    city: 'Test',
    state: 'South Test',
  },
],[],
);
//should be memoized or stable
const columns = useMemo(
() => [
{
  accessorKey: 'name.firstName', //access nested data with dot notation
  header: 'First Name',
  size: 150,
},
{
  accessorKey: 'name.lastName',
  header: 'Last Name',
  size: 150,
},
{
  accessorKey: 'address', //normal accessorKey
  header: 'Address',
  size: 200,
},
{
  accessorKey: 'city',
  header: 'City',
  size: 150,
},
{
  accessorKey: 'state',
  header: 'State',
  size: 150,
},
// ?Remove This Comments
// {
          
//   id: 'createdAt',
//   header: 'Created At',
//   accessorFn: (originalRow) => new Date(originalRow.createdAt),
//   filterVariant: 'date-range',
//   Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
  
// },
],
[],
);

const MerchantOwnerDetail = useMaterialReactTable({
  columns,
  data,
  mrtTheme: {
    baseBackgroundColor: '#1d2634', // Set to the body background color
  },
  muiTableBodyRowProps: ({ row }) => ({
    onClick: (event) => {
      navigate('/');
    },
    sx: {
      cursor: 'pointer',
  }}),
  muiTableContainerProps: { sx: { maxHeight: '100vh' , overflow: 'auto' } },
  enableBottomToolbar: false,
});
const MerchantUserDetail = useMaterialReactTable({
  columns,
  data,
  mrtTheme: {
    baseBackgroundColor: '#1d2634', // Set to the body background color
  },
  muiTableBodyRowProps: ({ row }) => ({
    sx: {
      cursor: 'pointer',
  }}),
  initialState: { pagination: { pageSize: 25, pageIndex: 0 } },
  muiPaginationProps: {
    rowsPerPageOptions: [25, 50, 70,100],
    shape: 'rounded',
  },
  paginationDisplayMode: 'pages',
  enableBottomToolbar: true,
  enableStickyHeader: true,
  enablePagination: true,
  muiTableContainerProps: { sx: { maxHeight: '100vh' , overflow: 'auto' } },

});

return (
        <>
          <Header OpenSidebar={OpenSidebar} AppName ={AppName} PageName="Merchant Detail"/>
          <main className='main-container'>
            <div className='table-details'>
                <h3 className='active-merchantst-table-heading'>{RequestedData}'s Owner Details</h3>
                <ThemeProvider theme={theme}>
                    <MaterialReactTable table={MerchantOwnerDetail} />
                </ThemeProvider>
              </div>
              <div className='table-details'>
                <h3 className='active-merchantst-table-heading'>{RequestedData}'s Users Details</h3>
                <ThemeProvider theme={theme}>
                    <MaterialReactTable table={MerchantUserDetail} />
                </ThemeProvider>
              </div>
          </main>
          
        </>);
};


export default MerchantUserData;
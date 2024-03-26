import React, { useEffect,useState,useMemo } from 'react'
import {useParams , Link , useNavigate  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from './Header';
import '../../css/app.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

function MerchantList({RequestedData , OpenSidebar}) {

    
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

    const AppName = useParams().appName.replaceAll('-', ' ');
    const appName = useParams().appName.replaceAll('-', '');
    const requestedData = RequestedData.replaceAll(' ', '');

    useEffect(() => {
        FetchMerchantsList();
    }, []);

    const FetchMerchantsList=()=>{
        axios.post(`/api/${appName}/${requestedData}`)
        .then(response => { 
            setData(response.data);
        })
        .catch(error => {console.log(error)});
    }
    const [Testing,SetTesting] = useState([
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
      ]
      );
    const data = useMemo(() =>Testing,[],
      );
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
        ],
        [],
        );
    const table = useMaterialReactTable({
        columns,
        data,
        mrtTheme: {
            baseBackgroundColor: '#1d2634', 
        },
        muiTableBodyRowProps: ({ row }) => ({
            onClick: (event) => {
               
                if ( row.original.state) {
                    navigate(`/${appName}/${row.original.state}`);
                } else {

                    navigate(0);
                }
            },
            sx: {
            cursor: 'pointer',
            
        }}),
        muiPaginationProps: {
            rowsPerPageOptions: [25, 50, 70,100],
            shape: 'rounded',
          },
        paginationDisplayMode: 'pages',
        initialState: { pagination: { pageSize: 25, pageIndex: 0 } },
        enableBottomToolbar: true,
        enableStickyHeader: true,
        enablePagination: true,
        muiTableContainerProps: { sx: { maxHeight: '100vh' , overflow: 'auto' } },
        });
  return (
    <>
        <Header OpenSidebar={OpenSidebar} AppName ={AppName} PageName={RequestedData}/>
        <main className='main-container'>
                <h3>{RequestedData}</h3>
            <ThemeProvider theme={theme}>
                <MaterialReactTable table={table} />
            </ThemeProvider>
        </main>
    </>
  )
}

export default MerchantList;
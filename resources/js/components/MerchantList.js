import React, { useEffect,useState,useMemo } from 'react'
import {useParams , Link , useNavigate  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from './Header';
import '../../css/app.css';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function MerchantList({RequestedData , OpenSidebar}) {

    
    const theme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    const [Data, setData] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    // Function to go back to the previous page
    const handleGoBack = () => {
      navigate(-1);
    };

    const AppName = useParams().appName.replaceAll('-', ' ');
    const appName = useParams().appName.replaceAll('-', '');
    const requestedData = RequestedData.replaceAll(' ', '');

    useEffect(() => {
      const FetchMerchantsList=async()=>{
        await axios.post(`/api/${appName}/${requestedData}`)
        .then(response => { 
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {console.log(error)});
      }
      FetchMerchantsList();
    }, []);
    if(!loading){console.log("Data",Data);}
    const [Testing,SetTesting] = useState([
        {
          name: {
            firstName: 'John',
            lastName: 'Doe',
          },
          address: '261 Erdman Ford',
          city: 'East Daphne',
          state: 'Kentucky',
          createdAt:"2021-8-10",
        },   
        {
          name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
          },
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          createdAt:'2022-10-28',
        },
        {
          name: {
            firstName: 'Test',
            lastName: 'Test',
          },
          address: '32188 Test Test',
          city: 'Test',
          state: 'South Test',
          createdAt:'2023-4-5',        
        },
      ]
      );
    const merchantList = useMemo(() =>Testing,[],
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
        {
          
          id: 'createdAt',
          header: 'Created At',
          accessorFn: (originalRow) => new Date(originalRow.createdAt),
          filterVariant: 'date-range',
          Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
          
        },
        
        ],
        [],
        );
    const table = useMaterialReactTable({
        columns,
        data : merchantList,
        mrtTheme: {
            baseBackgroundColor: '#1d2634', 
        },
        enableRowVirtualization: true,
        enableColumnVirtualization: true,
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
        muiTableToolbarProps: {
          additionalControls: [
            <MRT_ToggleFiltersButton key="toggle-filters" />,
            <MRT_GlobalFilterTextField key="global-filter" />,
          ],
        },
      });
  return (
    <>
        <Header OpenSidebar={OpenSidebar} AppName ={AppName} PageName={RequestedData}/>
        {!loading &&
        <main className='main-container'>
          <div className='table-details'>
            <div className='active-merchantst-table-heading'>
              <p className='active-merchantst-table-heading-bar'>{RequestedData}</p>
              <p className='active-merchantst-table-heading-bar'>heading</p>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <MaterialReactTable table={table} />
            </ThemeProvider>
            </LocalizationProvider>
          </div>
        
        </main>}
    </>
  )
}

export default MerchantList;
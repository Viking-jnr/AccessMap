import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function UserTable({ users, onEdit, onDelete }) {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    {field: 'status', headerName: 'Status', flex: 1},
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => onEdit(params.row)}>Edit</Button>
          <IconButton color="error" onClick={() => onDelete(params.row.id)}><Delete /> </IconButton>
        </>
      )
    }
  ];

  return <DataGrid rows={users} columns={columns} autoHeight/>;
}

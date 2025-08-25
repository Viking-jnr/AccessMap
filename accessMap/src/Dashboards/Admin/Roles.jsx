import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function RoleMatrix({ roles }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role</TableCell>
          <TableCell>Can View</TableCell>
          <TableCell>Can Edit</TableCell>
          <TableCell>Can Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map(role => (
          <TableRow key={role.name}>
            <TableCell>{role.name}</TableCell>
            <TableCell>{role.permissions.view ? '✅' : '❌'}</TableCell>
            <TableCell>{role.permissions.edit ? '✅' : '❌'}</TableCell>
            <TableCell>{role.permissions.delete ? '✅' : '❌'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

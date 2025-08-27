import DashboardLayout from "../DashboardLayout";
import UserTable from './Users';
import Reports from "./Reports";
import { demoUsers, demoReports } from "./DemoData";

const Admin = () => {
    return(
        <DashboardLayout>
            <UserTable users={demoUsers} />
            
        </DashboardLayout>
    )
}

export default Admin;
import { auth } from "@/auth";
import AdminDashboardContent from "./adminDashboardContent";
import UserDashboardContent from "./userDashboardContent";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div className="w-[100%] h-[100%]">
      {session?.user.isAdmin && <AdminDashboardContent />}
      {!session?.user.isAdmin && <UserDashboardContent />}
    </div>
  );
};

export default Dashboard;

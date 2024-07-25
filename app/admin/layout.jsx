import Sidebar from "../components/Sidebar.jsx";
import AdminNavbar from "../components/AdminNavbar.jsx";

export default function AdminLayout({ children }) {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
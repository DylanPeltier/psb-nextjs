import Sidebar from "../components/Sidebar.jsx";

export default function AdminLayout({ children }) {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
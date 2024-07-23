import { Link } from "@nextui-org/react";

export function SidebarItem({ title, active, onClick, icon }) {
  return (
    <Link
      onPress={onClick}
      className={`${active ? 'bg-blue-200' : 'bg-transparent hover:bg-slate-200'} flex w-full rounded-md text-md items-center justify-start gap-3 px-4 py-2`}
    >
      {icon}
      <p className="text-medium font-regular text-slate-950 truncate">{title}</p>
    </Link>
  );
}
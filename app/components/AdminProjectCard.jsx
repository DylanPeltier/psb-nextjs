export default function AdminProjectCard() {
  return (
    <div className="flex flex-col items-start justify-start w-1/5 h-fit bg-neutral-50 rounded-2xl p-6 gap-2 shadow-lg">
      <p className="font-regular text-lg text-slate-950">Project Title</p>
      <p className="font-regular text-sm text-slate-950">This is a sample project description where we can show the progress of the project.</p>
      <p className="font-regular text-sm text-slate-950">Completed Date</p>
    </div>
  )
}
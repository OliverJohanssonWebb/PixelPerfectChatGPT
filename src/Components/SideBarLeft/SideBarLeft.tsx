
const SideBarLeft = () => {
  return (
    <>
    <div className="w-1/4 h-full bg-gray-800 text-white p-4 ">{/*Main Container*/}
      <div className="flex items-center justify-between">
      <p className="text-lg font-bold">
        Icon
      </p>
      <p className="text-lg font-bold">
        SideIcon
      </p>
      </div>
<div className="w-1/4 h-full bg-gray-800 text-white p-4">
      <ul>
        <li>Ny chatt</li>
        <li>Sök i chattar</li>
        <li>bilder</li>
        <li>Appar</li>
        <li>Djup research</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default SideBarLeft
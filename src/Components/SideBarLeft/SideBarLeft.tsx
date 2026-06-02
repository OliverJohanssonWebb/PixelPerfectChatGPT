import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faMagnifyingGlass, faImage, faBraille, faBinoculars, faRobot, faBookOpen } from '@fortawesome/free-solid-svg-icons'


const SideBarLeft = () => {
  return (
    <>
    <div className="w-1/6 h-full bg-gray-800 text-white p-4 ">{/*Main Container*/}
      <div className="flex items-center justify-between">
      <p className="text-lg font-bold">
        <FontAwesomeIcon icon={faRobot} />
      </p>
      <p className="text-lg font-bold">
        <FontAwesomeIcon icon={faBookOpen} />
      </p>
      </div>
<div className="bg-gray-800 text-white">
      <ul className="list-none p-0 m-0 space-y-3">
        <li className="flex items-center gap-2 whitespace-nowrap">
          <FontAwesomeIcon icon={faComment} />Ny chatt</li>
        <li className="flex items-center gap-2 whitespace-nowrap">
          <FontAwesomeIcon icon={faMagnifyingGlass} />Sök i chattar</li>
        <li className="flex items-center gap-2 whitespace-nowrap">
          <FontAwesomeIcon icon={faImage} />bilder</li>
        <li className="flex items-center gap-2 whitespace-nowrap">
          <FontAwesomeIcon icon={faBraille} />Appar</li>
        <li className="flex items-center gap-2 whitespace-nowrap">
          <FontAwesomeIcon icon={faBinoculars} />Djup research</li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default SideBarLeft
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faMagnifyingGlass, faImage, faBraille, faBinoculars, faRobot, faBookOpen, faCheck, faGear, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'


const SideBarLeft = () => {
  return (
    <div className="w-64 h-screen bg-[#171717] text-gray-300 flex flex-col justify-between p-3">
      
      {/* Top */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="hover:bg-[#2a2a2a] rounded-lg transition">
            <FontAwesomeIcon icon={faRobot} className="text-lg" />
          </button>
          <button className="hover:bg-[#2a2a2a] rounded-lg transition">
            <FontAwesomeIcon icon={faBookOpen} className="text-lg" />
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-1">
          <li className="flex items-center gap-3  py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faComment} />
            <span>Ny chatt</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Sök i chattar</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faImage} />
            <span>Bilder</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faBraille} />
            <span>Appar</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faBinoculars} />
            <span>Djup research</span>
          </li>
        </ul>
      </div>

      {/* Bottom */}
              <ul className="space-y-1 pt-40">
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faCheck} />
            <span>Abonnemang</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faGear} />
            <span>Inställningar</span>
          </li>
          <li className="flex items-center gap-3 py-1 rounded-lg hover:bg-[#2a2a2a] cursor-pointer transition text-base">
            <FontAwesomeIcon icon={faHandshakeAngle} />
            <span>Hjälp</span>
          </li>
        </ul>
      <div className="space-y-2">

        {/* Upgrade box */}
        <div className="bg-[#222222] rounded-2xl p-4 text-sm">
          <p className="font-medium text-white">
            Få svar som är skräddarsydda för dig
          </p>
          <p className="text-gray-400 mt-2 text-xs leading-relaxed">
            Logga in för att få svar baserade på sparade chattar,
            skapa bilder och ladda upp filer.
          </p>
          <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            Logga in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeft
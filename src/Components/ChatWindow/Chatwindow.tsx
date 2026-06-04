
import { faPlus, faMicrophone, faWaveSquare, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chatwindow = () => {
  const suggestions = [
    "Hitta enkla sätt att stressa mindre",
    "Skapa en frågesport med fem frågor",
    "Skapa en veckoplan med enkla, nyttiga måltider",
  ];

  return (
    <div className="flex-1 bg-black text-white flex flex-col items-center justify-center relative">
      <div className="w-full max-w-5xl px-6 flex flex-col items-center">
        <h4 className="text-2xl font-medium mb-14">
          Jag är redo.
        </h4>
        <div className="w-full bg-[#1f1f1f] rounded-4xl border border-[#2b2b2b] px-6 py-4">          
          <div className="flex items-center justify-between">                      
        <div className="flex items-center gap-4 flex-1">{/* Left side */}
          
              <button className="text-gray-300 hover:text-white transition text-xl">
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <input
                type="text"
                placeholder="Fråga vad som helst"
                className="bg-transparent outline-none text-lg text-white placeholder-gray-400 w-full"
              />
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 ml-4">
              
              <button className="text-gray-300 hover:text-white transition text-lg">
                <FontAwesomeIcon icon={faMicrophone} />
              </button>

              <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a] transition px-5 py-3 rounded-full flex items-center gap-2 text-sm font-medium">
                <FontAwesomeIcon icon={faWaveSquare} />
                <span>Röst</span>
              </button>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="w-full bg-[#1f1f1f] mt-5 rounded-2xl border border-[#2b2b2b] overflow-hidden">
          {suggestions.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-4 px-8 py-6 text-left hover:bg-[#2a2a2a] transition border-b border-[#2b2b2b] last:border-none"
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-gray-400"
              />

              <span className="text-lg text-gray-200">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-gray-500 text-center">
        Genom att skicka meddelanden till ChatGPT, en AI-dialogrobot,
        godkänner du våra villkor och bekräftar att du har läst vår
        integritetspolicy.
      </p>
    </div>
  );
};

export default Chatwindow;
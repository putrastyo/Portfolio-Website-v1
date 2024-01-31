import { useState, useEffect } from "react";
import "../assets/css/MyWorks.css";
import myWorksData from "../data/my-works.json";
import { Link } from "react-router-dom";

function MyWorks() {
  const [myWorks, setMyWorks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setMyWorks(myWorksData);
    };
    fetchData();
  }, []);

  return (
    <div className="md:flex justify-center gap-5 flex-wrap pt-24 pb-10">
      {myWorks.map((myWork) => (
        <div
          key={myWork.id}
          className="lg:w-[35%] md:w-[40%] mb-3 md:mb-0 border shadow-sm"
        >
          <Link to={myWork.link} target="_blank">
            <div
              className="group aspect-video mb-3 card-img cursor-pointer"
              style={{ backgroundImage: `url(${myWork.image})` }}
            >
              <div className="h-full w-full bg-black/0 hover:bg-black/75 relative hidden group-hover:block transition-all duration-500">
                <button className="border border-white hover:bg-white hover:text-black text-white font-semibold rounded px-2 py-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  View
                </button>
              </div>
            </div>
          </Link>
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">{myWork.title}</h4>
            <p className="text-sm mb-4">{myWork.description}</p>
            <div className="flex gap-3 mb-3">
              {myWork.techs.map((tech, index) => (
                <img
                  key={index}
                  src={`icons/${tech}`}
                  className="grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
            <a
              href={myWork.link}
              className="lg:hidden bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white px-2 py-1 font-medium text-sm"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyWorks;

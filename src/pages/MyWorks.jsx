import { useState, useEffect } from "react";
import "../assets/css/MyWorks.css";
import myWorksData from "../data/my-works.json";

function MyWorks() {
  const [myWorks, setMyWorks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setMyWorks(myWorksData);
    };
    fetchData();
  }, []);

  return (
    <div className="md:flex justify-center gap-5 flex-wrap pt-24">
      {myWorks.map((myWork) => (
        <div className="lg:w-[35%] md:w-[40%] mb-3 md:mb-0 border shadow-sm">
          <div
            className="aspect-video mb-3 card-img hover:brightness-50 transition"
            style={{ backgroundImage: `url(${myWork.image})` }}
          ></div>
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">{myWork.title}</h4>
            <p className="text-sm mb-4">{myWork.description}</p>
            <div className="flex gap-3 mb-3">
              {myWork.techs.map((tech) => (
                <div className="bg-blue-300 rounded-full w-8 h-8"></div>
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

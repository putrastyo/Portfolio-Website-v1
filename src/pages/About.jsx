import person from "../assets/images/wisuda.jpg";
import "../assets/css/About.css";

function About() {
  return (
    <div className="h-screen flex flex-col-reverse items-center justify-center lg:grid lg:place-items-center lg:grid-cols-2 text-center lg:text-start">
      <div>
        <h5 className="text-lg font-medium text-purple-500 mb-6">
          Hi, Welcome!
        </h5>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          I'M <span>PUTRA SETYO</span>, WEB DEVELOPER
        </h1>
        <p className="mb-6">
          Delivering web solutions that meet client needs and ensure
          sustainability in the ever-evolving digital age. I'm ready to help you
          create a memorable web experience!
        </p>
        {/* <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white px-4 py-3 font-medium">DOWNLOAD RESUME</button> */}
      </div>
      <div>
        <img
          src={person}
          className="rounded-full mx-auto w-[40%] lg:w-[80%] mb-6 lg:mb-0"
        />
      </div>
    </div>
  );
}

export default About;

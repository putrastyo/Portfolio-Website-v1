import ContactMeIcon from "../assets/images/handshake.svg";

function Contact(){
  return (
    <div className="lg:grid lg:grid-cols-2 place-items-center h-screen pt-16 lg:pt-0">
      <div className="w-full">
        <div className="rounded p-6">
          <h3 className="text-center text-lg font-semibold mb-5">Contact Me</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="" className="mb-2">Name</label>
              <input type="text" className="border w-full h-10 px-2 bg-gray-50 outline-[#ff00cc]/30" />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2">Email</label>
              <input type="email" className="border w-full h-10 px-2 bg-gray-50 outline-[#ff00cc]/30" />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="mb-2">Message</label>
              <textarea className="border w-full h-32 px-2 py-2 bg-gray-50 outline-[#ff00cc]/30"></textarea>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white h-10 font-medium w-full">SUBMIT</button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <img src={ContactMeIcon} className="w-[60%] mx-auto" />
      </div>
    </div>
  )
}

export default Contact;
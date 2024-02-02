import { useRef } from "react";
import ContactMeIcon from "../assets/images/handshake.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_il0bkia",
        "template_9tt6o3j",
        form.current,
        "qJ3m5MtJ5w8GysqIv"
      )
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => console.error(error.text));
  };

  return (
    <div className="lg:grid lg:grid-cols-2 place-items-center h-screen pt-16 lg:pt-0">
      <div className="w-full">
        <div className="rounded p-6">
          <h3 className="text-center text-lg font-semibold mb-5">Contact Me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="user_name" className="mb-2">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="border w-full h-10 px-2 bg-gray-50 outline-[#ff00cc]/30"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="user_email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="border w-full h-10 px-2 bg-gray-50 outline-[#ff00cc]/30"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="mb-2">
                Message
              </label>
              <textarea
                name="message"
                className="border w-full h-32 px-2 py-2 bg-gray-50 outline-[#ff00cc]/30"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white h-10 font-medium w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <img src={ContactMeIcon} className="w-[60%] mx-auto" />
      </div>
    </div>
  );
}

export default Contact;

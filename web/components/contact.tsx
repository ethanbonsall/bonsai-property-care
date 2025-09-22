import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const Address = "Contact";
  const date = "Contact";
  const Service = "Contact";

  const handleSend = async () => {
    if (!name || !Email || !Message) {
      alert("Please fill in all parts of the form.");
      return;
    }

    try {
      await emailjs.send(
        "service_4g72ymf",
        "template_r3isus9",
        {
          name,
          Number,
          Address,
          Message,
          date,
          Email,
          Service,
        },
        "uhdisYswgUANDPxsU"
      );

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-bl from-primary p-8 lg:p-16 to-secondary justify-center items-center text-background min-h-[75dvh] w-full">
      <div className="flex flex-col text-left gap-y-2 mb-16">
        <p className="text-6xl text-background font-bold">Contact us</p>
        <p className="text-2xl font-medium ml-1">
          Leave us your email, name, and message and we will get right back to
          you!
        </p>
      </div>
      <div className="flex flex-col h-full w-fit gap-y-8">
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold mb-2">Name</p>
            <input
              className="p-2 rounded text-text bg-background w-[80dvw] lg:w-80 border shadow"
              autoComplete="Name"
              type="text"
              name="Name"
              onInput={(e) => setName((e.target as HTMLInputElement).value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-semibold mb-2">Email</p>
            <input
              className="p-2 rounded text-text bg-background w-[80dvw] lg:w-80 border shadow"
              autoComplete="email"
              type="text"
              name="Email"
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            ></input>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start text-left gap-y-6">
          <div>
            <p className="text-3xl font-semibold mb-2">Message</p>
            <textarea
              className="p-2 rounded text-text bg-background w-[80dvw] lg:w-[675px] border shadow"
              name="message"
              onInput={(e) => setMessage((e.target as HTMLInputElement).value)}
            ></textarea>
          </div>
          <button
            className="text-background bg-primary text-xl shadow px-4 py-2 rounded"
            onClick={handleSend}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;

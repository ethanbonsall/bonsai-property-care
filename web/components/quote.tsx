import { useState } from "react";
import { Calendar } from "./ui/calendar";
import emailjs from "emailjs-com";
import CategoryComboBox from "./combobox";
import { format } from "date-fns";

const Quote = () => {
  const [name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [Service, setService] = useState("");

  function handleChange(event: React.FormEvent<HTMLDivElement>) {
    let digitsOnly = (event.target as HTMLInputElement).value.replace(
      /\D/g,
      ""
    );
    if (digitsOnly.length > 10) {
      digitsOnly = digitsOnly.substring(0, 11);
    }
    const formattedNumber =
      digitsOnly.length > 6
        ? `(${digitsOnly.substring(0, 3)}) ${digitsOnly.substring(
            3,
            6
          )}-${digitsOnly.substring(6)}`
        : digitsOnly.length > 3
        ? `(${digitsOnly.substring(0, 3)}) ${digitsOnly.substring(3)}`
        : digitsOnly;
    setNumber(formattedNumber);
  }

  const handleSend = async () => {
    const Address = address + ", " + City;
    if (!name || !Number || !Email || !date || !Address || !Message) {
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
          date: date ? format(date, "PPP") : "",
          Email,
          Service,
        },
        "uhdisYswgUANDPxsU"
      );

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setNumber("");
      setDate(undefined);
      setAddress("");
      setMessage("");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col bg-gradient-to-bl from-accent-400 to-accent-700 text-background h-fit w-full px-0 lg:px-[15dvw] xl:px-[25dvw] p-8 "
      id="quote"
    >
      <div className="h-fit text-background text-center">
        <p className="text-6xl font-bold"> Ready To Transform Your Home?</p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-16 lg:gap-x-0 justify-between items-center">
        <div className="flex flex-col p-4 lg:p-0 lg:py-4 gap-y-4 text-background font-semibold">
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="name">
              Name
            </p>
            <input
              type="text"
              name="Name"
              autoComplete="name"
              placeholder="John Smith"
              className="text-text border rounded p-2 w-80 bg-background shadow"
              onInput={(e) => setName((e.target as HTMLInputElement).value)}
            />
          </div>
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="Number">
              Number
            </p>
            <input
              className="text-text border rounded p-2 w-80 bg-background shadow"
              inputMode="numeric"
              pattern="[0-9]*"
              name="number"
              value={Number}
              onChange={handleChange}
              autoComplete="tel-national"
              placeholder="(717) 123-4567"
            ></input>
          </div>
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="Email">
              Email
            </p>
            <input
              className="text-text border rounded p-2 w-80 bg-background shadow"
              inputMode="text"
              name="email"
              autoComplete="email"
              placeholder="example@gmail.com"
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            ></input>
          </div>
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="Address">
              Address
            </p>
            <input
              type="text"
              name="address"
              autoComplete="street-address"
              placeholder="123 Main St"
              className="text-text border rounded p-2 w-80 bg-background shadow"
              onInput={(e) => setAddress((e.target as HTMLInputElement).value)}
            ></input>
          </div>
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="City">
              City
            </p>
            <input
              type="text"
              name="city"
              autoComplete="address-level2"
              placeholder="Camp Hill"
              className="text-text border rounded p-2 w-80 bg-background shadow"
              onInput={(e) => setCity((e.target as HTMLInputElement).value)}
            ></input>
          </div>
          <div>
            <p className="text-3xl xl:text-4xl mb-2" aria-label="Services">
              Services
            </p>
            <div className="text-text">
              <CategoryComboBox
                onSelect={(value: string) => {
                  setService(value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col m-8 lg:m-0">
          <p className="mb-2 text-3xl font-bold">Date</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border text-text h-fit rounded [&_.rdp-day]:h-12 [&_.rdp-day]:w-12 [&_.rdp-day]:text-3xl [&_.rdp-caption_label]:text-2xl"
          />
        </div>
      </div>
      <div className=" flex flex-col m-4 lg:m-0 h-fit">
        <p
          className="text-3xl xl:text-4xl mb-2 w-full font-semibold"
          aria-label="Message"
        >
          Message
        </p>
        <textarea
          className="w-full text-text border rounded p-2 bg-background"
          onInput={(e) => setMessage((e.target as HTMLInputElement).value)}
        ></textarea>
        <button
          className="rounded bg-primary text-3xl xl:text-4xl text-bg w-fit px-4 py-2 mt-10 self-center border-primary-800 border-2 shadow-2xl hover:bg-primary-600 transition-all duration-300"
          onClick={handleSend}
        >
          Get A Quote!
        </button>
      </div>
    </div>
  );
};
export default Quote;

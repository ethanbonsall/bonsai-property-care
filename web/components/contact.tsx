const Contact = () => {
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
            ></input>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-semibold mb-2">Email</p>
            <input
              className="p-2 rounded text-text bg-background w-[80dvw] lg:w-80 border shadow"
              autoComplete="email"
              type="text"
              name="Email"
            ></input>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start text-left gap-y-6">
          <div>
            <p className="text-3xl font-semibold mb-2">Message</p>
            <textarea
              className="p-2 rounded text-text bg-background w-[80dvw] lg:w-[675px] border shadow"
              name="message"
            ></textarea>
          </div>
          <button className="text-background bg-primary text-xl shadow px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;

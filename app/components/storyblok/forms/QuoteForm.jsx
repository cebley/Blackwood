const QuoteForm = ({ sector, agency, company, state }) => {
  return (
    <form
      action="https://formspree.io/f/mrgvaybj"
      method="POST"
      className="quoteForm xl:w-[735px] min-[300px]:min-w-[270px] min-[400px]:min-w-[350px]"
    >
      <input type="hidden" value={sector} name="sector" />
      {sector === "public" && (
        <input type="hidden" value={agency} name="Agency Name" />
      )}
      {sector === "commercial" && (
        <>
          <input type="hidden" value={company} name="Company Name" />
          <input type="hidden" value={state} name="State" />
        </>
      )}
      <div className="md:space-x-3 md:flex">
        <input
          type="text"
          placeholder="First Name"
          name="First Name"
          className="w-full firstName md:w-1/2 lg:w-1/3"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="Last Name"
          className="w-full lastName md:w-1/2 lg:w-2/3"
        />
      </div>
      <div className="md:space-x-3 md:flex">
        <input
          type="Email"
          placeholder="Email"
          className="email"
          name="Email"
        />
        <input type="text" placeholder="Phone" className="phone" name="Phone" />
      </div>
      <textarea
        rows="8"
        placeholder="Please provide any information or additional comments that may be helpful in customizing your solution."
        name="Message"
      />
      <div className="flex justify-end mt-10">
        <div className="submit">
          <input
            type="submit"
            value="submit"
            className="rounded-md bg-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default QuoteForm;

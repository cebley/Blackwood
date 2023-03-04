import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import SelectForm from "./SelectForm";
import QuoteForm from "./QuoteForm";
import PaymentForm from "./PaymentForm";

const Forms = ({ blok }) => {
  const { _uid, text, title, type } = blok;
  const [sector, setSector] = useState("");
  const [agency, setAgency] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState("");

  const handleSelect = (e) => {
    setSector(e.target.value);
    setAgency("");
    setCompany("");
    setState("");
  };
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="justify-between py-12 center-container lg:flex md:py-24 lg:px-8 xl:px-0"
    >
      <div className="left max-w-full md:max-w-[735px]">
        <h2 className="sublinedTitle">{title}</h2>
        {type === "payment" ? (
          <div className="intro">
            <p>{text}</p>
          </div>
        ) : (
          <SelectForm handleSelect={handleSelect} />
        )}
        {sector === "public" && (
          <input
            type="text"
            placeholder="Agency Name"
            onChange={(e) => setAgency(e.target.value)}
          />
        )}
        {sector === "commercial" && (
          <>
            <input
              type="text"
              placeholder="Company Name"
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="right">
        {type === "quote" ? (
          <QuoteForm
            sector={sector}
            agency={agency}
            company={company}
            state={state}
          />
        ) : (
          <PaymentForm />
        )}
      </div>
    </div>
  );
};

export default Forms;

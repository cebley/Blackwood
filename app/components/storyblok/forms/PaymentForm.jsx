import { useState, useReducer, useRef } from "react";
import axios from "axios";

const initialState = { quoteNumber: "", quoteAmount: null };

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const PaymentForm = () => {
  const [message, setMessage] = useState("");
  const [amountMessage, setAmountMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const amountRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quoteNumber, quoteAmount } = state;

  const handleChange = (e) => {
    const field = e.target.name;
    const value =
      e.target.value > 0
        ? Math.floor(e.target.value * 100) / 100
        : e.target.value;
    if (
      e.target.name === "quoteAmount" &&
      e.target.value > 0 &&
      amountMessage
    ) {
      setAmountMessage("");
    }

    if (message) {
      setMessage("");
    }

    dispatch({ field, value });
  };

  const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(number);
  };

  const toggleEditing = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const onToken = async (token) => {
    try {
      const result = await axios.post(
        "https://tooqtmszlb.execute-api.us-east-1.amazonaws.com/prod/charges",
        {
          token,
          order: {
            currency: "USD",
            quoteNumber,
            amount: quoteAmount,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { error, data, status } = result;

      if (error) {
        return setMessage(`${error.name}: ${error.message}`);
      }
      if (status === 200) {
        setMessage("Done! Thank you for your payment");
        dispatch({ field: "quoteAmount", value: null });
        dispatch({ field: "quoteNumber", value: "" });
      } else {
        setMessage("Unable to process. " + data.message);
      }
    } catch (error) {
      setMessage(`${error.name}: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    setMessage("");
    setAmountMessage("");
    e.preventDefault();
    // validation
    if (quoteAmount <= 0) {
      if (amountRef && amountRef.current) {
        setAmountMessage("Please enter a valid quoteAmount");
        amountRef.current.focus();
      }
      return;
    }

    // configure stripe checkout
    const stipeCheckout = window.StripeCheckout.configure({
      key: "pk_live_TCkw02xKffub4NBaG0VLTY4t00Ck0Iid9B",
      image: "https://stripe.com/img/documentation/checkout/marketplace.png",
      locale: "auto",
      token: onToken,
    });

    stipeCheckout.open({
      name: "BLACKWOOD",
      description: `Invoice Number ${quoteNumber}`,
      zipCode: true,
      currency: "USD",
      quoteNumber: quoteNumber,
      amount: quoteAmount * 100,
      closed: () => {},
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="paymentInput">
        <label htmlFor="quoteNumber">Blackwood Invoice/Quote Number</label>
        <input
          type="text"
          name="quoteNumber"
          className="quoteNumber"
          onChange={handleChange}
          value={quoteNumber}
          required
        />
      </div>
      <div className="paymentInput">
        <label htmlFor="quoteAmount">Amount</label>
        {isEditing ? (
          <input
            type="number"
            name="quoteAmount"
            className="quoteAmount"
            step={0.01}
            onChange={handleChange}
            value={quoteAmount}
            onBlur={toggleEditing}
            autoComplete="off"
          />
        ) : (
          <input
            ref={amountRef}
            type="text"
            name="quoteAmount"
            className="formattedAmount"
            value={quoteAmount ? toCurrency(quoteAmount) : ""}
            onFocus={toggleEditing}
            readOnly
            required
            autocomplete="off"
          />
        )}
      </div>
      <div className={`messageWrapper`}>
        <div className={`messageContainer ${amountMessage ? "show" : ""}`}>
          <div className="messageText amountText">{amountMessage}</div>
        </div>
      </div>
      <div className="submit">
        <input type="submit" value="submit" />
      </div>
      <dox className={`messageWrapper`}>
        <div className={`messageContainer ${message ? "show" : ""}`}>
          <div className="messageText">{message}</div>
        </div>
      </dox>
    </form>
  );
};

export default PaymentForm;

import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";

var cardInfo = {
  cardholder: "Virginia Ham",
  expirationDate: "10/23",
  cardNumber: "9876 5432 1111 0000",
  bankName: "Making Bank Corp."
};

function CreditCard({ creditcard }) {
  let { cardholder, expirationDate, cardNumber, bankName } = creditcard;
  let bankNumber = creditcard.cardNumber.substring(0, 4);
  return (
    <div className="plastic">
      <div className="bank">{bankName}</div>
      <div className="cardnum">{cardNumber}</div>
      <div className="banknum">{bankNumber}</div>
      <div className="validtext">
        VALID
        <br />
        THRU
      </div>
      <div className="expdate"> {expirationDate}</div>
      <div className="holdername">{cardholder}</div>
    </div>
  );
}

ReactDOM.render(<CreditCard creditcard={cardInfo} />, document.querySelector("#root"));

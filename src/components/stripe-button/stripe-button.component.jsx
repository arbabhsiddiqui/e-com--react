import React from "react";

import StripCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_HOU2FZoWLyQclA1TYTGka3Rg00VVE5D3HX";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripCheckout
      label="paynow"
      name="CRWN Clothing LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;

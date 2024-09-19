import React from "react";
import "/style.css";

export default function Coupons() {
  const couponData = [
    {
      title: "10% Off Your First Repair",
      description: "New Customers receive 10% off the first repair",
      code: "*Restrictions May Apply. Call For Details. Cannot be combined with other offers.",
    },
    {
      title: "FREE Second Opinion",
      description:
        "Customer must provide invoice/estimate from previous company at the time of visit",
      code: "*Restrictions May Apply. Call For Details. Cannot be combined with other offers.",
    },
    {
      title: "FREE Estimates",
      description: "Free Estimates for Replacements or New Installs",
      code: "",
    },
    {
      title: "Free 1 Year Club Membership",
      description: "With The Purchase Of Any Complete Full System",
      code: "* 2 visits per year. 1 Fall visit and 1 Spring. Call for details.",
    },
    {
      title: "$50 off New Humidifier",
      description: "$50 off Installation of a New Humidifer",
      code: "*Restrictions May Apply. Call For Details. Cannot be combined with other offers.",
    },
    {
      title: "$50 Off Any HVAC Repair",
      description: "Must Present Offer At Time Of Visit.",
      code: "*Restrictions May Apply. Call For Details. Cannot be combined with other offers.",
    },
  ];

  return (
    <div className="coupons-container">
      <h1>Special Offers</h1>
      <br></br>
      <div className="coupons-grid">
        {couponData.map((coupon, index) => (
          <div className="coupon-card" key={index}>
            <h2>{coupon.title}</h2>
            <p>{coupon.description}</p>
            <div className="coupon-code">{coupon.code}</div>
          </div>
        ))}
      </div>
      <p className="footer-paragraph">
        Restrictions may apply. Call for details. Coupons/Offers cannot be
        combined. Not valid with any other offers, discounts, promotions, or
        prior sales.<br></br> Homeowner Occupied Only. Excludes Nights/Holidays. Mention
        this coupon to redeem the offer.
      </p>
    </div>
  );
}

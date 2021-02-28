import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SpinnerComponent({
  oCardInfo,
  bIsUserLoggedIn,
  sCardAmountType,
  nAmt,
}) {
  const fnDispatch = useDispatch();

  //State
  const [nAmount, fnSetAmount] = useState(nAmt);

  const fnHandleOnChange = (event) => {
    fnSetAmount(event.target.value);
    fnDispatch({
      type: "UPDATE_STAGING_AREA",
      payload: {
        nAmt: parseInt(event.target.value), //Removes leading zeros
        sCardId: oCardInfo.id,
        sTypeName: event.target.name,
        sExpansionId: oCardInfo.set,
        bIsDirtyFlag: true,
      },
    });
  };

  return (
    <div
      className="mb-1 border border-primary rounded p-0"
      style={{ backgroundColor: "#222" }}
    >
      {bIsUserLoggedIn ? (
        //If user is logged in, show spinners
        <div className="card-body p-0">
          <p className="text-primary mb-1">
            {sCardAmountType === "nRegularAmount"
              ? `Reg: ${
                  !oCardInfo.prices.usd ? null : "$" + oCardInfo.prices.usd
                }`
              : `Foil: ${
                  !oCardInfo.prices.usd_foil
                    ? null
                    : "$" + oCardInfo.prices.usd_foil
                }`}
          </p>
          <input
            type="number"
            className="form-control justify-content-center border border-primary rounded"
            min="0"
            name={sCardAmountType}
            step="1"
            style={{
              textAlign: "center",
            }}
            onChange={fnHandleOnChange}
            value={nAmount}
          />
        </div>
      ) : (
        <div className="card-body p-0">
          <p className="text-primary mb-1">
            {sCardAmountType === "nRegularAmount"
              ? `Reg: ${
                  !oCardInfo.prices.usd ? null : "$" + oCardInfo.prices.usd
                }`
              : `Foil: ${
                  !oCardInfo.prices.usd_foil
                    ? null
                    : "$" + oCardInfo.prices.usd_foil
                }`}
          </p>
        </div>
      )}
    </div>
  );
}

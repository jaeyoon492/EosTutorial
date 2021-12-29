/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import useGetCurrency from "../hook/useGetCurrency";
import useTransfer from "../hook/useTransfer";
import TransactionView from "../view/Transaction.view";

const Token = () => {
  const { transferToBob, quantityInput } = useTransfer();
  const { bob, alice, useEffect, getCurrencyBalance } = useGetCurrency();
  return (
    <>
      <TransactionView
        transferToBob={transferToBob}
        alice={alice}
        bob={bob}
        quantitiyInput={quantityInput}
        useEffect={useEffect}
        getCurrencyBalance={getCurrencyBalance}
      />
    </>
  );
};

export default Token;

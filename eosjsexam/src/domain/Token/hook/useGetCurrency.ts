/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TokenService } from "../service/token.service";

export default function useGetCurrency(): {
  bob: string[];
  alice: string[];
  useEffect: any;
  getCurrencyBalance: any;
} {
  const tokenService = new TokenService();
  const [alice, setAlice] = useState<string[]>([""]);
  const [bob, setBob] = useState<string[]>([""]);

  const getCurrencyBalance = async () => {
    const aliceCurrency = await tokenService.getCurrencyBalance("alice");
    const bobCurrency = await tokenService.getCurrencyBalance("bob");
    setAlice(aliceCurrency);
    setBob(bobCurrency);
  };

  useEffect(() => {
    getCurrencyBalance();
  }, []);

  return { bob, alice, useEffect, getCurrencyBalance };
}

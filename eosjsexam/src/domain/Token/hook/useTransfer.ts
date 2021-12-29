import { MutableRefObject, useEffect, useRef, useState } from "react";
import { TokenService } from "../service/token.service";

export default function useTransfer(): {
  transferToBob: any;
  quantityInput: MutableRefObject<HTMLInputElement>;
} {
  const tokenService = new TokenService();
  const quantityInput = useRef() as MutableRefObject<HTMLInputElement>;

  const transferToBob = async () => {
    const quantity = +quantityInput.current.value;
    await tokenService.transfer(quantity);

    quantityInput.current.value = "";
  };

  return { transferToBob, quantityInput };
}

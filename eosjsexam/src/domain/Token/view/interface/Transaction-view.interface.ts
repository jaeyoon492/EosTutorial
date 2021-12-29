import { MutableRefObject } from "react";

export declare namespace ITransactionView {
  interface IProps {
    transferToBob: any;
    alice: string[];
    bob: string[];
    quantitiyInput: MutableRefObject<HTMLInputElement>;
    useEffect: any;
    getCurrencyBalance: any;
  }
}

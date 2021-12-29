import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import {
  PushTransactionArgs,
  ReadOnlyTransactResult,
} from "eosjs/dist/eosjs-rpc-interfaces";

export interface TransferParams {
  account: string;
  actionName: string;
  actor: string;
  data: TransferData;
}

export interface TransferData {
  from: string;
  to: string;
  quantity: string;
  memo: string;
}

export interface GetCurrencyBalanceParams {
  contractAccount: string;
  tableAccount: string;
}

export interface IEosJsService {
  transaction?(
    transferParams: TransferParams
  ): Promise<
    TransactResult | ReadOnlyTransactResult | PushTransactionArgs | any
  >;
  getCurrencyBalance?(
    getCurrencyBalanceParams: GetCurrencyBalanceParams
  ): Promise<
    TransactResult | ReadOnlyTransactResult | PushTransactionArgs | any
  >;
}

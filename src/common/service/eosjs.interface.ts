import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import {
  PushTransactionArgs,
  ReadOnlyTransactResult,
} from "eosjs/dist/eosjs-rpc-interfaces";

export interface TransferParams {
  account: string;
  actionName: string;
  actor: string;
  data: Record<string, any>;
}

export interface IEosJsService {
  transaction(
    transferParams: TransferParams
  ): Promise<TransactResult | ReadOnlyTransactResult | PushTransactionArgs | any>;
}

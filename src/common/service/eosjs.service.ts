import { Api, JsonRpc } from "eosjs";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
import {
  PushTransactionArgs,
  ReadOnlyTransactResult,
} from "eosjs/dist/eosjs-rpc-interfaces";
import { IEosJsService, TransferParams } from "./eosjs.interface";

export class EosjsService implements IEosJsService {
  private readonly _textDecoder: TextDecoder;
  private readonly _textEncoder: TextEncoder;
  private readonly _privateKeys: string[];
  private readonly _signatureProvider: JsSignatureProvider;
  private readonly _rpc: JsonRpc;
  private readonly _api: Api;

  constructor() {
    (this._textDecoder = new TextDecoder()),
      (this._textEncoder = new TextEncoder()),
      (this._privateKeys = [`${process.env.NEXT_PUBLIC_PRIVATE_KEY}`]),
      (this._signatureProvider = new JsSignatureProvider(this._privateKeys)),
      (this._rpc = new JsonRpc(`${process.env.NEXT_PUBLIC_END_POINT}`, {
        fetch,
      })),
      (this._api = new Api({
        rpc: this._rpc,
        signatureProvider: this._signatureProvider,
        textDecoder: this._textDecoder,
        textEncoder: this._textEncoder,
      }));
  }

  async transaction(
    transferParams: TransferParams,
    blocksBehind: number = 3,
    expireSeconds: number = 30
  ): Promise<TransactResult | ReadOnlyTransactResult | PushTransactionArgs> {
    const transaction = await this._api.transact(
      {
        actions: [
          {
            account: transferParams.account,
            name: transferParams.actionName,
            authorization: [
              {
                actor: transferParams.actor,
                permission: "active",
              },
            ],
            data: transferParams.data,
          },
        ],
      },
      {
        blocksBehind,
        expireSeconds,
      }
    );

    return transaction;
  }
}

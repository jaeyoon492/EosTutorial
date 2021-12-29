import {
  IEosJsService,
  TransferData,
  TransferParams,
} from "../../../common/service/eosjs.interface";
import { EosjsService } from "../../../common/service/eosjs.service";

export class TokenService {
  readonly eosJsService: IEosJsService;

  constructor() {
    this.eosJsService = new EosjsService();
  }

  async transfer(quantity: number) {
    console.log("트랜스퍼 트랜잭션 전송");
    const action: TransferParams = {
      account: "eosio.token",
      actionName: "transfer",
      actor: "alice",
      data: {
        from: "alice",
        to: "bob",
        quantity: Number.parseFloat(String(quantity)).toFixed(4) + " SYS",
        memo: "토큰 전송 alice to bob",
      },
    };

    const result =
      this.eosJsService.transaction &&
      (await this.eosJsService.transaction({
        account: action.account,
        actionName: action.actionName,
        actor: action.actor,
        data: action.data,
      }));
    console.log(result);
    return result;
  }

  async getCurrencyBalance(tableAccount: string) {
    const result =
      this.eosJsService.getCurrencyBalance &&
      (await this.eosJsService.getCurrencyBalance({
        contractAccount: "eosio.token",
        tableAccount: tableAccount,
      }));
    return result;
  }
}

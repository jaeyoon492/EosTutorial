import { IEosJsService } from "../../../common/service/eosjs.interface";
import { EosjsService } from "../../../common/service/eosjs.service";

export class PaperService {
  readonly eosjsService: IEosJsService;

  constructor() {
    this.eosjsService = new EosjsService();
  }

  async trasfer(quantity: number) {
    const account = "eos.token";
    const actionName = "transfer";
    const actor = "alice";
    const data = {
      from: "alice",
      to: "bob",
      quantity: `${Number.parseFloat(String(quantity)).toFixed(4)} SYS`,
      memo: "some memo",
    };
    const result = await this.eosjsService.transaction({
      account,
      actionName,
      actor,
      data,
    });
    return result;
  }

  async getAccountBalance(accountName: string) {
    const account = "eos";
    const actionName = "getBalance";
    const actor = accountName;
    const data = {
      account: accountName,
    };
    const result = await this.eosjsService.transaction({
      account,
      actionName,
      actor,
      data,
    });
    return String(result);
  }
}

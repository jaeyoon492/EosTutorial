export interface ResultMocking {
  action_mroot: string;
  block_num: number;
  confirmed: number;
  id: string;
  new_producers: string;
  previous: string;
  producer: string;
  producer_signature: string;
  ref_block_prefix: number;
  schedule_version: number;
  timestamp: string;
  transaction_mroot: string;
  transactions: Transaction;
}

export interface Transaction {
  actions: {
    account: string;
    name: string;
    authorization: {
      actor: string;
      permission: string;
    }[];
    data: {
      payer: string;
      receiver: string;
      bytes: number;
    };
  }[];
  tapos: {
    blocksBehind: number;
    expireSeconds: number;
  };
}

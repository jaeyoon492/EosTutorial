/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Paper from "../components/Paper/Paper.impl";

import { Api, JsonRpc } from "eosjs";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
import { TextDecoder, TextEncoder } from "text-encoding";

interface ResultMocking {
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

interface Transaction {
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

const Trade = () => {
  const textDecoder = new TextDecoder();
  const textEncoder = new TextEncoder();
  const privateKeys = ["5JZHb5e7S2hDZh7XyvR3bJdMPxwvgK9mE7BdeSagGmwFox44gP1"];

  const signatureProvider = new JsSignatureProvider(privateKeys);
  const rpc = new JsonRpc("http://127.0.0.1:8888", { fetch });
  const api = new Api({ rpc, signatureProvider, textDecoder, textEncoder });

  // const transactionData: Transaction = {
  //   actions: [
  //     {
  //       account: "eosio",
  //       name: "buyrambytes",
  //       authorization: [
  //         {
  //           actor: "useraaaaaaaa",
  //           permission: "active",
  //         },
  //       ],
  //       data: {
  //         payer: "useraaaaaaaa",
  //         receiver: "useraaaaaaaa",
  //         bytes: 8192,
  //       },
  //     },
  //   ],
  //   tapos: {
  //     blocksBehind: 3,
  //     expireSeconds: 30,
  //   },
  // };

  // useEffect(() => {
  //   async () => {
  //     const transaction = await api.transact(transactionData);
  //     console.log(`sendTransaction :: ${transaction}`);
  //   };
  // }, []);

  useEffect(() => {
    (async () => {
      const transaction = await api.transact(
        {
          actions: [
            {
              account: "eosio.token",
              name: "transfer",
              authorization: [
                {
                  actor: "alice",
                  permission: "active",
                },
              ],
              data: {
                payer: "alice",
                receiver: "alice",
                bytes: 8192,
              },
            },
          ],
        },
        {
          blocksBehind: 3,
          expireSeconds: 30,
        }
      );
      console.log(transaction);
    })();
  }, []);

  return (
    <>
      <h1>Trade</h1>
      <Paper>
        <h1>페이퍼</h1>
      </Paper>
    </>
  );
};

export default Trade;

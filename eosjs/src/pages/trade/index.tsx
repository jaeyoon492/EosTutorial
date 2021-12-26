/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Paper from "../components/Paper/Paper.impl";

import { Api, JsonRpc } from "eosjs";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
import { TextDecoder, TextEncoder } from "text-encoding";

const Trade = () => {
  const textDecoder = new TextDecoder();
  const textEncoder = new TextEncoder();
  const privateKeys = ["5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"];

  const signatureProvider = new JsSignatureProvider(privateKeys);
  const rpc = new JsonRpc("http://127.0.0.1:8888", { fetch });
  const api = new Api({ rpc, signatureProvider, textDecoder, textEncoder });

  const quantityInput = useRef() as MutableRefObject<HTMLInputElement>;
  const [alice, setAlice] = useState([""]);
  const [bob, setBob] = useState([""]);

  const transferToBob = () => {
    let quantity = +quantityInput.current.value;

    if (quantity !== NaN && quantity > 0) {
      (async () => {
        const result = await api.transact(
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
                  from: "alice",
                  to: "bob",
                  quantity: `${quantity}.0000 SYS`,
                  memo: "some memo",
                },
              },
            ],
          },
          {
            blocksBehind: 3,
            expireSeconds: 30,
          }
        );
        console.log(result);
        quantityInput.current.value = "";
      })();
    }

    return;
  };

  useEffect(() => {
    (async () => {
      const result = await rpc.get_currency_balance(
        "eosio.token",
        "alice",
        "SYS"
      );
      setAlice(result);
    })();
  }, [alice, setAlice]);

  useEffect(() => {
    (async () => {
      const result = await rpc.get_currency_balance(
        "eosio.token",
        "bob",
        "SYS"
      );
      setBob(result);
    })();
  }, [bob, setBob]);

  return (
    <>
      <h1>Trade</h1>
      <Paper>
        <div>
          <form>
            <h4>alice</h4>
            <h3>잔여토큰: {alice}</h3>
            <input type="text" ref={quantityInput}></input>
            <button
              type="button"
              onClick={() => {
                transferToBob();
              }}
            >
              전송
            </button>

            <h4>bob</h4>
            <h3>잔여토큰: {bob}</h3>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default Trade;

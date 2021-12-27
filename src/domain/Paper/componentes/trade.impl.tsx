import Paper from "../components/Paper/Paper.impl";

import { useTrade } from "../hook";
import useAccount from "../hook/useAccount";
import TransactionView from "../view/Transaction.view";

const Trnasaction: React.FC = () => {
  const { onClick, trx } = useTrade();
  const { account } = useAccount();

  return (<><TransactionView onClick={onClick} trx={trx} account={account} /></>)
};

export default Trnasaction;

import Paper from "../../../common/components/Paper/Paper.impl";
import { ITransactionView } from "./interface/Transaction-view.interface";

const TransactionView: React.FC<ITransactionView.IProps> = ({
  transferToBob,
  alice,
  bob,
  quantitiyInput,
  getCurrencyBalance,
}) => {
  return (
    <>
      <h1>Trade</h1>
      <Paper>
        <div>
          <form>
            <h4>alice</h4>
            <h3>잔여토큰: {alice}</h3>
            <input type="text" ref={quantitiyInput}></input>
            <button
              type="button"
              onClick={async () => {
                await transferToBob(), await getCurrencyBalance();
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

export default TransactionView;

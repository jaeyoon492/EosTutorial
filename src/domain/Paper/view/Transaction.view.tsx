import { ITransactionView } from "./interfaces/Transaction-view.interface"

const TransactionView: React.FC<ITransactionView.IProps> = ({
    onClick,
    trx,
    account
}) => {
    return (
        <>
            <div onClick={onClick}>tansfer</div>
            <div> result {trx}</div>
            <div>account {account}</div>
            <h1>Trnasaction</h1>
            <Paper>
                <h1>페이퍼</h1>
            </Paper>
        </>
    )
}

export default TransactionView
import History from "./History";
import wallet from "../assets/wallet.png";
import deleteT from "../assets/delete.png";
import note from "../assets/note.png";
export default function TransactionHistory({ transactions, onHandleDelete, onEdit }) {
  return (
    <>
      <div className="px-4 pt-5 pb-3">
        <h2 className="text-[22px]/7 font-bold text-[#121217]">History</h2>
      </div>
      {transactions.length === 0 && (
        <History>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={wallet} alt="wallet image" />
            <h3 className="font-bold text-[18px]/[23px] text-[#121217]">
              No transactions yet
            </h3>
            <p className="text-[14px]/[21px]">
              Add a trasaction to start tracking your expenses
            </p>
            <a
              href="#add-transaction"
              className="bg-[#F0F2F5] px-4 py-2 rounded-[8px] text-[#121217] text-[14px]/[21px]"
            >
              Add Transaction
            </a>
          </div>
        </History>
      )}
      {transactions.length > 0 && (
        <History>
          {transactions.map((transaction, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-b-[#DBDBE5]"
              >
                <div className="">
                  <p className="text-[#121217] text-base/6 font-medium">
                    {transaction.description}{" "}
                    <span
                      className={
                        transaction.type === "income"
                          ? "text-[12px] text-white bg-green-600 py-0.5 px-1 rounded"
                          : "text-[12px] text-white bg-red-600 py-0.5 px-1 rounded"
                      }
                    >
                      {transaction.type}
                    </span>
                  </p>
                  <span className="inline-block text-[#636687] text-sm/[21px]">
                    {transaction.date}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-8">
                  <p className="text-[#121217] text-base/6">
                    {String(transaction.amount).includes("-")
                      ? `-$${String(transaction.amount).slice(1)}`
                      : `$${String(transaction.amount)}`}
                  </p>

                  <div className="flex justify-between items-center gap-3">
                    <button onClick={() => onEdit(index)} className="cursor-pointer transition duration-300 ease-in hover:bg-green-200 px-2 py-2 rounded-lg">
                      <img src={note} alt="Edit button" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onHandleDelete(transaction.id)}
                      className="cursor-pointer transition duration-300 ease-in hover:bg-red-200 px-2 py-2 rounded-lg"
                    >
                      <img
                        src={deleteT}
                        alt="Delete button"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </History>
      )}
    </>
  );
}

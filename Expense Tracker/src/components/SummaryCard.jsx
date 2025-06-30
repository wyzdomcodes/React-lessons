import balanceImage from "../assets/balance-img.png";
export default function SummaryCard ({balance, income, totalExpenses}) {
    return (
        <>
        <div className="relative p-4">
          <img src={balanceImage} alt="balance image" className="" />
          <div className="absolute left-8 bottom-8 text-white">
            <h3 className="sm:text-lg">Your Balance</h3>
            <p className="text-sm">${balance > 0 ? balance : "0.00"}</p>
          </div>
        </div>
        <div className="p-4 flex justify-between gap-4">
          <div className="bg-[#F0F2F5] flex-1 p-6 rounded-lg">
            <h3 className="text-sm/6 text-[#121217]">Income</h3>
            <p className="text-lg font-bold text-[#121217]">
              {income > 0 ? "$" + income : "$0.00"}
            </p>
          </div>
          <div className="bg-[#F0F2F5] flex-1 p-6 rounded-lg">
            <h3 className="text-sm/6 text-[#121217]">Expenses</h3>
            <p className="text-lg font-bold text-[#121217]">
              {totalExpenses > 0 ? "$" + totalExpenses : "$0.00"}
            </p>
          </div>
        </div>
        </>
    )
}
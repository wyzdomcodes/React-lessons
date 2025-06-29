import balanceImage from "../assets/balance-img.png";
import TransactionHistory from "./TransactionHistory";
import { useState } from "react";
export default function MainSection() {
  const [transactions, setTransactions] = useState([
    // 
  ])

  function handleAddTransaction(formData) {
      const description = formData.get("description")
      const amount = formData.get("amount")
      const date = formData.get("date")
    setTransactions(prev => [...prev, {description: description, amount: Number(amount)}])
    }
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0)
  const income = transactions.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0)
  const expenses = transactions.filter((t) => t.amount < 0)
  const totalExpenses = Math.abs(expenses.reduce((acc, t) => acc + t.amount, 0))
  return (
    <main className="lg:px-42 md:px-21 sm:px-10.5 py-5">
      <div className="">
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
            <p className="text-lg font-bold text-[#121217]">${income > 0 ? income : "$0.00"}</p>
          </div>
          <div className="bg-[#F0F2F5] flex-1 p-6 rounded-lg">
            <h3 className="text-sm/6 text-[#121217]">Expenses</h3>
            <p className="text-lg font-bold text-[#121217]">${totalExpenses > 0 ? totalExpenses : "$0.00"}</p>
          </div>
        </div>
        <TransactionHistory transactions={transactions}/>
        <div className="px-4 pt-5 pb-3">
        <h2 className="text-[22px]/7 font-bold text-[#121217]">
          Add Transaction
        </h2>
      </div>

      <form action={handleAddTransaction} id="add-transaction">
        <div className="px-4 py-3 flex flex-col max-w-120">
          <label
            htmlFor="description"
            className="text-base/6 text-[#121217] font-medium pb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            className="outline-none border rounded-lg p-3.5 border-[#DBDBE5] placeholder:text-[#636687] placeholder:text-base/6"
          />
        </div>
        <div className="px-4 py-3 flex flex-col max-w-120">
          <label
            htmlFor="description"
            className="text-base/6 text-[#121217] font-medium pb-2"
          >
            Amount
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            className="outline-none border rounded-lg p-3.5 border-[#DBDBE5] placeholder:text-[#636687] placeholder:text-base/6"
          />
        </div>
        <div className="px-4 py-3 flex flex-col max-w-120">
          <label
            htmlFor="date"
            className="text-base/6 text-[#121217] font-medium pb-2"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            placeholder="Enter Date"
            className="outline-none border rounded-lg p-3.5 border-[#DBDBE5] placeholder:text-[#636687] placeholder:text-base/6"
          />
        </div>
        <div className="py-3 px-4 flex justify-end items-center">
          <button type="submit" className="cursor-pointer h-10 px-4 rounded-lg bg-[#616BE8] font-bold text-sm/5.5 text-[#FFFFFF]">Add trasaction</button>
        </div>
      </form>
      </div>
    </main>
  );
}

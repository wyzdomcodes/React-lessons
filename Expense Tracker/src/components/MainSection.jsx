import TransactionHistory from "./TransactionHistory";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TransactionForm from "./TransactionForm";
import SummaryCard from "./SummaryCard";
export default function MainSection() {
  const [transactions, setTransactions] = useState([
    {
      description: "Salary",
      amount: 1200,
      date: "2025-06-11",
      type: "income",
      id: uuidv4(),
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    const t = transactions[index];
    // Dynamically pre-fill the form inputs with JavaScript
    const form = document.getElementById("add-transaction");
    if (form) {
      form.description.value = t.description;
      form.amount.value = Math.abs(t.amount);
      form.date.value = t.date;
      form.type.value = t.type;
    }

    setEditMode(true);
    setEditIndex(index);
  };

  function handleAddTransaction(formData) {
    const { description, amount, date, type } = Object.fromEntries(formData);
    let parsedAmount = Number(amount);
    if (type === "expense") {
      parsedAmount = -Math.abs(parsedAmount); // Ensure it's negative
    } else {
      parsedAmount = Math.abs(parsedAmount); // Ensure it's positive
    }

    if (editMode) {
      const updated = [...transactions];
      updated[editIndex] = { description, amount: parsedAmount, date, type, id: uuidv4() };
      setTransactions(updated);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setTransactions((prev) => [
        ...prev,
        { description, amount: parsedAmount, date, type, id: uuidv4() },
      ]);
    }
  }

  function handleDelete(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }
  const balance = transactions.reduce((acc, t) => acc + t.amount, 0);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter((t) => t.amount < 0);
  const totalExpenses = Math.abs(
    expenses.reduce((acc, t) => acc + t.amount, 0),
  );
  return (
    <main className="lg:px-42 md:px-21 sm:px-10.5 py-5">
      <div className="">
        <SummaryCard balance = {balance} income={income} totalExpenses={totalExpenses}/>
        <TransactionHistory
          transactions={transactions}
          onHandleDelete={handleDelete}
          onEdit={handleEdit}
        />
        <div className="px-4 pt-5 pb-3">
          <h2 className="text-[22px]/7 font-bold text-[#121217]">
            Add Transaction
          </h2>
        </div>

        < TransactionForm handleSubmit = {handleAddTransaction} editMode={editMode}/>
      </div>
    </main>
  );
}

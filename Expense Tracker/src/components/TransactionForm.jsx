export default function TransactionForm ({handleSubmit, editMode}) {
    return (
        <form action={handleSubmit} id="add-transaction">
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
          <div className="px-4 py-3 flex flex-col max-w-120">
            <label
              htmlFor="faveColor"
              className="text-base/6 text-[#121217] font-medium pb-2"
            >
              Select Transaction Type?
            </label>
            <select
              id="type"
              name="type"
              className="focus:outline-none border rounded-lg p-3.5 border-[#DBDBE5] placeholder:text-[#636687] placeholder:text-base/6"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="py-3 px-4 flex justify-end items-center">
            <button
              type="submit"
              className="cursor-pointer h-10 px-4 rounded-lg bg-[#616BE8] font-bold text-sm/5.5 text-[#FFFFFF]"
            >
              {editMode ? "Edit Transaction" : "Add trasaction"}
            </button>
          </div>
        </form>
    )
}
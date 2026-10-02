function ExpenseForm({expenseName, setExpenseName, amount, setAmount,category,setCategory ,addExpense}) {

    return(
    <div className="input-box">
                    <input className="input"
                        type="text"
                        placeholder="Expense name..."
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        
                    />

                    <input className="input"
                        type="number"
                        placeholder="Amount..."
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addExpense();
                            }
                        }}
                    />

                        <select

                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >

                            <option value="Other" >Other</option>
                            <option value="Food" >Food</option>
                            <option value="Travel" >Travel</option>
                            <option value="Shopping" >Shopping</option>
                            <option value="Entertainment" >Entertainment</option>

                        </select>

                        <button className="Btn" onClick={addExpense}> Add Expense</button>

                </div>
);
}

export default ExpenseForm;
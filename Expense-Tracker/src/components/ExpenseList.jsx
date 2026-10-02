import ExpenseItem from "./ExpenseItem.jsx";

function expenseList({filteredExpenses, editExpense, deleteExpense}) {

    if (filteredExpenses.length === 0) {

        return (
            <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>No expense found </p>
        );
    }

    return (

        <div className="expenseList">

            {filteredExpenses.map((expense) => (
                
                <ExpenseItem 
                  key={expense.id}
                  expense={expense}
                  editExpense={editExpense}
                  deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
}

export default expenseList;
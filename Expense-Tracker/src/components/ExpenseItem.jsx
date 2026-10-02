function ExpenseItem({expense, editExpense, deleteExpense}) {

    return (
                    <div className="list" key={expense.id}>

                        <span className="detail">

                            <h3>{expense.name}:~</h3>
                            <p>  ₹{expense.amount}</p>
                            <p>Category: {expense.category}</p>

                        </span>

                        <span className="buttons">

                            <button className="Btn" onClick={() => editExpense(expense.id)}>
                                Edit
                            </button>

                            <button className="delete" onClick={() => deleteExpense(expense.id)}>
                                Delete
                            </button>
                        </span>
                    </div>
                );

}

export default ExpenseItem;
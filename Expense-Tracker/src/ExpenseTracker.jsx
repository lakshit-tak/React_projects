import { useState, useEffect } from "react";

import ExpenseForm from "./components/ExpenseForm.jsx";

import FilterBar from "./components/FilterBar.jsx";

import ExpenseList from "./components/ExpenseList.jsx";

function ExpenseTracker() {

    const [expenseName, setExpenseName] = useState("");

    const [amount, setAmount] = useState("");

    const [category, setCategory] = useState("Other");

    const [search, setSearch] = useState("");

    const [filterCategory, setFilterCategory] = useState("All");

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {

        const savedExpenses = localStorage.getItem("expenses");

        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, []);

    useEffect(() => {

        localStorage.setItem("expenses", JSON.stringify(expenses));

    }, [expenses]);


    function addExpense() {

        if (expenseName.trim() === "" || isNaN(amount)) {
            return;
        }

        const newExpense = {

            id: Date.now(),
            name: expenseName,
            amount: amount,
            category: category
        };

        setExpenses([...expenses, newExpense]);

        setExpenseName("");
        setAmount("");
        setCategory("Other");
    }

    function deleteExpense(id) {

        const newExpenses = expenses.filter((expense) => {

            return expense.id !== id;
        });

        setExpenses(newExpenses);
    }

    function editExpense(id) {

        const expenseToEdit = expenses.find((expense) => {
            return expense.id === id;
        });

        const newName = prompt("Edit expense name", expenseToEdit.name);

        if (newName === null || newName.trim() === "") {
            return;
        }

        const newAmount = prompt("Edit amount", expenseToEdit.amount);

        if (newAmount === null || newAmount.trim() === "") {
            return;
        }

        const newExpenses = expenses.map((expense) => {
            if (expense.id === id) {
                return {
                    ...expense,
                    name: newName,
                    amount: Number(newAmount)
                };
            }
            return expense;
        });

        setExpenses(newExpenses);
    }

    const totalExpense = expenses.reduce((total, expense) => {

        return total + expense.amount;
    }, 0);

    const filteredExpenses = expenses.filter((expene) => {

        const matchSearch = expene.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory = filterCategory === "All" || expene.category === filterCategory;

        return matchSearch && matchesCategory;
    });

    return (

        <div className="container">

            <div className="expense-tracker">

                <h1>Expanse Tracker</h1>

                <ExpenseForm

                    expenseName={expenseName}
                    setExpenseName={setExpenseName}
                    amount={amount}
                    setAmount={setAmount}
                    category={category}
                    setCategory={setCategory}
                    addExpense={addExpense}
                />

                <h2> Total Expense: ₹{totalExpense}</h2>

                <FilterBar
                    search={search}
                    setSearch={setSearch}
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                />

                <ExpenseList 
                  filteredExpenses={filteredExpenses}
                  editExpense={editExpense}
                  deleteExpense={deleteExpense}
                />

            </div>


        </div>
    );
}

export default ExpenseTracker;
import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/Context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);

    // Filter transactions based on the type (Income or Expense)
    const transactionsPerType = transactions.filter((t) => t.type === title);

    // Choose categories based on the type
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    // Sum up the total amount for the selected categories
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);

    // Add the transaction amounts to the corresponding category
    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);
        if (category) category.amount += t.amount;
    });

    // Filter categories to only include those with an amount greater than 0
    const filteredCategories = categories.filter((c) => c.amount > 0);

    // Prepare the data for the chart
    const chartData = {
        labels: filteredCategories.map((c) => c.type), // Add category names as labels
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color),
        }],
    };
   
    
//custom hooks working for showing chart data
    return { total, chartData };
};

export default useTransactions;


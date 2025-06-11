import SummaryCard from "../components/UI/SummaryCard";
import TransactionItem from "../components/UI/TransactionItem";
import AddTransactionButton from "../components/UI/AddTransactionButton";

function Dashboard() {
    return (
    <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Summary Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryCard title="Income" amount="5000" type="income" />
        <SummaryCard title="Expense" amount="2000" type="expense" />
        <SummaryCard title="Balance" amount="3000" type="balance" />
    </div>

      {/* Recent Transactions */}
    <div>
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <TransactionItem name="Grocery" date="April 25, 2025" amount="500" type="expense" />
        <TransactionItem name="Part-time Job" date="April 23, 2025" amount="2000" type="income" />
    </div>

      {/* Add Transaction Button */}
    <AddTransactionButton />
    </div>
    );
}

export default Dashboard;

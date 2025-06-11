function TransactionItem({ name, date, amount, type }) {
    const amountClass = type === "income" ? "text-green-600" : "text-red-600";
    return (
    <div className = "flex justify-between items-center p-4 bg-white rounded-xl shadow mb-3">
        <div>
            <p className = "font-medium">{name}</p>
            <p className = "text-sm text-gray-500">{date}</p>
        </div>
        <p className = {`${amountClass} font-bold`}>₹{amount}</p>
    </div>
    );
}

export default TransactionItem;

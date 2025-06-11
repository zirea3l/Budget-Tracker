function SummaryCard ({title, amount, type})
{
    const color =
    type === "income"
    ? "bg-green-100 text-green-600"
    : type === "expense"
    ? "bg-red-100 text-red-600"
    : "bg-blue-100 text-blue-600";

    return (
    <div className={`rounded-xl p-4 shadow ${color}`}>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-2xl font-bold mt-2">₹{amount}</p>
    </div>
    );
}

export default SummaryCard;

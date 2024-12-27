import React from "react";

const TransactionList = ({ transactions, setEditingTransaction, deleteTransaction }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>₹{transaction.amount}</td>
            <td>{transaction.date}</td>
            <td>{transaction.type}</td>
            <td>
              <button
                className="btn btn-warning me-2"
                onClick={() => setEditingTransaction(transaction)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;


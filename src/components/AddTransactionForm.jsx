import React, { useState, useEffect } from "react";

const AddTransactionForm = ({
  addTransaction,
  editingTransaction,
  updateTransaction,
  setEditingTransaction,
}) => {
  const [form, setForm] = useState({ description: "", amount: "", date:"",type:"" });

  useEffect(() => {
    if (editingTransaction) {
      setForm(editingTransaction);
    } else {
      setForm({ description: "", amount: "",date:"",type:"" });
    }
  }, [editingTransaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTransaction) {
      updateTransaction(editingTransaction.id, form);
      setEditingTransaction(null);
    } else {
      addTransaction({ ...form, amount: parseFloat(form.amount) });
    }
    setForm({ description: "", amount: "" ,date:"",type:""});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          placeholder="Amount"
          className="form-control"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="datetime-local"
          placeholder="date"
          className="form-control"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="string"
          placeholder="Type"
          className="form-control"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          required
        />
      </div>
      <button className="btn btn-primary me-2" type="submit">
        {editingTransaction ? "Update" : "Add"} Transaction
      </button>
      {editingTransaction && (
        <button
          className="btn btn-secondary"
          onClick={() => setEditingTransaction(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddTransactionForm;


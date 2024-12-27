import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const transactionCollection = collection(db, "transactions");

  const fetchTransactions = async () => {
    const data = await getDocs(transactionCollection);
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addTransaction = async (transaction) => {
    await addDoc(transactionCollection, transaction);
    fetchTransactions();
  };

  const updateTransaction =async (id, updatedData) => {
    try {
      const transactionRef = doc(db, "transactions", id);
      await updateDoc(transactionRef, updatedData);
      console.log("Transaction updated successfully!");
    } catch (e) {
      console.error("Error updating transaction: ", e);
    }
  };
  

  const deleteTransaction =  async (id) => {
    try {
      await deleteDoc(doc(db, "transactions", id));
      console.log("Transaction deleted successfully!");
    } catch (e) {
      console.error("Error deleting transaction: ", e);
    }  
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="container  mt-5">
      <>
      <h1 className="text-center mb-4">Transaction Management</h1>
      <AddTransactionForm
        addTransaction={addTransaction}
        editingTransaction={editingTransaction}
        updateTransaction={updateTransaction}
        setEditingTransaction={setEditingTransaction}
      />
      <TransactionList
        transactions={transactions}
        setEditingTransaction={setEditingTransaction}
        deleteTransaction={deleteTransaction}
      />
      </>
    </div>
  );
};

export default App;

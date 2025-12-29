import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent.js";
import AddTransaction from "./AddTransaction";
import TransactionsContainer from "./TransactionsContainer.js";

const Container = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 800px;
  min-height: 60vh;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  margin: 20px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 20px;
  }
  
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 16px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 12px;
    margin: 10px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f8f9fa;
  color: #333;
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const Forinputlabel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const InputLabel = styled.label`
  color: #6c757d;
  font-weight: 600;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Tracker = () => {
  const [transaction, setTransaction] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = (trans) => {
    const wholeTransactions = [...transaction, trans];
    setTransaction(wholeTransactions);
    localStorage.setItem("expenses", JSON.stringify(wholeTransactions));
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transaction.filter((t) => t.id !== id);
    setTransaction(updatedTransactions);
    localStorage.setItem("expenses", JSON.stringify(updatedTransactions));
  };

  const calculateTransactions = useCallback(() => {
    let exp = 0;
    let inc = 0;

    transaction.forEach((item) => {
      item.transtype === "expense" ? (exp += item.amount) : (inc += item.amount);
    });

    setExpense(exp);
    setIncome(inc);
  }, [transaction]);

  useEffect(() => {
    const savedTrans = JSON.parse(localStorage.getItem("expenses"));
    if (savedTrans) {
      setTransaction(savedTrans);
    }
  }, []);

  useEffect(() => {
    calculateTransactions();
  }, [transaction, calculateTransactions]);

  return (
    <Container>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction addTransaction={addTransaction} setToggle={() => setToggle(false)} />
      )}
      
      <InputBox>
        <Forinputlabel>
          <InputLabel htmlFor="expense">Expense</InputLabel>
          <Input
            id="expense"
            type="number"
            readOnly
            value={expense.toFixed(2)}
          />
        </Forinputlabel>

        <Forinputlabel>
          <InputLabel htmlFor="income">Budget</InputLabel>
          <Input
            id="income"
            type="number"
            readOnly
            value={income.toFixed(2)}
          />
        </Forinputlabel>
      </InputBox>

      <TransactionsContainer
        transactions={transaction}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;
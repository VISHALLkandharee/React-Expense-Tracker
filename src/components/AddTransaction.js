import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin: 0 0 16px;
  
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;
`;

const Input = styled.input`
  padding: 12px 16px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const RadioContainer = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 12px 0;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const RadioInput = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
  
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

const AddTransBtn = styled.button`
  padding: 12px 24px;
  font-weight: 600;
  text-align: center;
  margin: 8px auto 0;
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const AddTransaction = ({ addTransaction, setToggle }) => {
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [transtype, setTranstype] = useState("expense");

  const addTransactionData = () => {
    if (!details.trim() || !amount) return;
    
    addTransaction({
      amount: Number(amount),
      details,
      transtype,
      id: Date.now(),
    });
    setToggle();
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </InputContainer>
      <RadioContainer>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="type"
            value="expense"
            checked={transtype === "expense"}
            onChange={(e) => setTranstype(e.target.value)}
          />
          Expense
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="type"
            value="income"
            checked={transtype === "income"}
            onChange={(e) => setTranstype(e.target.value)}
          />
          Income
        </RadioLabel>
      </RadioContainer>
      <AddTransBtn onClick={addTransactionData}>Add Transaction</AddTransBtn>
    </Container>
  );
};

export default AddTransaction;
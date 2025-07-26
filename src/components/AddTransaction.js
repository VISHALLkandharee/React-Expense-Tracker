import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.6px;
  position: relative;
  margin: 0 0 16px ;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
padding: 5.6px
gap:10px;
`;

const Input = styled.input`
  padding: 7px;
  outline: none;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 7px;
`;

const RadioContainer = styled.div`
  padding: 5px 16px;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-left: 23px;
`;

const AddTransBtn = styled.button`
padding:10px 23px;
font-weight: 600;
text-align: center;
margin: 0 9vw;
  outline: none;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: grey;
`;

const AddTransaction = ({addTransaction , setToggle}) => {
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [transtype, setTranstype] = useState("expense");

  const addTransactionData = ()=>{
    addTransaction({
      amount: Number(amount),
      details,
      transtype,
      id : Date.now(),
    })
    setToggle()

  }

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          name="type"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <Input
          type="text"
          name="type"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </InputContainer>
      <RadioContainer>
        <Label htmlFor="expense">expense</Label>
        <Input
          type="radio"
          name="type"
          value="expense"
          checked={transtype === "expense"}
          onChange={(e) => {
            setTranstype(e.target.value);
          }}
        />
        <Label htmlFor="income">income</Label>
        <Input
          type="radio"
          name="type"
          value="income"
          checked={transtype === "income"}
          onChange={(e) => {
            setTranstype(e.target.value);
          }}
        />
      </RadioContainer>

      <AddTransBtn onClick={addTransactionData}>Add Transaction</AddTransBtn>
    </Container>
  );
};

export default AddTransaction;

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent.js";
import AddTransaction from "./AddTransaction";
import TransactionsContainer from "./TransactionsContainer.js";

const Container = styled.div`
  padding: 17px;
  width: 60%;
  min-height: 60vh;
  border: 10px solid white;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  padding: 15px;
  outline: none;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 7px;
  margin-top: 4px;
`;

const Forinputlabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tracker = () => {
  const [transaction, setTransaction] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  const addTransaction = (trans) => {
    const wholeTransactions = [...transaction];
    wholeTransactions.push(trans);
    setTransaction(wholeTransactions);

    localStorage.setItem("expenses" , JSON.stringify(wholeTransactions))
    
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transaction.filter(
      (transaction) => transaction.id !== id
    );
    setTransaction(updatedTransactions);


    localStorage.setItem("expenses" , JSON.stringify(updatedTransactions))

  };

  const calculateTransactions =useCallback(() => {
    let exp = 0;
    let inc = 0;

    transaction.forEach((item) => {
      item.transtype === "expense"
        ? (exp += item.amount)
        : (inc += item.amount);

      // console.log(item.transtype);
    });

    setExpense(exp);
    setIncome(inc);
  },[transaction]);



  useEffect(()=>{
    const savedTrans = JSON.parse(localStorage.getItem("expenses"))


    if(savedTrans){
      setTransaction(savedTrans)
    }else{
      console.log("There is no transactions!...")
    }
  },[])


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
        <AddTransaction addTransaction={addTransaction} setToggle={setToggle} />
      )}
      <InputBox>
        <Forinputlabel>
          <label className="mx-3 text-secondary" htmlFor="expense">
            Expense
          </label>
          <Input
            id="expense"
            type="number"
            readOnly
            value={expense}
            onChange={(e) => {
              setExpense(e.target.value);
            }}
          />
        </Forinputlabel>

        <Forinputlabel>
          <label className="mx-3 text-secondary" htmlFor="income">
            Budget
          </label>
          <Input
            id="income"
            type="number"
            readOnly
            value={income}
            onChange={(e) => {
              setIncome(e.target.value);
            }}
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

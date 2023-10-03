import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");
  // const [expenes, setExpenses] = useState(props.items);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setExpenses(
    //   props.items.filter((element) => {
    //     return element.date.getFullYear() == selectedYear;
    //   })
    // );
  };

  const filteredDate = props.items.filter((element) => {
    if (filteredYear === "all") {
      return element.date.getFullYear() > 1900;
    } else {
      return element.date.getFullYear() == Number(filteredYear);
    }
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpenseList items={filteredDate} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;

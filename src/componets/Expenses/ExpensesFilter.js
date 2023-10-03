import TotalExpenses from "./TotalExpenses";
import ToggleVisibility from "./ToggleVisibility";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dateHandle = (event) => {
    props.onChangeFilter(event.target.value);
  };
  let click = 0;
  const handleClick = () => {};

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year :</label>
        <select onChange={dateHandle}>
          <option value="all">All Expenses</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

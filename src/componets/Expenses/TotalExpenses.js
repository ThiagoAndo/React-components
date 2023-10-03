import "./ExpenseItem.css";
import "./TotalExpenses.css";

import Card from "../UI/Card";

const TotalExpenses = (props) => {
  if (props.sumExpense.length > 0) {
    const total = props.sumExpense.reduce((currentTotal, item) => {
      return item.amount + currentTotal;
    }, 0);
    const expendAlert = {
      color: "",
      defineColor: function () {
        if (total > 1000) {
          this.color = "#FF6347";
        } else if (total > 500 && total <= 1000) {
          this.color = "#E2E044";
        } else if (total < 500) {
          this.color = "#9ACD32";
        }
      },
    };
    console.log(props.display);
    return (
      <Card className="expense-item total">
        <div className="expense-item__description">
          <h2>Total :</h2>
          <div
            className={"expense-item__price"}
            style={(expendAlert.defineColor(), expendAlert)}
          >
            {total}
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> this is an example of  click eventa*/}
      </Card>
    );
  }
};

export default TotalExpenses;

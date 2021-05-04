import './ExpenseItem.css';

function ExpenseItem() {
  return (
  <div className="expense-item">
    <div>28 Mars 2021</div>
    <div className="expense-item__description">
      <h2>Car Insurance</h2>
      <div className="expense-item__price">900 kr</div>
    </div>
  </div>
  );
}

export default ExpenseItem;

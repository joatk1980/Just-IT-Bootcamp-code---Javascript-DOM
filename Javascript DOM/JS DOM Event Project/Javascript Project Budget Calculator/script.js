document.addEventListener("DOMContentLoaded", () => {
  const budgetDisplay = document.getElementById("budget");
  const balanceDisplay = document.getElementById("balance");
  const amountInput = document.getElementById("amount");
  const addBudgetButton = document.getElementById("add-budget");
  const addExpenseButton = document.getElementById("add-expense");

  let budget = 0;
  let balance = 0;

  const updateDisplay = () => {
    budgetDisplay.textContent = budget;
    balanceDisplay.textContent = balance;
  };

  addBudgetButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      budget += amount;
      balance += amount;
      updateDisplay();
      amountInput.value = "";
    }
  });

  addExpenseButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      balance -= amount;
      updateDisplay();
      amountInput.value = "";
    }
  });

  updateDisplay();
});

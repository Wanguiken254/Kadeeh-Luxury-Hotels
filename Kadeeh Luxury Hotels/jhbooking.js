
let selectedTable = '';
let selectedFood = '';
let selectedPrice = 0;
let selectedMealTime = '';


function bookTable(tableNumber) {
    selectedTable = `Table ${tableNumber}`;
    document.getElementById('tableNumber').value = selectedTable;
}


function bookFood(foodName, price) {
    selectedFood = foodName;
    selectedPrice = price;
    document.getElementById('selectedMeal').value = `${foodName} - $${price.toFixed(2)}`;
}


function confirmBooking() {
    if (!selectedTable || !selectedFood || !selectedMealTime) {
        alert('Please select a table, a meal, and a meal time before booking.');
        return;
    }

    const totalPrice = selectedPrice;
    const confirmationMessage = `You have booked:\nTable: ${selectedTable}\nMeal: ${selectedFood}\nMeal Time: ${selectedMealTime}\nTotal Price: $${totalPrice.toFixed(2)}`;
    alert(confirmationMessage);

   
    selectedTable = '';
    selectedFood = '';
    selectedPrice = 0;
    selectedMealTime = ''; 

   
    document.getElementById('tableNumber').value = '';
    document.getElementById('selectedMeal').value = '';
}


function setMealTime(mealTime) {
    selectedMealTime = mealTime;
}

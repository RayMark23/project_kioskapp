let totalCost = 0;

function updateTotalCostDisplay() {
    const totalCostDisplay = document.getElementById('totalCost');
    totalCostDisplay.innerText = totalCost.toFixed(2);
}

function addItemToCart(price) {
    totalCost += parseFloat(price);
    updateTotalCostDisplay();
}
// modal for image
function showImageinModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
}
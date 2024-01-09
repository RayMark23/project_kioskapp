let totalCost = 0;

function updateTotalCostDisplay() {
  const totalCostDisplay = document.getElementById("totalCost");
  totalCostDisplay.innerText = totalCost.toFixed(2);
}

function addItemToCart(price) {
  totalCost += parseFloat(price);
  updateTotalCostDisplay();
}
// modal for image
function showImageinModal(imageUrl) {
  document.getElementById("modalImage").src = imageUrl;
}

// modal for order
function setupModal(button) {
  const orderModal = document.getElementById("orderModal");
  const productNameInput = orderModal.querySelector("#productName");
  const quantityInput = orderModal.querySelector("#quantity");
  const totalPriceInput = orderModal.querySelector("#totalPrice");
  const productImage = orderModal.querySelector("#productImage");

  productNameInput.value = button.dataset.name;
  productImage.src = button.dataset.image;
  const price = parseFloat(button.dataset.price);
  const unit = button.dataset.unit;
  quantityInput.value = unit === "kg" ? "1.0" : "1";
  quantityInput.step = unit === "kg" ? "0.01" : "1";
  totalPriceInput.value = price.toFixed(2);

  quantityInput.oninput = () => {
    totalPriceInput.value = (parseFloat(quantityInput.value) * price).toFixed(
      2
    );
  };
}

function edit() {
  var listItem = this.parentNode;
  var name = listItem.querySelector("span").innerText;
  document.getElementById("input").value = name;
  window.editingItem = listItem;
}

function editItem() {
  var newName = document.getElementById("input").value;
  if (!newName.trim()) return;
  window.editingItem.querySelector("span").innerText = newName;
  document.getElementById("input").value = "";
}

var editButtons = document.querySelectorAll(".edit");
editButtons.forEach(function (button) {
  button.addEventListener("click", edit);
});

var editItemButton = document.querySelector(".editItem");
editItemButton.addEventListener("click", editItem);

let div = document.getElementById("demo-dom");
function handleClick() {
  if (div.style.color === "black") {
    div.style.backgroundColor = "yellow";
    div.style.color = "red";
  } else {
    div.style.backgroundColor = "white";
    div.style.color = "black";
  }
}

function handleClick() {
  let table = document.getElementsByTagName("table")[0];
  let tr = table.appendChild(document.createElement("tr"));
  for (let i = 0; i < 3; i++) {
    tr.appendChild(document.createElement("td")).innerText = `Cell ${
      i + 1
    } row ${table.rows.length}`;
  }
}

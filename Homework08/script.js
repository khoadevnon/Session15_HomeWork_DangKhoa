function deleteRow() {
  let table = document.getElementsByTagName("table")[0];
  table.deleteRow(table.rows.length - 1);
}

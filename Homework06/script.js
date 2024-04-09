/*  Tạo giao diện như hình, mỗi khi bấm vào nút thì thêm giá trị trong ô input vào danh sách.
 */
function handleClick() {
  let input = document.getElementsByTagName("input")[0];
  let ul = document.getElementsByTagName("ul")[0];
  ul.appendChild(document.createElement("li")).innerText = input.value;
}

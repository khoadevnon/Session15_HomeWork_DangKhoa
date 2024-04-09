/* Viết chương trình khai báo mảng names chứa họ tên của người dùng, tiến hành in tất cả các tên trong mảng lên danh sách trên màn hình trình duyệt.
Ví dụ: khai báo mảng [“Nguyễn Văn A”, “Vũ Thị B”, “Nguyễn Minh C”] sẽ tạo ra danh sách:
 */
let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let ul = document
  .getElementsByTagName("body")[0]
  .appendChild(document.createElement("ul"));
for (let i = 0; i < names.length; i++) {
  ul.appendChild(document.createElement("li")).innerText = names[i];
}
document.getElementsByTagName("body")[0].style.fontFamily = "Arial, sans-serif";
document.getElementsByTagName("body")[0].style.fontSize = "50px";

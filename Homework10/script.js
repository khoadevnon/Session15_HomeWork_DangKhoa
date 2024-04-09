let div = document.getElementById("demo-dom");
console.log(div.innerText); // Lấy ra nội dung là văn bản có trong 1 phần tử HTML, Trích xuất toàn bộ kể cả bao nhiêu cấp HTML được lồng nhau
console.log(div.textContent); // Gần giống như innerText nhưng nội dung sẽ lấy ra gồm cả line break(xuống dòng)
console.log(div.innerHTML); // Lấy ra toàn bộ nội dung của phần tử HTML, bao gồm cả thẻ HTML
div.innerText = "Đây là nội dung sẽ được cập nhật";
div.textContent = "Đây là nội dung sẽ được cập nhật bằng textContent";
div.innerHTML = "<b>Đây là nội dung sẽ innerHTML</b>";

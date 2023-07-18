/* JavaScript */
function countdown() {
    var button = event.target;
    button.disabled = true; // ปิดการใช้งานปุ่ม
    var count = 60; // เวลาที่จะนับถอยหลัง
    button.innerHTML = count; // แสดงเวลาเริ่มต้นบนปุ่ม
  
    var timer = setTimeout(function() {
      count--;
      button.innerHTML = count; // แสดงเวลาที่นับถอยหลังลงบนปุ่ม
  
      if (count > 0) {
        timer = setTimeout(arguments.callee, 1000); // เรียกใช้ฟังก์ชัน timeout อีกครั้งหลังจากผ่านไป 1 วินาที
      } else {
        button.innerHTML = "เริ่ม"; // เปลี่ยนข้อความปุ่มกลับเป็น "เพิ่มเติม"
        button.disabled = false; // เปิดใช้งานปุ่มอีกครั้ง
      }
    }, 1000); // เรียกใช้ฟังก์ชันทุก ๆ 1 วินาที
  }
  
let age = prompt("กรูณากรอกอายุของคุณ");
if (age > 13) {
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height= \"315\" src=\"https://www.youtube.com/embed/eOIvICr9k7I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
} else {
    alert("ห้ามเข้า");
}

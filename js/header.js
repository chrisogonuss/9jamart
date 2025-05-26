const menuBar = document.querySelector(".menu-bar")
const navBox = document.querySelector(".menuBox")

menuBar.addEventListener('click', () => {
 navBox.classList.toggle("show")
 })
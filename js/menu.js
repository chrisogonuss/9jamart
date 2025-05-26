// menutoggle.js
const menuBar = document.querySelector(".menu-bar")
const navBox = document.querySelector(".menuBox")

menuBar.addEventListener('click', () => {
 navBox.classList.toggle("show")
})

//Javascript for submenu
const lists = document.querySelectorAll(".link-list")
lists.forEach(list => {
 list.addEventListener("mouseenter", showSubmenu)
 list.addEventListener("mouseleave", hideSubmenu)
 const subList = list.querySelector(".sub-list")

 const borderPosRight = subList.getBoundingClientRect().right
 const listWidth = list.clientWidth

 const clientWidth = document.body.clientWidth - 500

 // console.log(borderPosRight > clientWidth ? "greater" : "lesser");

 if (borderPosRight > clientWidth) {
  subList.classList.add("shift-left")
  subList.style.right = `calc(100% - ${listWidth}px`
 }

})


function showSubmenu(e) {
 const subList = e.target.querySelector(".sub-list")
 e.target.classList.add("link-show")
 subList.classList.add("show-list")
}

function hideSubmenu(e) {
 const subList = e.target.querySelector(".sub-list")
 e.target.classList.remove("link-show")
 subList.classList.remove("show-list")
}


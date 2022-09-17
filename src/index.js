import './input.css'
import loadHomeContents from "./home.js"
import loadMenuContents from "./menu.js"
import loadContactContents from "./contact.js"

const addListeners = () => {
  const content = document.querySelector("#content")
  const homeButton = document.querySelector(".home")
  const menuButton = document.querySelector(".menu")
  const contactButton = document.querySelector(".contact")

  const changeTab = (tabFunction) => {
    content.innerHTML = ""
    tabFunction()
    addListeners()
  }

  homeButton.addEventListener("click", () => {
    changeTab(loadHomeContents)
  })

  menuButton.addEventListener("click", () => {
    changeTab(loadMenuContents)
  })

  contactButton.addEventListener("click", () => {
    changeTab(loadContactContents)
  })
}

loadHomeContents()
addListeners()

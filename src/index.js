import './input.css'
import { home, menu, contact } from "./tabs.js"

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
    changeTab(home)
  })

  menuButton.addEventListener("click", () => {
    changeTab(menu)
  })

  contactButton.addEventListener("click", () => {
    changeTab(contact)
  })
}

home()
addListeners()

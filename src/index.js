import "./input.css"
import { home, menu, contact } from "./tabs.js"

class Display {
  static setupButtons() {
    const homeButton = document.querySelector(".home")
    this.linkElementToTab(homeButton, home)

    const menuButton = document.querySelector(".menu")
    this.linkElementToTab(menuButton, menu)

    const contactButton = document.querySelector(".contact")
    this.linkElementToTab(contactButton, contact)
  }

  static linkElementToTab(element, tab) {
    element.addEventListener("click", () => {
      this.loadTab(tab)
    })
  }

  static loadTab(tabFunction) {
    const content = document.querySelector("#content")
    content.innerHTML = ""
    tabFunction(content)
    this.setupButtons()
  }
}

Display.loadTab(home)

import hero from "./images/hero.jpg"
import logo from "./images/logo.png"
import pizzaOne from "./images/pizza-1.png"
import pizzaTwo from "./images/pizza-2.png"
import pizzaThree from "./images/pizza-3.png"
import pizzaFour from "./images/pizza-4.png"

const home = (content) => {
  content.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center">
      <div class="w-full flex justify-center border-b shadow p-2">
        <div class="grid grid-cols-3 gap-10 w-full max-w-sm">
          <button type="button" class="home p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg bg-neutral-200 rounded shadow border border-neutral-200">
            Home
          </button>
          <button type="button" class="menu border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
            Menu
          </button>
          <button type="button" class="contact border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
            Contact
          </button>
        </div>
      </div>

      <div class="flex-1 w-full imgContainer flex flex-col relative">

      </div>
    </div>
  `

  const heroImage = document.createElement("img")
  heroImage.src = hero
  heroImage.className = "shadow border rounded h-full object-cover object-right brightness-75 blur-[2px]"
  document.querySelector(".imgContainer").appendChild(heroImage)

  const logoImage = document.createElement("img")
  logoImage.src = logo
  logoImage.className = "absolute w-full max-w-xl left-0 right-0 top-0 bottom-0 m-auto drop-shadow-lg"
  document.querySelector(".imgContainer").appendChild(logoImage)
}

const menu = (content) => {
  content.innerHTML = `
  <div class="flex flex-col items-center">
    <div class="flex justify-center border-b shadow p-2 fixed left-0 right-0 bg-white">
      <div class="grid grid-cols-3 gap-10 w-full max-w-sm">
        <button type="button" class="home border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Home
        </button>
        <button type="button" class="menu p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg  bg-neutral-200 rounded shadow border border-neutral-200">
          Menu
        </button>
        <button type="button" class="contact border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Contact
        </button>
      </div>
    </div>

    <div class="w-full tabContent flex flex-col gap-y-4 items-center p-4 mt-[4rem]">

    </div>
  </div>
`

  const pizzaOneCard = document.createElement("div")
  pizzaOneCard.className = "border shadow rounded-lg p-8 w-1/2"
  const pizzaOneImage = document.createElement("img")
  pizzaOneImage.src = pizzaOne
  pizzaOneImage.className = "w-60"
  pizzaOneCard.appendChild(pizzaOneImage)
  document.querySelector(".tabContent").appendChild(pizzaOneCard)

  const pizzaTwoCard = document.createElement("div")
  pizzaTwoCard.className = "border shadow rounded-lg p-8 w-1/2"
  const pizzaTwoImage = document.createElement("img")
  pizzaTwoImage.src = pizzaTwo
  pizzaTwoImage.className = "w-60"
  pizzaTwoCard.appendChild(pizzaTwoImage)
  document.querySelector(".tabContent").appendChild(pizzaTwoCard)

  const pizzaThreeCard = document.createElement("div")
  pizzaThreeCard.className = "border shadow rounded-lg p-8 w-1/2"
  const pizzaThreeImage = document.createElement("img")
  pizzaThreeImage.src = pizzaThree
  pizzaThreeImage.className = "w-60"
  pizzaThreeCard.appendChild(pizzaThreeImage)
  document.querySelector(".tabContent").appendChild(pizzaThreeCard)

  const pizzaFourCard = document.createElement("div")
  pizzaFourCard.className = "border shadow rounded-lg p-8 w-1/2"
  const pizzaFourImage = document.createElement("img")
  pizzaFourImage.src = pizzaFour
  pizzaFourImage.className = "w-60"
  pizzaFourCard.appendChild(pizzaFourImage)
  document.querySelector(".tabContent").appendChild(pizzaFourCard)
}

const contact = (content) => {
  content.innerHTML = `
  <div class="w-screen h-screen flex flex-col items-center gap-1">
    <div class="w-full flex justify-center border-b shadow p-2">
      <div class="grid grid-cols-3 gap-10 w-full max-w-sm">
        <button type="button" class="home border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Home
        </button>
        <button type="button" class="menu border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Menu
        </button>
        <button type="button" class="contact p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg bg-neutral-200 rounded shadow border border-neutral-200">
          Contact
        </button>
      </div>
    </div>

    <div class="flex-1 w-full">

    </div>
  </div>
`
}

export { home, menu, contact }

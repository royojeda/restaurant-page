import hero from "./images/hero.jpg"
import logo from "./images/logo.png"

const home = (content) => {
  content.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center p-1 gap-1">
      <div class="w-full flex justify-center border rounded shadow p-2">
        <div class="grid grid-cols-3 gap-10 w-full max-w-xs">
          <button type="button" class="home border-neutral-200 p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
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
  <div class="w-screen h-screen flex flex-col items-center p-1 gap-1">
    <div class="w-full flex justify-center border rounded shadow p-2">
      <div class="grid grid-cols-3 gap-10 w-full max-w-xs">
        <button type="button" class="home border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Home
        </button>
        <button type="button" class="menu border-neutral-200 p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Menu
        </button>
        <button type="button" class="contact border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Contact
        </button>
      </div>
    </div>

    <div class="flex-1 w-full rounded">

    </div>
  </div>
`
}

const contact = (content) => {
  content.innerHTML = `
  <div class="w-screen h-screen flex flex-col items-center p-1 gap-1">
    <div class="w-full flex justify-center border rounded shadow p-2">
      <div class="grid grid-cols-3 gap-10 w-full max-w-xs">
        <button type="button" class="home border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Home
        </button>
        <button type="button" class="menu border-neutral-200 p-2 hover:underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
          Menu
        </button>
        <button type="button" class="contact border-neutral-200 p-2 font-semibold underline underline-offset-4 decoration-4 decoration-orange-500 text-lg">
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

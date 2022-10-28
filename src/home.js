import hero from "./images/hero.jpg"
import logo from "./images/logo.png"

const home = (content) => {
  content.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center">
      <div class="w-full flex justify-center border-b shadow p-2">
        <div class="grid grid-cols-3 gap-6 w-full max-w-sm">
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
        <img class="heroImage shadow border rounded h-full object-cover object-right brightness-75 blur-[2px]">

        <img class="logoImage absolute w-full max-w-xl left-0 right-0 top-0 bottom-0 m-auto drop-shadow-lg">
      </div>
    </div>
  `

  document.querySelector(".heroImage").src = hero
  document.querySelector(".logoImage").src = logo
}

export { home }

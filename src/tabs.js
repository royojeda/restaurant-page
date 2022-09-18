const home = (content) => {
  content.innerHTML = `
    <div class="bg-neutral-800 w-screen h-screen p-2 flex flex-col gap-2">
      <div class="grid grid-cols-3 gap-2">
        <button type="button" class="home rounded shadow border border-neutral-900 p-2 bg-neutral-600 text-white font-semibold">
          Home
        </button>

        <button type="button" class="menu rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Menu
        </button>

        <button type="button" class="contact rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Contact
        </button>
      </div>

      <div class="flex-1">

      </div>
    </div>
  `
}

const menu = (content) => {
  content.innerHTML = `
    <div class="bg-neutral-800 w-screen h-screen p-2 flex flex-col gap-2">
      <div class="grid grid-cols-3 gap-2">
        <button type="button" class="home rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Home
        </button>

        <button type="button" class="menu rounded shadow border border-neutral-900 p-2 bg-neutral-600 text-white font-semibold">
          Menu
        </button>

        <button type="button" class="contact rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Contact
        </button>
      </div>

      <div class="flex-1">

      </div>
    </div>
  `
}

const contact = (content) => {
  content.innerHTML = `
    <div class="bg-neutral-800 w-screen h-screen p-2 flex flex-col gap-2">
      <div class="grid grid-cols-3 gap-2">
        <button type="button" class="home rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Home
        </button>

        <button type="button" class="menu rounded shadow border border-neutral-900 p-2 bg-neutral-700 text-white">
          Menu
        </button>

        <button type="button" class="contact rounded shadow border border-neutral-900 p-2 bg-neutral-600 text-white font-semibold">
          Contact
        </button>
      </div>

      <div class="flex-1">

      </div>
    </div>
  `
}

export { home, menu, contact }

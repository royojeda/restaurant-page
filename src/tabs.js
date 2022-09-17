const home = () => {
  const content = document.querySelector("#content")
  content.innerHTML = `
    <button type="button" class="home rounded shadow border p-2 bg-black text-white">
      Home
    </button>

    <button type="button" class="menu rounded shadow border p-2 bg-white text-black">
      Menu
    </button>

    <button type="button" class="contact rounded shadow border p-2 bg-white text-black">
      Contact
    </button>
  `
}

const menu = () => {
  const content = document.querySelector("#content")
  content.innerHTML = `
    <button type="button" class="home rounded shadow border p-2 bg-white text-black">
      Home
    </button>

    <button type="button" class="menu rounded shadow border p-2 bg-black text-white">
      Menu
    </button>

    <button type="button" class="contact rounded shadow border p-2 bg-white text-black">
      Contact
    </button>
  `
}

const contact = () => {
  const content = document.querySelector("#content")
  content.innerHTML = `
    <button type="button" class="home rounded shadow border p-2 bg-white text-black">
      Home
    </button>

    <button type="button" class="menu rounded shadow border p-2 bg-white text-black">
      Menu
    </button>

    <button type="button" class="contact rounded shadow border p-2 bg-black text-white">
      Contact
    </button>
  `
}

export { home, menu, contact }

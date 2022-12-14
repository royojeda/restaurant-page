import pizzaOne from "./images/pizza-1.png"
import pizzaTwo from "./images/pizza-2.png"
import pizzaThree from "./images/pizza-3.png"
import pizzaFour from "./images/pizza-4.png"

const menu = (content) => {
  content.innerHTML = `
    <div class="flex flex-col items-center">
      <div class="flex justify-center border-b shadow p-2 fixed w-screen left-0 right-0 bg-white">
        <div class="grid grid-cols-3 gap-6 w-full max-w-sm">
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
        <div class="pizzaCardOne border shadow rounded-lg p-8 w-full max-w-4xl flex items-center flex-col sm:flex-row">
          <img class="pizzaOneImage w-full max-w-[20rem] sm:w-[30vw] sm:max-w-[20rem]">

          <div class="flex flex-col p-10 justify-center items-center sm:items-start gap-4 text-center sm:text-left">
            <div class="text-2xl font-medium underline decoration-red-400">
              Hi - Protein Supreme
            </div>

            <div class="italic">
              All-meat pizza with beef, salami, pepperoni, ham and Italian sausage. Topped with tangy ranch dressing.
            </div>
          </div>
        </div>

        <div class="pizzaCardTwo border shadow rounded-lg p-8 w-full max-w-4xl flex items-center flex-col sm:flex-row">
          <img class="pizzaTwoImage w-full max-w-[20rem] sm:w-[30vw] sm:max-w-[20rem]">

          <div class="flex flex-col p-10 justify-center items-center sm:items-start gap-4 text-center sm:text-left">
            <div class="text-2xl font-medium underline decoration-amber-400">
              Truffle Four Cheese
            </div>

            <div class="italic">
              Irresistibly rich and creamy pizza topped with four types of cheese: Mozzarella, Parmesan, Cheddar and Cream Cheese and drizzled with premium Truffle flavor!
            </div>
          </div>
        </div>

        <div class="pizzaCardThree border shadow rounded-lg p-8 w-full max-w-4xl flex items-center flex-col sm:flex-row">
          <img class="pizzaThreeImage w-full max-w-[20rem] sm:w-[30vw] sm:max-w-[20rem]">

          <div class="flex flex-col p-10 justify-center items-center sm:items-start gap-4 text-center sm:text-left">
            <div class="text-2xl font-medium underline decoration-lime-400">
              Shakey's Special
            </div>

            <div class="italic">
              Loaded with beef, Italian sausage, pepperoni, salami, mushrooms, green bell pepper, and onions.
            </div>
          </div>
        </div>

        <div class="pizzaCardFour border shadow rounded-lg p-8 w-full max-w-4xl flex items-center flex-col sm:flex-row">
          <img class="pizzaFourImage w-full max-w-[20rem] sm:w-[30vw] sm:max-w-[20rem]">

          <div class="flex flex-col p-10 justify-center items-center sm:items-start gap-4 text-center sm:text-left">
            <div class="text-2xl font-medium underline decoration-orange-400">
              Angus Steakhouse
            </div>

            <div class="italic">
              Angus beef with roasted onions and mushrooms, topped with crunchy potato strings.
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  document.querySelector(".pizzaOneImage").src = pizzaOne
  document.querySelector(".pizzaTwoImage").src = pizzaTwo
  document.querySelector(".pizzaThreeImage").src = pizzaThree
  document.querySelector(".pizzaFourImage").src = pizzaFour
}

export { menu }

const contact = (content) => {
  content.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center">
      <div class="w-full flex justify-center border-b shadow p-2">
        <div class="grid grid-cols-3 gap-6 w-full max-w-sm">
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

      <div class="flex-1 w-full flex justify-center items-center p-4">
        <div class="p-10 rounded-md shadow-xl border flex flex-col gap-10">
          <div class="text-3xl font-medium border-orange-400 border-b-2">
            Get in touch!
          </div>

          <div class="flex flex-col gap-4 text-xl">
            <div>
              Email:

              <a href="mailto:callcenter@shakeysdelivery.com.ph" class="text-orange-400 break-all">callcenter@shakeysdelivery.com.ph</a>
            </div>

            <div>
              Telephone:

              <span class="text-orange-400">
                7777-7777
              </span>

              or

              <span class="text-orange-400">
                #77777
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export { contact }

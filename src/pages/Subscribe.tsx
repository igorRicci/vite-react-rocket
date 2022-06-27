import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">

        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build an <strong className="text-blue-500">entire application</strong> from scratch using <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            In 3 days you'll be able to gather practical skills using one of the most famous technologies in the market. For free.
          </p>
        </div>

        <div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">Free subscription</strong>

            <form className="flex flex-col gap-2 w-full" action="">
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Full name"
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Email"
                />

              <button
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="coding" />
    </div>
  )
}

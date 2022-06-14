import Navbar from './Navbar'
import motorhome from './motorhome.jpg'
import Footer from './footer'

export default function Example() {
  return (

    <>
    <Navbar /> 
    <div className="relative bg-slate-800 overflow-hidden">
      <div className="max-w-7x1 mx-auto">
        <div className="relative z-10 pb-8 bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 100 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {/* Main */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 drop-shadow-lg">
                Custom Motorcycle
                </span>{''}
              </h1>
              <h2 className="text-4xl tracking-tight font-extrabold text-stone-800 sm:text-5xl md:text-6xl text-xl">
                <span className="bg-clip-text text-transparent bg-white">
                make your mount make your style
                  </span>
              </h2>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="Shop"
                    className="shadow-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-100 bg-stone-900 md:py-4 md:text-lg md:px-10"
                  >
                    Beli Sekarang
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 transition duration-150 ease-in-out">
                <button class="transition duration-150 ease-in-out ...">
                  <a
                    href="DaftarYuk"
                    className="shadow-lg w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-neutral-100 bg-stone-900 md:py-4 md:text-lg md:px-10"
                  >
                    Hubungi kita
                  </a>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src= {motorhome}
          alt=""
        />
      </div>
    </div>

    <Footer/>
    </>
  )
}




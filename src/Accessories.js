/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Footer from './footer'
import Navbar from './Navbar'
import Acc1  from './knalpot/kenalpot1.jpg'
import Acc2 from './knalpot/kenalpot2.jpg'
import Acc3 from './knalpot/kenalpot3.jpg'
import Acc4 from './knalpot/kenalpot4.jpg'


const products = [
    {
      id: 1,
      name1: 'Custom Japstyle Yamaha Thunder',
      href: '#',
      imageSrc: {Acc1},
      imageAlt: "Front of men's Basic Tee in black.",
      price1: '$35',
      color1: 'White',

      id: 1,
      name2: 'Custom Japstyle Yamaha Scorpio',
      href: '#',
      imageSrc: {Acc2},
      imageAlt: "Front of men's Basic Tee in black.",
      price2: '$35',
      color2: 'Black',

      id: 1,
      name3: 'Custom Japstyle Honda Tiger',
      href: '#',
      imageSrc: {Acc3},
      imageAlt: "Front of men's Basic Tee in black.",
      price3: '$36',
      color3: 'Red',

      id: 1,
      name4: 'Custom Japstyle Kawasaki WR175  ',
      href: '#',
      imageSrc: {Acc4},
      imageAlt: "Front of men's Basic Tee in black.",
      price4: '$37',
      color4: 'Silver',
    },
    
    // More products...
  ]

  export default function Example() {
    return (
        <>

        <Navbar/>

      <div className="bg-slate-800">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div key={product.id} className="group relative ">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none ">
                  <img
                    src={Acc1}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full "
                 />
                 <img/>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200 ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name1}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-200 ">{product.color1}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{product.price1}</p>
                </div>
              </div>
            ))}
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={Acc2}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                 />
                 <img/>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name2}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">{product.color2}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{product.price2}</p>
                </div>
              </div>
            ))}
             {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={Acc3}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                 />
                 <img/>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name3}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">{product.color3}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{product.price3}</p>
                </div>
              </div>
            ))}
             {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:scale-110 transition duration-300 ease-in-out lg:h-80 lg:aspect-none">
                  <img
                    src={Acc4}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                 />
                 <img/>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-200">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name4}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">{product.color4}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{product.price4}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
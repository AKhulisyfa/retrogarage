/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'
import Footer from './footer'
import Navbar from './Navbar'

export default function Example() {
  return (

    <>
    <Navbar /> 
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Tanyakan Informasi</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and Customers Servis</p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">hubungi kami di</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Angga Priyanto</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">08214332458/45532</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"> Dimas Adrian</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">087756354232/45568</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Sema Januar</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">08667534646/455649</dd>
          </div>
        </dl>
      </div>
      <Footer/>
    </div>
    </>
  )
}

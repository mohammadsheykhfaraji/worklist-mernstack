import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
   
    { name: 'داشبورد', href: '/user/dashboard'  },
    { name: 'درباره ما', href:'/aboutus'},
    
  ]


export default function Menu() {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const menunav=()=>{
        return(
        <div>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 bg-purple-100" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to={"#"} className="-m-1.5 p-1.5">
              <span className="sr-only">لیست کار ها</span>
              <img className="h-8 w-auto" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-check-list-basic-ui-elements-2.3-sbts2018-flat-sbts2018.png" alt="external-check-list-basic-ui-elements-2.3-sbts2018-flat-sbts2018"/>
              
              
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">باز کردن منو</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
             {navigation.map((item) => (
              <Link   key={item.name}  to={item.href} className="text-xl font-bold leading-6 text-gray-900">
                {item.name}
              </Link>
           ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to='/signin' className="text-xl font-bold  leading-6 text-gray-900">
              ورود 
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={"#"} className="-m-1.5 p-1.5">
                <span className="sr-only">لیست کار ها</span>
                <img className="h-8 w-auto" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-check-list-basic-ui-elements-2.3-sbts2018-flat-sbts2018.png" alt="external-check-list-basic-ui-elements-2.3-sbts2018-flat-sbts2018"/>
              
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">بستن منو</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                {navigation.map((item) => (
                    <Link   key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                ))}
                </div>
                <div className="py-6">
                  <Link
                    to='/signin'
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ورود
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
      );
    }

    return(
        <div>
            {menunav()}
        </div>
    );
}



import React from "react";



export default function Aboutus () {

   return(
    <>
      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-50 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src={require('../images/aboutus.jpg')} alt="" className="relative z-40 object-cover w-full h-96 rounded-3xl" />
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <h2 className="mb-4 text-4xl font-semibold text-purple-500 ">
                        درباره ما
                    </h2>
                    <p className="mb-10 text-base leading-7 text-gray-500">
                        سلام من اسمم محمد شیخ فرجی هست و دارم یه سایت تمرینی برای لیست کار ها  درست میکنم
                        من در این سایت سمت بکند از نود جی اس استفاده میکنم 
                        و قراره فارنت ش رو در دو ورژن پیاده سازی کنم 
                        که یکی اینه با ریکت پیاده سازی میشه و یکی دیگه با نکست پیاده سازی میکنم البته قدم به قدم 
                        در این سایت من سعی میکنم کلا از تیلویند استفاده کنم و سایتم کلا کد های اچ تی ام ال و سی اس اس اش 
                        از سایت تیلویند نشات گرفته راستشو بخوایید زیاد تو فارنت دستی ندارم و این کد ها رو برا همین کپی میکنم 
                        ممنون که اینا رو خوندید
                    </p>
                   
                </div>
            </div>
        </div>
    </section>
    </>
   );
}
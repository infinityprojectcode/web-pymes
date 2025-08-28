import Header from "@components/layouts/header.jsx";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center w-full h-[550px]">
        <h1 className="font-bold text-6xl pb-[30px] text-[#222222]">
          Streamline Your Business{" "}
          <span className="text-[#0f74c5]">Finances</span>
        </h1>
        <div className="text-[#555555] text-lg pb-[30px] w-[34%] text-center">
          Take control of your business finances with our comprehensive
          platform. Manage expenses, track invoices, and make data-driven
          decisions with confidence.
        </div>
        <div className="flex text-sm">
          <button className="flex justify-around items-center text-white bg-[#0f74c5] rounded-md w-40 h-10 mr-[20px] hover:bg-[#2782ca] hover:duration-200 px-[10px]">
            Get Started Free <ArrowRight className="w-[15px]" />
          </button>
          <button className="w-36 h-10 border rounded-md border-solid border-[#e9e9e9] hover:bg-[#0f74c5] hover:text-white hover:duration-200">
            Watch Demo
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full h-[550px] bg-[rgb(241,241,241)]">
        <h1 className="font-bold text-4xl pb-5">
          Everything you need to manage your business
        </h1>
        <div className="pb-[60px]">
          Powerful tools designed for modern businesses
        </div>

        <div className="grid grid-cols-[repeat(4,1fr)] gap-6 ml-10">

        <h1 className="w-[250px] h-[100%] bg-[rgba(230, 225, 225, 1)]  border border-solid border-[gray] border rounded-[5%]">

        <p>aqui va la imagen</p>

        <p className="font-bold ml-2 pb-2">Economy Management</p>
        <p className="text-[13px] ml-2 pb-8 text-[gray]">Comprehensive financial oversight with real-time insights and automated reporting</p>

        </h1>
        <h1 className="w-[250px] h-[100%] bg-[rgba(230, 225, 225, 1)]  border border-solid border-[gray] border rounded-[5%]">

        <p>aqui va la imagen</p>

        <p className="font-bold ml-2 pb-2">Expense Tracking</p>
        <p className="text-[13px] ml-2 pb-2 text-[gray]">Monitor and categorize expenses automatically with smart receipt scanning and analysis</p>

        </h1>
        <h1 className="w-[250px] h-[100%] bg-[rgba(230, 225, 225, 1)]  border border-solid border-[gray] border rounded-[5%]">

        <p>aqui va otra imagen</p>

        <p className="font-bold ml-2 pb-2">Invoice Handling</p>
        <p className="text-[13px] ml-2 pb-2 text-[gray]">Create, send, and track invoices with automated follow-ups and payment reminders</p>

        </h1>
        <h1 className="w-[250px] h-[100%] bg-[rgba(230, 225, 225, 1)]  border border-solid border-[gray] border rounded-[5%]">

        img

        <p className="font-bold ml-2 pb-2">Product Administration</p>
        <p className="text-[13px] ml-2 pb-2 text-[gray]">Manage inventory, pricing, and product lifecycle with integrated analytics</p>
        </h1>
        </div>

         </section>

         <section className="flex flex-col justify-center items-center w-full h-[550px] bg-[rgba(255, 255, 255, 1)]">

          <h1 className="font-bold text-4xl pb-4">See [Company Name] in action</h1>

          <h1>Experience the power of streamline financial management</h1>


         </section>
    </>
  );
}

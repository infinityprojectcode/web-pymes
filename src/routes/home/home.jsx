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
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full h-16 bg-white px-[4%] py-0 border-b-[#e9e9e9] border-b border-solid">
        <div>
          <h1 className="text-2xl font-bold">Pymes</h1>
        </div>
        <ul className="flex w-1/5 justify-around">
          <li className="text-[#555555] cursor-pointer hover:text-[#0f74c5] hover:duration-200">
            Features
          </li>
          <li className="text-[#555555] cursor-pointer hover:text-[#0f74c5] hover:duration-200">
            Benefits
          </li>
          <li className="text-[#555555] cursor-pointer hover:text-[#0f74c5] hover:duration-200">
            Demo
          </li>
        </ul>
        <div>
          <button className="w-20 h-10 border rounded-md border-solid border-[#e9e9e9] hover:bg-[#0f74c5] hover:text-white hover:duration-200">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

import { claude } from "../assets/index";
export default function Header() {
  return (
    <>
      <div className="flex flex-row bg-white w-screen h-27.75 justify-center items-center gap-5" id="ex">
        <img src={claude} alt="" className="w-12"/>
        <h1 className="text-[#141413]">Chef Claude</h1>
      </div>
    </>
  );
}

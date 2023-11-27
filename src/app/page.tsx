import Sidenav from "./components/Sidenav";
export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-10">
        <div>
          <Sidenav />
        </div>
        <div className="col-span-9">
          <div className="flex flex-col max-h-screen">
            <div className="bg-slate-300 w-full h-full"></div>
            <div className="bg-slate-600 w-full h-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Sidenav from "./components/Sidenav";
export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-10">
        <div>
          <Sidenav />
        </div>
        <div className="col-span-9"></div>
      </div>
    </main>
  );
}

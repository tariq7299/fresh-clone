import Image from "next/image";
import NavBar from "./ui/components/custom/nav-bar";


export default function Home() {
  return (
    <>
      <main className="">
        <NavBar />
        <section className="mt-32 p-5">
          <h1 className="text-4xl font-black text-start tracking-tight font-libre-bodoni scale-y-110">Schedule local salon and wellness appointments</h1>

        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </>
  );
}

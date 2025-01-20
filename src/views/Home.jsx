import Header from "../components/ui/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col px-16 lg:px-24 2xl:px-32 py-10 pt-32 gap-10">
        <h1 className="text-4xl text-[#513685] font-semibold">Tienda Isimo</h1>
      </main>
    </>
  );
}

export default Home;

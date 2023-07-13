import LeftSide from "./components/LeftSide";

function App() {
  return (
    <>
      <LeftSide />
      <div className="font-bold bg-gray-100 h-screen">
        <div>
          <h1>
            This is not a real online service! You know you need something like
            this in your life to help you realize your deepest dreams. Sign up{" "}
            <em>now</em> to get started.
          </h1>
          <br />
          <h1>
            You <em>know</em> you want to
          </h1>
        </div>
        <form className="bg-white shadow-lg" action="submit">
          <h1>Let's do this!</h1>
          <div>
            <input className="border-2 border-black" type="text" required />
            <input className="border-2 border-black" type="text" required />
            <input className="border-2 border-black" type="email" required />
            <input className="border-2 border-black" type="number" required />
            <input
              className="border-2 border-black"
              type="password"
              required
              minLength="8"
            />
            <input
              className="border-2 border-black"
              type="password"
              required
              minLength="8"
            />
          </div>
          <button type="submit">click</button>
        </form>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="relative h-screen w-1/3">
      <img src={bg} alt="bg" className="object-cover h-screen" />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-200%] flex justify-center items-center bg-[rgba(0,0,0,0.6)] w-full h-32">
        <img src={logo} alt="logo" className="w-20 object-contain mr-2" />
        <h1 className="font-bold text-5xl text-white">ODIN</h1>
      </div>
    </div> */
}

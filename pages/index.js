import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section
        id="Home"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          Home
        </h1>
      </section>

      <section id="blog" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>

      <section
        id="Style"
        className="text-white h-screen bg-black  text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Style{' '}
        </h1>
      </section>

      <section
        id="Travel"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Travel
        </h1>
      </section>

      <section
        id="Sports"
        className="text-white h-screen bg-black  text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Sports{' '}
        </h1>
      </section>

      <section
        id="Film & Music"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Film & Music
        </h1>
      </section>

      <section
        id="Health"
        className="text-white h-screen bg-black  text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Health{' '}
        </h1>
      </section>

      <section
        id="Entertainment"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Entertainment
        </h1>
      </section>

      <section
        id="Politic"
        className="text-white h-screen bg-black  text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Politic{' '}
        </h1>
      </section>
<Footer />
    </div>
  );
}

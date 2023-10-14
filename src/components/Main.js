import "../assets/main.css";
import Entry from "./Entry";
import Entry2 from "./Entry2";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Header />
      <section className='main'>
        <Hero />
        <div className='entry__form__row'>
          <Entry />
          <Entry2 />
        </div>
        <Hero />
      </section>
      <Footer />
    </>
  );
}

export default Main;

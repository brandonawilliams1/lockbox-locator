import "../assets/main.css";
import Entry from "./Entry";
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
        </div>
        <Hero />
      </section>
      <Footer />
    </>
  );
}

export default Main;

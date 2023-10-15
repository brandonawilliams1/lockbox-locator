import "../assets/main.css";
import Entry from "./Entry";
import Entry2 from "./Entry2";
import Hero from "./Hero";

function Main() {
  return (
    <>
      <section className='main'>
        <Hero />
        <div className='entry__form__row'>
          <Entry />
          <Entry2 />
        </div>
        <Hero />
      </section>
    </>
  );
}

export default Main;

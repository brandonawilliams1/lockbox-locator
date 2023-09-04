import React from "react";
import "../assets/main.css";
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
          <form action='/'>
            <label htmlFor='address'>Address</label>
            <input type='text' id='address' name='address' />
            
            <label htmlFor='city'>City</label>
            <input type='text' id='city' name='address' />
            
            <label htmlFor='state'>State</label>
            <input type='text' id='state' name='state' />
            <br></br>
            <lable>Single Family</lable>
            <input type='checkbox' id='buldType' name='sfh' />

            <lable>MDU Low Rise</lable>
            <input type='checkbox' id='buldType' name='mdu' />

            <lable>MDU High Rise</lable>
            <input type='checkbox' id='buldType' name='sfh' />
          </form>
        </div>
        <Hero />
      </section>
      <Footer />
    </>
  );
}

export default Main;

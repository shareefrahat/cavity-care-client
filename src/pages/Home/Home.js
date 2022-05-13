import React from "react";
import Appointment from "../../components/Appointment/Appointment";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import Info from "../../components/Info/Info";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <Banner></Banner>
        </section>
        <section className="max-w-screen-xl mx-auto">
          <Info></Info>
        </section>
        <section className="max-w-screen-xl mx-auto">
          <Service></Service>
        </section>
        <section className="max-w-screen-xl mx-auto">
          <Feature></Feature>
        </section>
        <section>
          <Appointment></Appointment>
        </section>
        <section className="max-w-screen-xl mx-auto">
          <Testimonial></Testimonial>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default Home;

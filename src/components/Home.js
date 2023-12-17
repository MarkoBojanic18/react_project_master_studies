import React from "react";
import './HomeStyle.css'
import Navbar from "./Navbar";
import Hero from './Hero'
import Pricing from "./Pricing";
import Favor from "./Favor";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Contact from "./Contact";
import Discount from "./Discount";
import Footer from "./Footer";

 

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Discount />
            <Favor />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer />

            
        </div>
    )
}

export default Home
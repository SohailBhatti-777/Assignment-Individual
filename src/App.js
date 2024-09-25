import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import FeatureCourses from "./components/FeatureCourses";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import SponcerSection from "./components/SponcerSection";
import FooterSection from "./components/FooterSection";
// import "./App.css";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <HeroSection />
      <FeatureSection />
      <FeatureCourses />
      <AboutSection />
      <TestimonialSection />
      <SponcerSection />
      <FooterSection />
    </div>
  );
}

export default App;

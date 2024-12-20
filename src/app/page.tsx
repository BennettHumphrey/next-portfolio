import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Expertise from "./Components/Expertise/Expertise";
import Portfolio from "./Components/Portfolio/Portfolio";
import { Suspense } from "react";
import Footer from "./Components/Footer/Footer";
import Performance from "./Components/Performance/Performance";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Expertise />
      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </Suspense>
      <Performance  />
      <Footer  />
    </div>
  );
}

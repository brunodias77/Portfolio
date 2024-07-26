import Container from "@/components/container";
import Image from "next/image";
import About from "../components/About"
import Welcome from "@/components/Welcome";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Works />
      <Projects />
      <Contact />
    </>
  );
}

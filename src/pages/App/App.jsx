// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import Projects from "../Projects/Projects";
import NavBar from "../../components/NavBar/NavBar";

register();

export default function App() {
  return (
    <>
      <NavBar />
      <Projects />
    </>
  );
}

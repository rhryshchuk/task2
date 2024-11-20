// import styles from "./page.module.css";
import Sections from "../app/components/sections/Sections"
import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header"
import Winder from "./components/winder/Winder"
import Footer from "./components/footer/Footer"


export default function Home() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Sections />
      <Winder />
      <Footer/>
    </div>
  );
}

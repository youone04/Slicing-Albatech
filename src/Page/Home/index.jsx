import { Container } from "react-bootstrap";
import FixedNavbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import HomeAfterNavbar from "../../../Components/Home/HomeAfterNavbar";
import CompletPackage from "../../../Components/Home/CompletPackage";
import ListFramework from "../../../Components/Home/ListFramework";
import Progres from "../../../Components/Home/Progres";
import Portopolio from "../../../Components/Home/Portopolio";
import Testimonials from "../../../Components/Home/Testimonials";
import Carrousel from "../../../Components/Home/Carousel";
import Consultation from "../../../Components/Home/Consultation";
import BurgerMenu from "../../../Components/Navbar/BurgerMenu";

const Home = () => {
    return(
        <>
        <FixedNavbar/>
        <Container>
        <HomeAfterNavbar/>
        <CompletPackage/>
        <ListFramework/>
        </Container>
        <Progres/>
        <Container>
        <Portopolio/>
        </Container>
        <Testimonials/>
        <Carrousel/>
        <Container>
        <Consultation/>
        <Footer/>
        </Container>

        </>
    )
}

export default Home;
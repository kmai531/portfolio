import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HorizontalCard from "./Components/ProjectCard";
import ProjectsCards from "./Components/ProjectCard";
import Experience from "./Components/Experience";

function App() {
    return (
        // <BrowserRouter>
        <div className="App font-montserrat min-w-sm">
            <Navbar />
            <div className="pt-20" data-theme="cupcake" id="home"></div>

            <section className="mb-0">
                <Hero />
            </section>

            <section id="aboutMe">
                <AboutMe />
            </section>
            <section id="exp">
                <Experience />
            </section>
            <section className="mt-20" id="projects">
                <ProjectsCards />
                {/* <Projects/> */}
            </section>

            <footer>
                <Footer />
            </footer>
            <Contact />
        </div>
        // </BrowserRouter>
    );
}

export default App;

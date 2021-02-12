import MainNavbar from "./navbar";
import MainHome from "./home-components/mainHome";
import About from "./about";
import ViewportProvider from "../viewPort/viewPort";

const Home = () => {
    return (
        <ViewportProvider>
            <MainNavbar />
            <MainHome />
            <About />
      </ViewportProvider>
    )
}

export default Home; 
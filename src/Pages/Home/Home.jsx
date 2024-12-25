import AmrutamHomeApp from "../../Components/HomeContent/AmrutamHomeApp/AmrutamHomeApp";
import Banner from "../../Components/HomeContent/Banner/Banner";
import Discover from "../../Components/HomeContent/Discover/Discover";

const Home = () => {
    return (
        <div>
            <Banner />
           <div className="md:w-10/12 mx-auto">
                <Discover />
            </div>
            <AmrutamHomeApp/>
        </div>
    );
};

export default Home;
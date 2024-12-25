import AmrutamHomeApp from "../../Components/HomeContent/AmrutamHomeApp/AmrutamHomeApp";
import Approach from "../../Components/HomeContent/Approach/Approach";
import Banner from "../../Components/HomeContent/Banner/Banner";
import Customers from "../../Components/HomeContent/Customers/Customers";
import Discover from "../../Components/HomeContent/Discover/Discover";
import MeetExpert from "../../Components/HomeContent/MeetExpert/MeetExpert";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="md:w-10/12 mx-auto">
                <Discover />
                <Approach />
                <MeetExpert />
            </div>
            <Customers />
            <AmrutamHomeApp />
        </div>
    );
};

export default Home;
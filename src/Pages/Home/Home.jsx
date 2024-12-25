import AmrutamHomeApp from "../../Components/HomeContent/AmrutamHomeApp/AmrutamHomeApp";
import Approach from "../../Components/HomeContent/Approach/Approach";
import Banner from "../../Components/HomeContent/Banner/Banner";
import Consultations from "../../Components/HomeContent/Consultations/Consultations";
import Customers from "../../Components/HomeContent/Customers/Customers";
import Discover from "../../Components/HomeContent/Discover/Discover";
import MeetExpert from "../../Components/HomeContent/MeetExpert/MeetExpert";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="md:w-10/12 mx-auto">
                <Discover />
            </div>
            <Consultations />
            <div className="md:w-10/12 mx-auto">
                <Approach />
            </div>
            <Customers />
            <div className="md:w-10/12 mx-auto">
                <MeetExpert />
            </div>
            <AmrutamHomeApp />
        </div>
    );
};

export default Home;
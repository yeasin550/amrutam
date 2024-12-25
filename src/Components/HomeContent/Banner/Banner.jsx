// import banner from "../../../assets/banner.png";
import convenient from "../../../assets/convenient.png";
import safe from "../../../assets/safe.png";
import experienced from "../../../assets/experienced.png";
import personalized from "../../../assets/personalized.png";

const Banner = () => {
    return (
        <div
            // className="bg-cover bg-center"
            // style={{
            //     backgroundImage: `url(${banner})`, // Use the imported image
            //     height: '60vh',
            // }}
        >
           
           

            <section className="z-10">
                <div className="flex flex-col-reverse md:flex-row items-center mx-auto">
                    <div className="space-y-4 md:w-2/3 mx-left md:py-20 my-10 md:px-24 px-5">
                        <p className="text-xl">Namaste, Welcome to Amrutam </p>
                        <h1 className="md:text-4xl text-2xl font-bold">
                            Step into Holistic Healing with Ayurveda Book Consultation with certified Experts.
                        </h1>
                        <p className="text-xl">
                            Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.
                        </p>
                        <button className="bg-green-700 text-white text-lg px-8 py-2 rounded-md hover:bg-green-800 transition-colors">
                            Book an Appointment
                        </button>
                    </div>
                    <div className="w-full md:w-[500px] py-8">
                        <img src="https://www.svgrepo.com/show/493509/person-who-invests.svg" className="g-image"/>
                    </div>
                </div>
            </section>

            <div className="bg-[#FFF7E2] md:flex items-center justify-between py-5 px-14">
                <div className="flex items-center gap-2">
                    <img src={convenient} alt="" />
                    <p className="font-semibold">convenient online &
                        In-clinic consultations</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={safe} alt="" />
                    <p className="font-semibold">Safe and effective treatment</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={experienced} alt="" />
                    <p className="font-semibold">Experienced Ayurvedic Practitioners</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={personalized} alt="" />
                    <p className="font-semibold">Personalized Treatment
                        Plans & Guidance</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

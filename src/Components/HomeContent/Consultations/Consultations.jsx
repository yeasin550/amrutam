
import top1 from "../../../assets/top1.jpeg"
import bottom1 from "../../../assets/bottom1.png"
import bottom2 from "../../../assets/bottom2.jpeg"

const Consultations = () => {

    return (
        <div className="bg-[#fdf6e9] py-8 ">
            <div className="md:w-10/12 mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
                    What sets Ayurvedic consultations apart?
                </h1>


                {/* Top Row */}
                <div className="md:flex items-center justify-between gap-5">

                    <div className="bg-white rounded-3xl p-6 shadow-md border-t-4 border-t-green-800 h-64 md:w-2/4">
                        <div className="text-center pt-12">
                            <h1 className="font-sanskrit text-xl text-green-800 mb-4 whitespace-pre-line">
                                स्वस्थस्य स्वास्थ्य रक्षणं\nआतुरस्य विकार प्रशमनं ।
                            </h1>
                            <p className="text-sm text-gray-600 italic">
                                [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <img src={top1} alt="image" className="object-cover h-64 w-full rounded-3xl" />
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <div className="text-left mt-10 ">
                            <h1 className="font-sanskrit text-xl text-green-800 mb-4 whitespace-pre-line">
                                Precise Diagnosis
                            </h1>
                            <p className="text-sm text-gray-600 italic">
                                Ayurvedas core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:flex items-center justify-between gap-5 mt-10">

                    <div className="bg-white rounded-3xl p-6 shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <div className="text-center pt-12">
                            <h1 className="font-sanskrit text-xl text-green-800 mb-4 whitespace-pre-line">
                                Zero side-effects
                            </h1>
                            <p className="text-sm text-gray-600 italic">
                                Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <img src={bottom1} alt="image" className="object-cover h-64 w-full rounded-3xl" />
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <div className="text-left mt-10 ">
                            <h1 className="font-sanskrit text-xl text-green-800 mb-4 whitespace-pre-line">
                                Individual Treatment

                            </h1>
                            <p className="text-sm text-gray-600 italic">
                                all Treatments are personalized based on a persons unique constitution and health concerns.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-md border-t-4 border-t-green-800 h-64 md:w-1/4">
                        <img src={bottom2} alt="image" className="object-cover h-64 w-full rounded-3xl" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Consultations;
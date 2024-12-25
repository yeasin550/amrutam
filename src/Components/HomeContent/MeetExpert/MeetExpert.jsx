import {FaArrowRight, FaGraduationCap, FaLink, FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from "react-icons/fa";
import cardProfile from "../../../assets/group.png"

const MeetExpert = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-12 text-green-800 mb-5">Meet our Ayurveda experts </h1>
            <div className="md:flex items-center justify-between md:px-0 px-5">
                <FaLongArrowAltLeft className="py-3 text-6xl border border-black rounded-full" />
                <div className="bg-[#fdf6e9] rounded-[30px] border border-gray-400 md:w-[290px] mt-12">
                    <div className="flex flex-col items-center my-8 m-6 space-y-2">
                        <div className="relative">
                            <img
                                src={cardProfile}
                                alt="Doctor profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <div className="absolute -bottom-3 right-8 bg-black text-white text-sm px-2 py-0.5 rounded-full flex items-center">
                                <span>4.5</span>
                                <FaStar className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mt-3">Dr. Prerna Narang</h2>
                        <p>Ayurveda Practitioner(BAMS, MD)</p>
                        <p className="flex items-center gap-2"> <FaGraduationCap className="text-2xl" />
                            25 years of experience</p>
                        <h1 className="flex items-center justify-center gap-2 w-44 mx-auto py-1 border bg-gray-300 rounded-full mb-3  text-center">
                            <FaLink /> Skin Specialist
                        </h1>
                    </div>
                    <div className="py-3 px-5 bg-green-700 text-white hover:bg-green-800 rounded-b-[30px] border-t border-t-gray-500 border-b border-b-gray-500 text-center">
                        <h2 className="text-lg font-bold">Book A Session</h2>
                    </div>

                </div>

                <div className="bg-[#fdf6e9] rounded-[30px] border border-gray-400 md:w-[290px] mt-12">
                    <div className="flex flex-col items-center my-8 m-6 space-y-2">
                        <div className="relative">
                            <img
                                src={cardProfile}
                                alt="Doctor profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <div className="absolute -bottom-3 right-8 bg-black text-white text-sm px-2 py-0.5 rounded-full flex items-center">
                                <span>4.5</span>
                                <FaStar className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mt-3">Dr. Prerna Narang</h2>
                        <p>Ayurveda Practitioner(BAMS, MD)</p>
                        <p className="flex items-center gap-2"> <FaGraduationCap className="text-2xl" />
                            25 years of experience</p>
                        <h1 className="flex items-center justify-center gap-2 w-44 mx-auto py-1 border bg-gray-300 rounded-full mb-3  text-center">
                            <FaLink /> Skin Specialist
                        </h1>
                    </div>
                    <div className="py-3 px-5 bg-green-700 text-white hover:bg-green-800 rounded-b-[30px] border-t border-t-gray-500 border-b border-b-gray-500 text-center">
                        <h2 className="text-lg font-bold">Book A Session</h2>
                    </div>

                </div>

                <div className="bg-[#fdf6e9] rounded-[30px] border border-gray-400 md:w-[290px] mt-12">
                    <div className="flex flex-col items-center my-8 m-6 space-y-2">
                        <div className="relative">
                            <img
                                src={cardProfile}
                                alt="Doctor profile"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                            <div className="absolute -bottom-3 right-8 bg-black text-white text-sm px-2 py-0.5 rounded-full flex items-center">
                                <span>4.5</span>
                                <FaStar className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mt-3">Dr. Prerna Narang</h2>
                        <p>Ayurveda Practitioner(BAMS, MD)</p>
                        <p className="flex items-center gap-2"> <FaGraduationCap className="text-2xl" />
                            25 years of experience</p>
                        <h1 className="flex items-center justify-center gap-2 w-44 mx-auto py-1 border bg-gray-300 rounded-full mb-3  text-center">
                            <FaLink /> Skin Specialist
                        </h1>
                    </div>
                    <div className="py-3 px-5 bg-green-700 text-white hover:bg-green-800 rounded-b-[30px] border-t border-t-gray-500 border-b border-b-gray-500 text-center">
                        <h2 className="text-lg font-bold">Book A Session</h2>
                    </div>

                </div>
                <FaLongArrowAltRight className="py-3 text-6xl border border-black rounded-full"/>
            </div>
            <div className="w-56 mx-auto my-10 text-lg font-bold">

            <button className="py-3 px-5 rounded-md bg-gray-200 flex items-center gap-3">Find more expert <FaArrowRight/></button>
            </div>
        </div>
    );
};

export default MeetExpert;
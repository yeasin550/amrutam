/* eslint-disable react/prop-types */
import { FaAngleDown, FaGraduationCap, FaLink, FaSearch, FaStar } from "react-icons/fa";
import { FaMapLocation, FaMessage } from "react-icons/fa6";
import cardProfile from "../../assets/group.png"
const FindDoctors = () => {


    return (
        <div>
            <div className="w-full bg-gray-100">
                {/* Green Background with Circles */}
                <div className="relative max-w-6xl mx-auto px-4 py-8">
                    {/* Large Header Text */}
                    <h1 className="text-center text-3xl font-bold mb-6">
                        Find Expert Doctors For An In-Clinic Session Here
                    </h1>

                    {/* Search Bar Container */}
                    <div className="flex gap-4 w-2/3 mx-auto mb-8">
                        {/* Location Dropdown */}
                        <div className="relative flex-shrink-0 w-54">
                            <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white rounded-lg border border-gray-200 hover:border-gray-300">
                                <FaMapLocation className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-600">Select Location</span>
                                <FaAngleDown className="w-4 h-4 ml-auto text-gray-400" />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="eg. Doctor, specialisation, clinic name"
                                className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5">
                                <FaSearch className="w-5 h-5 text-pink-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Filter Buttons */}
            <div className="md:flex flex-wrap items-center justify-center gap-6 mt-6">
                {/* Expertise Filter */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Expertise</span>
                    <FaAngleDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Gender Filter */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Gender</span>
                    <FaAngleDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Fees Filter */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Fees</span>
                    <FaAngleDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Languages Filter */}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Languages</span>
                    <FaAngleDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* All Filters Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-green-200 rounded-lg hover:bg-green-100 border border-green-200">
                    <span className="text-green-700">All filters</span>
                    <FaAngleDown className="w-4 h-4 text-green-500" />
                </button>
            </div>

            <div className="md:w-10/12 mx-auto md:flex items-center justify-center gap-5 ">

                <div className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 md:w-[370px] mt-12">
                    <div className="flex flex-col items-center mb-4">
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
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                            <FaLink className="w-4 h-4 mr-2" />
                            <span>Male-Female Infertility</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaGraduationCap className="w-4 h-4 mr-2" />
                            <span>7 years of Experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaMessage className="w-4 h-4 mr-2" />
                            <span>Speaks: English, Hindi, Marathi</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-4">
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Video Consultation</div>
                            <div className="text-green-700">₹800</div>
                        </div>
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Chat Consultation</div>
                            <div className="text-green-700">Free</div>
                        </div>
                    </div>

                    <button className="w-full py-2 border border-gray-400 rounded-lg mb-3 hover:bg-gray-50">
                        View Profile
                    </button>
                    <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                        Book a consultation
                    </button>
                </div>

                <div className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 md:w-[370px] mt-12">
                    <div className="flex flex-col items-center mb-4">
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
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                            <FaLink className="w-4 h-4 mr-2" />
                            <span>Male-Female Infertility</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaGraduationCap className="w-4 h-4 mr-2" />
                            <span>7 years of Experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaMessage className="w-4 h-4 mr-2" />
                            <span>Speaks: English, Hindi, Marathi</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-4">
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Video Consultation</div>
                            <div className="text-green-700">₹800</div>
                        </div>
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Chat Consultation</div>
                            <div className="text-green-700">Free</div>
                        </div>
                    </div>

                    <button className="w-full py-2 border border-gray-400 rounded-lg mb-3 hover:bg-gray-50">
                        View Profile
                    </button>
                    <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                        Book a consultation
                    </button>
                </div>

                <div className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 md:w-[370px] mt-12">
                    <div className="flex flex-col items-center mb-4">
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
                    </div>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                            <FaLink className="w-4 h-4 mr-2" />
                            <span>Male-Female Infertility</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaGraduationCap className="w-4 h-4 mr-2" />
                            <span>7 years of Experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaMessage className="w-4 h-4 mr-2" />
                            <span>Speaks: English, Hindi, Marathi</span>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-4">
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Video Consultation</div>
                            <div className="text-green-700">₹800</div>
                        </div>
                        <div className="flex-1 text-center border border-gray-400 rounded-xl py-2">
                            <div className="font-medium">Chat Consultation</div>
                            <div className="text-green-700">Free</div>
                        </div>
                    </div>

                    <button className="w-full py-2 border border-gray-400 rounded-lg mb-3 hover:bg-gray-50">
                        View Profile
                    </button>
                    <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
                        Book a consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindDoctors;
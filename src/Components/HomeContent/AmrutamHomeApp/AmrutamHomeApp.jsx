import mobile from '../../../assets/mobile.png'
import play from '../../../assets/playstore.png'
import app from '../../../assets/appstore.png'

const AmrutamHomeApp = () => {
    return (
        <div className="bg-[#fdf6e9] p-8 md:px-16">
            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
                            Amrutam Home App
                        </h1>

                        <p className="text-lg">
                            The Amrutam Home App is your one-stop app for all things Ayurveda! Apart
                            from mimicking the significant characteristics of our website, this app offers a
                            wide range of additional features.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800">
                                Get The App Now
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {/* Google Play Store Button */}
                                <a href="#" className="inline-block">
                                    <img
                                        src={play}
                                        alt="Get it on Google Play"
                                        className="h-14 object-contain"
                                    />
                                </a>

                                {/* App Store Button */}
                                <a href="#" className="inline-block">
                                    <img
                                        src={app}
                                        alt="Download on the App Store"
                                        className="h-14 object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Phone Image */}
                    <div className="0">
                        <div className="0 transform rotate-0">
                            <img
                                src={mobile}
                                alt="Amrutam App Interface"
                                className="w-[600px] object-cover mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmrutamHomeApp;
import design from "../../../assets/design-bg.png";
import discover from "../../../assets/discover.png";

const Discover = () => {
    const features = [
        {
            title: "Personalized Wellness",
            description: "Get treatments made just for you based on your individual doshas (body type)",
            icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            position: "left"
        },
        {
            title: "Focus on prevention",
            description: "Stop problems even before they start.",
            icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            position: "left"
        },
        {
            title: "Mind-Body Connection",
            description: "Keep your mind and body in sync for a happy life.",
            icon: (
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            position: "left"
        },
        {
            title: "Holistic Healing",
            description: "Fix the root problem for long-lasting health.",
            icon: (
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            position: "right"
        },
        {
            title: "Natural Remedies",
            description: "Using herbs and natural therapies for healing.",
            icon: (
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
            position: "right"
        },
        {
            title: "Boosting immunity",
            description: "Stay strong and healthy for life, not just for today.",
            icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            position: "right"
        }
    ];

    return (
        <div className="md:max-w-6xl mx-auto px-4 py-12 mt-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-green-800 mb-4">Discover Ayurveda Magic With Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality.
                    It is like a journey to better health using ancient wisdom, a totally effective approach for a better life.
                </p>
            </div>

            <div className="relative pt-12">
                {/* Mandala background pattern */}
                <div className="absolute inset-0 z-0 md:ml-80 md:mt-0 mt-[430px]">
                    <img src={design} alt="Mandala background" className="md:w-[450px] md:h-[450px] object-cover" />
                </div>

                {/* Features */}
                <div className="md:flex justify-between relative z-10">
                    <div className="space-y-12 md:w-1/2 pr-4">
                        {features
                            .filter(feature => feature.position === "left")
                            .map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 text-right">
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md">
                                        {feature.icon}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Central image */}
                    <div className="relative flex justify-center md:-mt-32 md:mr-5">
                        <img
                            src={discover}
                            alt="Woman meditating"
                            className="rounded-full md:w-[650px] md:h-[650px] object-cover"
                        />
                    </div>

                    <div className="space-y-12 md:w-1/2 pl-4">
                        {features
                            .filter(feature => feature.position === "right")
                            .map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 text-left">
                                    <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;

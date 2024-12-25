import { FaStar } from "react-icons/fa";

const Customers = () => {
    return (
        <div className="py-24 bg-[#FFF7E2] px-24">
            <h1 className="text-4xl font-bold text-center text-green-800 mb-12">STORIES FROM OUR VALUED CUSTOMERS!</h1>
            <div className="flex items-center justify-between gap-6">
                <div className="rounded-2xl border border-gray-500 w-96 shadow-lg">
                    <div className="py-3 px-5 bg-gray-100 rounded-t-2xl border-t border-t-gray-500 border-b border-b-gray-500">
                        <h2 className="text-lg font-bold">Consulted For Skin</h2>
                    </div>
                    <div className="flex items-center justify-between bg-white p-5">
                        <div className="flex gap-2">
                            <h1 className="bg-black rounded-full p-7"></h1>
                            <div>
                                <h1 className="font-bold">Sophie Moore </h1>
                                <p>Chennai</p>
                            </div>
                        </div>
                        <p>17/02/24</p>
                    </div>
                    <div className="px-5 space-y-3 mb-5">
                        <h1 className="flex gap-2 text-yellow-400"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></h1>
                        <h1 className="text-xl font-bold">“One of a kind service”</h1>
                        <p>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-500 w-96 shadow-lg">
                    <div className="py-3 px-5 bg-[#ECFEE7] rounded-t-2xl border-t border-t-gray-500 border-b border-b-gray-500">
                        <h2 className="text-lg font-bold">Consulted For Skin</h2>
                    </div>
                    <div className="flex items-center justify-between bg-white p-5">
                        <div className="flex gap-2">
                            <h1 className="bg-black rounded-full p-7"></h1>
                            <div>
                                <h1 className="font-bold">Sophie Moore </h1>
                                <p>Chennai</p>
                            </div>
                        </div>
                        <p>17/02/24</p>
                    </div>
                    <div className="px-5 space-y-3 mb-5">
                        <h1 className="flex gap-2 text-yellow-400"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></h1>
                        <h1 className="text-xl font-bold">“One of a kind service”</h1>
                        <p>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
                <div className="rounded-2xl border border-gray-500 w-96 shadow-lg">
                    <div className="py-3 px-5 bg-[#ECFEE7] rounded-t-2xl border-t border-t-gray-500 border-b border-b-gray-500">
                        <h2 className="text-lg font-bold">Consulted For Skin</h2>
                    </div>
                    <div className="flex items-center justify-between bg-white p-5">
                        <div className="flex gap-2">
                            <h1 className="bg-black rounded-full p-7"></h1>
                            <div>
                                <h1 className="font-bold">Sophie Moore </h1>
                                <p>Chennai</p>
                            </div>
                        </div>
                        <p>17/02/24</p>
                    </div>
                    <div className="px-5 space-y-3 mb-5">
                        <h1 className="flex gap-2 text-yellow-400"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></h1>
                        <h1 className="text-xl font-bold">“One of a kind service”</h1>
                        <p>Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
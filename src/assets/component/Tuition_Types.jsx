import home from "../image/TuitionTypes/hometutor.png";

function Tuition_Types() {
    const Data = [
        {
            id: 1,
            image: home,
            Header: "Home Tutoring",
            Bio: "Looking for one-to-one classes?",
            description:
                "It’s a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need",
        },
        {
            id: 2,
            image: home,
            Header: "Home Tutoring",
            Bio: "English",
            description: "dfsdfsdfd",
        },
        {
            id: 3,
            image: home,
            Header: "Home Tutoring",
            Bio: "English",
            description: "dfsdfsdfd",
        },
    ];

    return (
        <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-60 bg-gray-50">

            {/* Header */}
            <div className="text-center space-y-2 mb-10 md:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    SEARCH TUTORING JOBS
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-500">
                    Find your tuition jobs in your area
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {Data.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-50 hover:border hover:border-sm hover:border-blue-500  hover:bg-white p-6 rounded-xl shadow-[6px_6px_15px_rgba(0,0,0,0.2)] hover:shadow-[-6px_6px_15px_rgba(0,0,0,0.2)] transition flex flex-col items-center text-center hover:translate-y-2 duration-300"
                    >
                        <img
                            src={item.image}
                            alt="icon"
                            className="w-full h-[350px] object-contain mb-3"
                        />

                        <h2 className="text-2xl font-bold text-gray-800">
                            {item.Header}
                        </h2>

                        <p className="text-sm text-gray-400">
                            {item.Bio}
                        </p>

                        <p className="text-sm text-gray-500 mt-2 px-4 font-bold">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tuition_Types;
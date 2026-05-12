import icon from "../icon/pin.png";
import cover from "../image/counter.png";

function Counter() {

    const subjects = [
        { image: icon, number: "3322", title: "English" },
        { image: icon, number: "1200", title: "Students" },
        { image: icon, number: "850", title: "Teachers" },
        { image: icon, number: "45", title: "Courses" }
    ];

    return (

        <div
            className="
                w-full
                py-16
                flex
                justify-center
                items-center
                bg-cover
                bg-center
                relative
            "
            style={{
                backgroundImage: `url(${cover})`
            }}
        >

            {/* 🔥 DARK BLUR OVERLAY */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* CONTENT */}
            <div className="
                relative
                w-[80%]
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
            ">

                {subjects.map((item, index) => (

                    <div
                        key={index}
                        className="
                            bg-white/10
                            backdrop-blur-lg
                            border
                            border-white/20
                            rounded-3xl
                            p-6
                            flex
                            items-center
                            gap-4
                            shadow-lg
                            hover:-translate-y-2
                            hover:shadow-2xl
                            transition-all
                            duration-300
                        "
                    >

                        {/* ICON */}
                        <div className="
                            border 
                            border-gray-100 p-4
                            rounded-2xl
                            shadow-md
                        ">
                            <img
                                src={item.image}
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>

                        {/* TEXT */}
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                {item.number}
                                <span className="px-1">+</span>
                            </h1>

                            <p className="text-white/80 text-sm">
                                {item.title}
                            </p>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Counter;
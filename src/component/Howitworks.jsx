

const Howitworks = () => {
    return (
        <div className="max-w-7xl w-full mx-auto md:my-20 px-4 sm:px-6 lg:px-8">
            <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                        How It Works
                    </h2>
                    <ul className="steps">
                        <li className="step step-primary text-sm sm:text-base">
                            <span className="font-semibold">Donate</span>: Bring your winter clothing and essentials to our collection points.
                        </li>
                        <li className="step step-primary text-sm sm:text-base">
                            <span className="font-semibold">Collection Points</span>: Visit any of our designated locations across the city. Check our website for the nearest point.
                        </li>
                        <li className="step step-primary text-sm sm:text-base">
                            <span className="font-semibold">Supported Divisions</span>: We support donations for children, adults, and seniors in need.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Howitworks;
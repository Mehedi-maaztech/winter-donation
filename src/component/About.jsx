
const About = () => {
    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row grid-cols-12 gap-4 max-w-7xl mx-auto grid">
                    <div className="col-span-4 flex flex-col items-center justify-center">
                        <div className=" p-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '32px',}}>
                            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                                    alt="Winter Donation"
                                    className="w-48 h-48 object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Winter Donation"
                                    className="w-48 h-48 object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
                                    alt="Winter Donation"
                                    className="w-48 h-48 object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
                                    alt="Winter Donation"
                                    className="w-48 h-48 object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center">
                        <h1 className="text-5xl font-bold">About us!</h1>
                        <p className="py-6 text-lg">
                            <strong>About Winter Warmth Acres</strong><br />
                            At Winter Warmth Acres, our mission is simple: keep every family warm through the coldest months. We believe no one should face winter without proper clothing. That’s why we collect, clean, and distribute gently used and new winter wear—from coats and scarves to blankets and boots—directly to those who need them most.
                        </p>
                        <div className="py-4">
                            <h2 className="text-2xl font-semibold mb-2">How You Can Contribute</h2>
                            <ul className="list-inside list-none space-y-2">
                                <li>
                                    <strong>Donate Clothes</strong> Clear out your closet and give your pre-loved winter clothing a second life. We accept jackets, sweaters, hats, gloves, and warm blankets in good condition.
                                </li>
                                <li>
                                    <strong>Monetary Support</strong> Prefer to give financially? Your donations help us purchase new items, cover cleaning costs, and support local distribution efforts.
                                </li>
                                <li>
                                    <strong>Volunteer With Us</strong> Join our team of caring volunteers. Help us sort donations, pack parcels, and deliver warmth to families in need.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
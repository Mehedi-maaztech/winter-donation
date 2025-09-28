import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Campaign from "../component/Campaign";

const Donation = () => {

    const campaigns = useLoaderData();
    //console.log(campaigns);
    return (
        <div>
            <header className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <Header />
            </header>
            <section>
                <div
                    className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center px-4"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?_gl=1*19rujsn*_ga*MTgzNDYwMTUyMy4xNzU4OTgzNzcw*_ga_8JE65Q40S6*czE3NTg5ODM3NjkkbzEkZzEkdDE3NTg5ODM3OTQkajM1JGwwJGgw')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
                        Winter Donation Campaign
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white glass bg-opacity-50 rounded px-4 sm:px-6 py-3 sm:py-4 max-w-md sm:max-w-xl text-center">
                        Join us in making a difference this winter! Our campaign provides warm clothing, blankets, and essential supplies to those in need. Every donation helps bring comfort and hope to vulnerable communities facing harsh weather. Together, we can spread warmth and kindness—thank you for your support!
                    </p>
                </div>
                <div className="max-w-7xl mx-auto my-8 sm:my-10 px-4 sm:px-6 lg:px-8 w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Campaigns</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 sm:mt-6">
                        {
                            campaigns.map(campaign => (
                                <Campaign key={campaign.id} campaign={campaign} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <footer className="w-full px-4 sm:px-6 lg:px-8">
                <Footer />
            </footer>
        </div>
    );
};

export default Donation;
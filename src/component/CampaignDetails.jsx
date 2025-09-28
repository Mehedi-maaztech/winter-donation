
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const CampaignDetails = () => {
    const { id } = useParams();
    const itemdata = useLoaderData();

    const details = itemdata.find(campaign => campaign.id === parseInt(id.slice(1)));
    console.log(details);
    const { title, image, description, status, contactInfo, division} = details;

    return (
        <>
            <header>
                <Header />
            </header>
            <section>
                <div className="max-w-3xl mx-auto my-10">
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-64 object-cover rounded-t-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold mb-2">
                                {title}
                            </h2>
                            <p className="mb-4 text-base text-gray-700">
                                {description}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                Status: {status}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                Division: {division}
                            </p>
                            <p className="text-sm text-gray-500 mb-2">
                                Contact: {contactInfo}
                            </p>
                            <div className="card-actions">
                                <Link to="/donation" className="btn btn-primary bg-pink-500 text-white border-none hover:bg-pink-600">
                                    All news in this category
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default CampaignDetails;
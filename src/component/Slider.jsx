import { Link } from "react-router-dom";
import banner from "../assets/istockphoto-1438297783-612x612.jpg"
const Slider = () => {
    return (
        <div className="hero bg-base-200 min-h-[90vh]">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Winter Clothing Donation!</h1>
                    <p className="py-6">
                        Join us in making a difference this winter! Your donation will help provide warm clothing, blankets, and essential supplies to those in need. Together, we can bring comfort and hope to our community during the coldest months.
                    </p>
                    <Link to="/donation" className="btn btn-primary">Find more about us</Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;
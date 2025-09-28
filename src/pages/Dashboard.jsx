import Footer from "../component/Footer";
import Header from "../component/Header";


import { Link } from "react-router-dom";
import userImg from "../assets/user.png";

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: userImg,
};

const Dashboard = () => {
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Header />
            </header>
            <section className="min-h-[80vh] flex items-center justify-center">
                <div className="w-full max-w-md mx-auto card bg-base-100 shadow-xl p-8 flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-4 text-center">
                        Welcome, <span className="text-primary">{user.name}</span>!
                    </h2>
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.image} alt="User" />
                        </div>
                    </div>
                    <div className="w-full space-y-2 mb-6">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Name:</span>
                            <span>{user.name}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Email:</span>
                            <span>{user.email}</span>
                        </div>
                    </div>
                    <Link to="/update-profile" className="btn btn-primary w-full">
                        Update Profile
                    </Link>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Dashboard;
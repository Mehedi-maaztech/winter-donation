import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { signIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
                e.target.reset();
                navigate("/");
            }
        )
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form className="w-lg mx-auto bg-white p-8 rounded shadow-xl space-y-6" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <div className="relative">
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full pr-10"
                            required
                            id="password"
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-500"
                            onClick={() => {
                                const input = document.getElementById('password');
                                input.type = input.type === 'password' ? 'text' : 'password';
                            }}
                            tabIndex={-1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9S3 17 3 12s4.03-9 9-9 9 4.03 9 9z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-full">Login</button>

                <p className="text-center">Haven't Regiester yet ? <Link to="/register" className="text-red-900 font-bold">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
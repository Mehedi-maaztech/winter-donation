
const ErrorPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <button className="btn btn-base-300 my-10" onClick={() => window.location.href = '/'}>Go to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
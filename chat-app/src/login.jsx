import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });

      // Example: store token
      localStorage.setItem("token", response.data.token);

      navigate("/home"); // redirect after login
    } catch (err) {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-cyan-300 flex justify-center items-center w-full">
      <form onSubmit={handleLogin}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>

            {error && <h3 style={{ color: "red" }}>{error}</h3>}

            <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <input
                type="text"
                className="pl-2 outline-none border-none w-full"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>

              <input
                type="password"
                className="pl-2 outline-none border-none w-full"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Login"
              className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
              <span className="ml-2">
                You don't have an account?
                <Link to="/register" className="text-xs ml-2 text-blue-500 font-semibold">
                  Register here
                </Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";
import '../login.css';

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [data, setData] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!user.name || !user.email || !user.pass) {
      alert("Please fill in all fields.");
      return;
    }

    setData((prev) => [...prev, user]);
    setUser({ name: "", email: "", pass: "" });

    fetch('https://stockly-ws2t.onrender.com/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User registered successfully!");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Registration failed. Please try again.");
      });
  }

  return (
    <div className="auth-bg flex flex-col justify-center items-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 sm:p-8">
        <form onSubmit={submit} className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
            Create your account
          </h1>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={user.name}
              onChange={handleInput}
              placeholder="John Doe"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={user.email}
              onChange={handleInput}
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="pass" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="pass"
              name="pass"
              type="password"
              autoComplete="new-password"
              required
              value={user.pass}
              onChange={handleInput}
              placeholder="••••••••"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md transition duration-300 shadow-sm"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
import { useState } from "react";
import '../login.css';
const Login = ({ setIsLoggedIn }) => {

  
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  

  function handleInput(e) {
    const {name,value} = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    if(!user.email || !user.pass){
        return
    }
    fetch("https://stockly-ws2t.onrender.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
  .then((res) => res.json())
  .then((data) => {
    if (data.success) {
      alert("Login successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  })
  .catch((err) => console.error("Login error:", err));


  }


  

  return (
    <div className=" auth-bg flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
    <form onSubmit={submit} className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-900">Sign in to your account</h1>

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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
          placeholder="you@example.com"
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
          autoComplete="current-password"
          required
          value={user.pass}
          onChange={handleInput}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md transition duration-300 shadow-sm"
      >
        Login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;

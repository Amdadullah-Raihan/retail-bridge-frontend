// src/pages/Auth/Register.js
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { OctagonAlert } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
  const [error, setError] = useState("");

  const { name, email, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5005/auth/register",
        formData
      );
      if (res.statusCode === 200) {
        toast.success("Successfully registered");
      }
    } catch (error) {
      console.error(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const googleLogin = () => {
    window.open("/auth/google", "_self");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded-md shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h2>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Role
          </label>
          <select
            name="role"
            value={role}
            onChange={onChange}
            required
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="customer">Customer</option>
            <option value="shopkeeper">Shopkeeper</option>
          </select>
          {error && (
            <p className="flex items-center gap-2 pt-4 font-medium text-rose-500">
              <OctagonAlert size={18} />
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
        <button
          type="button"
          onClick={googleLogin}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Register;

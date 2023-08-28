import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import toast from "react-hot-toast";
import axios from 'axios'

function SignUp() {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      password: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email';
      valid = false;
    }

    if (formData.phone.trim() === '') {
      newErrors.phone = 'Phone is required';
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  const sendData = async()=>{
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register",formData );
      console.log(res.data)
      if (res && res.data.success) {
      toast.success(res.data && res.data.message);
        navigation("/login");
        setLoading(false)
      } else {
      toast.error(res.data.message);
      setLoading(false);
      }
    } catch (error) {
      setLoading(false);
  toast.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    sendData()
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="max-w-md bg-white p-8 shadow-md rounded-lg w-full">
      <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
          {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-blue-100 mr-2" />
                  Signing Up...
                </div>
              ) : (
                'Register'
              )}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default SignUp;

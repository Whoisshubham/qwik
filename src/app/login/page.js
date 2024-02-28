"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation'
import axios from "axios";
import { jwt } from 'jsonwebtoken';
import cookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
    const router = useRouter()
    const [errors, setErrors] = useState({});
    const [fromData, setFromData] = useState({
        email: "",
        password: ""
    });

    const validateForm = () => {
        const errors = {};
        if (!fromData.email.trim() || !fromData.email.includes("@")) {
            errors.email = "Valid email is required";
            setErrors(errors);
            return false;
        }
        if (!fromData.password.trim()) {
            errors.password = "Password is required";
            setErrors(errors);
            return false;
        }
        return true;
    }
    const handleInputChange = (e) => {
        setFromData({
            ...fromData,
            [e.target.id]: e.target.value,
        });
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const loginData = await axios.post("api/login", fromData);
                if (loginData.status == 200) {

                    cookie.set('token', loginData.data.token, { expires: 1, path: '/' });
                    toast.success(loginData.data.success, {
                        style: { backgroundColor: "#fff", color: '#257378' }
                    });

                    router.push('/admin/dashboard');
                } else {
                    toast.error("worng!", {
                        style: { backgroundColor: "#000", color: 'white', }
                    });
                }

            } catch (error) {
                console.log(error);
                console.error("Somthing Went Wrong!:", error);
            }
        }
    };



    return (
        <div>
            <Navbar />
            <div className='flex container mx-auto pt-5'>
                <div style={{ width: "50%" }}>
                    <img src="./singup.jpg" />
                </div>
                <div style={{ width: "50%" }} className='mt-5'>
                    <form className="max-w-sm mx-auto mt-5" method='POST' onSubmit={handleModalSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input onChange={handleInputChange} type="email" value={fromData.email} id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input onChange={handleInputChange} type="password" value={fromData.password} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password}</p>
                            )}
                        </div>
                        <button type="submit" onClick={handleModalSubmit} className="text-white bg-theme1 hover:bg-theme1h  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    )
}

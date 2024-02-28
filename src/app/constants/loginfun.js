
// 'use client'
// import { useState } from 'react';
// // const [errors, setErrors] = useState({});
// // const [formData, setFormData] = useState({
// //     email1: "",
// //     password1: "",
// // });



// // export  function validateForm(e) {
// //     e.preventDefault();
// //     setFormData({
// //         ...formData,
// //         [e.target.id]: e.target.value,
// //     });
// // };

// //  export  function validateForm(){
// //     const newErrors = {};

// //     if (!formData.email1.trim() || !formData.email1.includes("@")) {
// //         newErrors.email1 = "Valid email is required";
// //     }
// //     if (!formData.password1.trim()) {
// //         newErrors.password1 = "Password is required";
// //     }

// //     setErrors(newErrors);

// //     return Object.keys(newErrors).length === 0;
// // };

// // export const handleModalSubmit = async (e) => {
// //     e.preventDefault();

// //     const isValid = validateForm1();
// //     if (isValid) {
// //         try {
// //             const loginData = await axios.post("api/login", formData);
// //             if (loginData.status == 200) {
// //                 toast.success(loginData.data.success, {
// //                     style: { backgroundColor: "#fff", color: '#257378' }
// //                 });

// //             } else {
// //                 toast.error("worng!", {
// //                     style: { backgroundColor: "#000", color: 'white', }
// //                 });

// //             }

// //         } catch (error) {
// //             console.log(error);
// //             console.error("Somthing Went Wrong!:", error);
// //         }
// //     }
// // };
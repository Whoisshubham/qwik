'use client'

import React, { useEffect, useState } from 'react'
import DeleteButton from "./DeleteButton";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default function Table() {
    const [data, setData] = useState();
    const [isloading, setIsLoading] = useState(true);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/deleteAppoiment/${id}`, {
                method: 'DELETE',
            });
            const responseData = await response.json();
            if (responseData.success) {
                toast.success("Deleted Succesfully!", {
                    style: { backgroundColor: "#fff", color: '#257378' }
                });
                const dataAfterDelete = data.filter(item => item._id !== id);
                setData(dataAfterDelete);

            } else {
                toast.error(responseData.error);
            }
        } catch (e) {
            console.log(e);

        }
    };

    const getCases = async () => {
        const response = await axios.get('/api/getAppoiment');
        setIsLoading(false)
        if (!response.error) {
            const { data } = response;
            setData(response.data);
        } else {
            setError(response.error);
        }
    };
    useEffect(() => {
        getCases();
    }, []);
    return (

        <>
            {data && data.map((iteams, index) => {

                return (
                    <li key={index} className="py-3 sm:py-4" >
                        <div className="flex items-center">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-white">
                                    {index + 1}
                                </p>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-white">
                                    {iteams.name ?? null}
                                </p>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-white">
                                    {iteams.email ?? null}
                                </p>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-white">
                                    {iteams.phone ?? null}
                                </p>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-dark">
                                    {iteams.selectTestFor ?? null}

                                </p>
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className=" dark:text-white">
                                    {iteams.message ?? null}

                                </p>
                            </div>
                            <div className="inline-flex items-center text-base  dark:text-dark">
                                <p className="dark:text-white">
                                    <button onClick={() => handleDelete(iteams._id)}>Delete</button>
                                </p>
                            </div>
                        </div>
                    </li>)
            })}
        </>


    )
}

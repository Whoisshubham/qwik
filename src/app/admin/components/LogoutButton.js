'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Login from '../../login/page';
const cookies = require('js-cookie');


export default function LogoutButton(props) {
    const router = useRouter()
    const Logout = () => {
        cookies.set('token', '');
        router.push('/login');

    }
    return (

        <button onClick={Logout}>
            {props.text ?? null}
        </button>

    )
}


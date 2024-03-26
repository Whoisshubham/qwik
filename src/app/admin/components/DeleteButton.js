import { Router } from 'next/router';
import React from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Inbox from '../inbox/page';
export default function DeleteButton(props) {
  const router = useRouter();
  const deleteItem = async (props) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/deleteAppoiment/${props.id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.success) {
      toast.success("Deleted Succesfully!", {
        style: { backgroundColor: "#fff", color: '#257378' }
      });
      router.push(<Inbox/>);
    } else {
      toast.error(data.error);
    }
  };
  return (
    <button onClick={() => deleteItem(props)}>{props.text}</button>
  )
}


import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./showToast.css"

const showToast = (type)=>{
    const message = type === "stock-limit" ? "Stock limit has been reached" : "Please add a message"

    toast.info(message, {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}


function ShowToast() {
  return (
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        icon={false}
      />
  )
}


export { ShowToast, showToast}
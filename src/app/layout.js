import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Book Your Appointment - Quick Home Service Blood Tests</title>
        <meta
          name="description"
          content="Schedule your convenient at-home blood test today. Fast, reliable, and professional service."
        />
      </Head>

      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}

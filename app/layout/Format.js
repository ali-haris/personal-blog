import Head from 'next/head'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function Format({ children }) {
    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>

            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
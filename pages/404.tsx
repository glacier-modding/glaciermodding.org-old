import Head from "next/head"
import React from "react"
import Header from "../src/Header"

export default function Custom404() {
    return (
        <div className="container">
            <Head>
                <title>glaciermodding.org - Page not found</title>
            </Head>

            <Header />

            <main className="main">
                <h1 className="title">404</h1>
                <h2 className="description">Page not found.</h2>
            </main>
        </div>
    )
}

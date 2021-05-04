// @ts-nocheck

import React from "react"
import Header from "../../../src/Header"
import dynamic from "next/dynamic"
import Head from "next/head"

const XteaImage = dynamic(() => import("../../../src/XteaImage"))

export default function Xtea() {
    return (
        <div>
            <Head>
                <title>XTEA Online Tool - Notex.app</title>
            </Head>

            <div className="container">
                <Header logo={<XteaImage />} />

                <p id="failed-load-notif">You may need to reload the page unless you see the big box below. Sorry about that.</p>
                <main className="main"></main>
            </div>
        </div>
    )
}

// @ts-nocheck

import React from "react"
import Header from "../../../src/Header"
import dynamic from "next/dynamic"

const XteaImage = dynamic(() => import("../../../src/XteaImage"))

export default function Xtea() {
    return (
        <div className="container">
            <Header logo={<XteaImage />} />

            <main className="main"></main>
        </div>
    )
}

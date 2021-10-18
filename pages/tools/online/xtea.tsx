// @ts-nocheck This page gets modified at build time to make it work.

import React from "react"
import Header from "../../../src/Header"
import dynamic from "next/dynamic"
import PageSeo from "../../../src/PageSeo"

const XteaImage = dynamic(() => import("../../../src/XteaImage"))

export default function Xtea() {
    return (
        <div>
            <PageSeo
                title={"XTEA Online Tool"}
                description={
                    "An online tool built to encode and decode files that use IOI's modified XTEA algorithm."
                }
                pageUrl={"/tools/online/xtea"}
            />

            <div className="container">
                <Header logo={<XteaImage />} isMessingWithNext={true} />

                <p id="failed-load-notif">
                    You may need to reload the page unless you see the big box
                    below. Sorry about that.
                </p>

                <a
                    href="/xtea/prepatched"
                    className="description"
                    style={{ color: "white", cursor: "pointer" }}
                >
                    Looking for a version of <code>packagedefinition.txt</code>{" "}
                    that is already patched? Click here!
                </a>

                <main className="main"></main>
            </div>
        </div>
    )
}

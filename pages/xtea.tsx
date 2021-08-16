import React from "react"
import Head from "next/head"

export default function XteaRedirect(): JSX.Element {
    return (
        <div className="container">
            <Head>
                <title>Redirecting...</title>
                <meta
                    httpEquiv="refresh"
                    content="https://notex.app/tools/online/xtea"
                />
            </Head>
            <main>
                <h1>You should be redirected now.</h1>
                <p>
                    If not, click <a href="/tools/online/xtea">here</a>.
                </p>
            </main>
        </div>
    )
}

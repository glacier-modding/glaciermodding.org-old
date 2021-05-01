import Head from "next/head"
import Header from "../src/Header"

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>
                    Notex.app - Glacier Engine 2 - Tools and Resources
                </title>
                <meta
                    name="description"
                    content="Glacier Engine 2 - Tools and Resources"
                />
                <meta
                    name="keywords"
                    content="glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack"
                />
            </Head>

            <Header />

            <main className="main">
                <h1 className="title">Notex.app</h1>
                <h2 className="description">
                    Glacier Engine 2 - Tools and Resources
                </h2>
            </main>
        </div>
    )
}

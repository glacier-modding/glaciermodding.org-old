import Header from "../src/Header"
import PageSeo from "../src/PageSeo"

export default function Home() {
    return (
        <div className="container">
            <PageSeo
                title="Glacier 2 Engine - Tools and Resources"
                description="Home page of glaciermodding.org, a website dedicated to IO Interactive's Glacier 2 Engine. Home of some Tools and Resources. Join the modding community Discord."
                pageUrl=""
            />

            <Header />

            <main className="main">
                <h1 className="title">glaciermodding.org</h1>
                <h2 className="description">
                    Glacier Engine 2 - Tools and Resources
                </h2>
            </main>
        </div>
    )
}

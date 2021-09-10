import React from "react"
import PageSeo from "../src/PageSeo"
import Header from "../src/Header"
import Carousel from "../src/Carousel"

export default function Rocco() {
    const images = ["10", "11", "12"].map((i) => (
        <img src={`/rpkg${i}.jpg`} alt="IOI moment" />
    ))

    const videos = [
        "nomknjRZcUQ",
        "7sHWS4R7D1s",
        "nrmtPvHtxKQ",
        "hTlT68XEyS4",
        "MOHkihv059c",
        "bVfeIQruHqw",
    ].map((url) => (
        <iframe
            width="747"
            height="420"
            src={`https://www.youtube-nocookie.com/embed/${url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    ))

    return (
        <div className="container">
            <PageSeo
                title="Glacier 2 Engine - Tools and Resources"
                description="Notex.app is a website dedicated to IO Interactive's Glacier 2 Engine. Home of some Tools and Resources. Join the modding community Discord."
                pageUrl="/rocco"
            />

            <Header />

            <main className="main">
                <h1 className="title">Rocco</h1>
                <h2 className="description">The complete collection.</h2>

                <section aria-labelledby="#images-section">
                    <h2 id="images-section">Images</h2>
                    <Carousel items={images} />
                </section>

                <section aria-labelledby="#videos-section">
                    <h2 id="videos-section">Videos</h2>
                    <Carousel items={videos} />
                </section>
            </main>
        </div>
    )
}

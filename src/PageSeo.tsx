import React from "react"
import Head from "next/head"

export interface PageSeoProps {
    title: string
    description: string
    pageUrl: string
}

export default function PageSeo({
    pageUrl,
    title,
    description,
}: PageSeoProps): JSX.Element {
    const name = `${title} - Notex.app`

    return (
        <Head>
            <title>{name}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
            <meta
                name="keywords"
                content="glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack, discord, 007, ioi, io interactive"
            />
            <meta name="twitter:creator" content="@Notex_" />
            <meta name="twitter:title" content={name} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:dnt" content="on" />
            <meta name="twitter:url" content={`https://notex.app${pageUrl}`} />
            <link rel="author" href="https://twitter.com/Notex_" />
            <link rel="publisher" href="https://rdil.rocks" />
            <link rel="canonical" href={`https://notex.app/${pageUrl}`} />
            <meta itemProp="name" content={name} />
        </Head>
    )
}

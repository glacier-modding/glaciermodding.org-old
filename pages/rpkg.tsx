import React from "react"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core"
import Head from "next/head"
import Link from "next/link"
import Header from "../src/Header"
import dynamic from "next/dynamic"
import { latest, RpkgVersion, versions } from "../src/RpkgVersions"
import { renderToString } from "react-dom/server"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

// lazy load to reduce bundle size
const RpkgImage = dynamic(() => import("../src/RpkgImage"))

interface DownloadButtonProps {
    versionId: string
}

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
    typography: {
        fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
    },
    overrides: {
        // fix inconsistent widths
        MuiAccordion: {
            root: {
                width: "90%",
            },
        },
    },
})

function DownloadButton({ versionId }: DownloadButtonProps) {
    return (
        <Link href={`/tools/rpkg/rpkg_v${versionId}.zip`}>
            <div className="buttons">
                <a>Download v{versionId}</a>
            </div>
        </Link>
    )
}

export async function getStaticProps() {
    // we should probably check why these 2 constants need to
    // be out of hooks

    const rpkgVersions = versions.map((v) => {
        // @ts-expect-error Yup
        v.changelog = renderToString(v.changelog)
        return v
    }) as (RpkgVersion & { changelog: string })[]

    const rpkgLatest = {
        id: latest.id,
        changelog: renderToString(latest.changelog),
    }

    return {
        props: {
            latestVer: rpkgLatest,
            allVersions: rpkgVersions,
        },
    }
}

export default function Rpkg({ latestVer, allVersions }) {
    const [imgOpen, setImgOpen] = React.useState<boolean>(false)
    const [firstAccordionOpen, setFirstAccordionOpen] = React.useState<boolean>(
        true
    )

    return (
        <div className="container">
            <Head>
                <title>Notex.app - RPKG Tool</title>
                <meta
                    name="description"
                    content="The RPKG tool allows for easy (un)packing of files from the Glacier Engine RPKG file format!"
                />
                <meta
                    name="keywords"
                    content="glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack"
                />
            </Head>

            <Header />

            <ThemeProvider theme={darkTheme}>
                <main className="main">
                    <h1 className="title">RPKG</h1>

                    <h2 className="is-gray">
                        Developed by{" "}
                        <span className="is-not-gray">[REDACTED]</span> and
                        hosted by Notex.
                    </h2>

                    <DownloadButton versionId={latestVer.id} />

                    <div
                        className="buttons"
                        onClick={() => setImgOpen(!imgOpen)}
                    >
                        <span className="button-color-white">
                            {imgOpen ? "Hide Demo" : "Show Demo"}
                        </span>
                    </div>

                    {imgOpen ? <RpkgImage /> : null}

                    {allVersions.map((v) => (
                        <Accordion
                            key={v.id}
                            expanded={
                                v.id === latest.id ? firstAccordionOpen : void 0
                            }
                            onClick={
                                v.id === latest.id
                                    ? () =>
                                          setFirstAccordionOpen(
                                              !firstAccordionOpen
                                          )
                                    : void 0
                            }
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`changelog-${v.id}-content`}
                                id={`changelog-${v.id}-header`}
                            >
                                <p>New in v{v.id}</p>
                            </AccordionSummary>
                            <AccordionDetails className="changelog">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: v.changelog,
                                    }}
                                />
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </main>
            </ThemeProvider>
        </div>
    )
}

import React from "react"
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core"
import Head from "next/head"
import Link from "next/link"
import Header from "../src/Header"
import { latest, RpkgVersion, versions } from "../src/RpkgVersions"
import { renderToString } from "react-dom/server"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Image from "next/image"

interface DownloadButtonProps {
    versionId: string
}

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#a6d4fa",
        },
        secondary: {
            main: "#81c784",
        },
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
                "&$expanded": {
                    margin: "auto",
                },
            },
        },
        MuiAccordionSummary: {
            root: {
                marginBottom: -1,
            },
            content: {
                "&$expanded": {
                    margin: "12px 0",
                },
            },
            expanded: {},
        },
    },
})

function DownloadButton({ versionId }: DownloadButtonProps) {
    return (
        <Link href={`/tools/rpkg/rpkg_v${versionId}.zip`}>
            <Button variant={"contained"} color={"secondary"}>
                Download v{versionId}
            </Button>
        </Link>
    )
}

function DownloadSrcButton({ versionId }: DownloadButtonProps) {
    return (
        <Link href={`/tools/rpkg/rpkg_v${versionId}-src.zip`}>
            <Button variant={"contained"} color={"primary"}>
                Download Source
            </Button>
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

    return {
        props: {
            allVersions: rpkgVersions,
        },
    }
}

export default function Rpkg({ allVersions }) {
    // The rest of the accordions are controlled by themselves,
    // but we want this one to be open by default so we manually take control
    // of it's open/closed state.
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

                    <Image
                        width={1280}
                        height={800}
                        layout={"intrinsic"}
                        className="rpkg-image"
                        src="/rpkg-in-action.png"
                        alt="The RPKG tool in action."
                    />

                    <div style={{ marginTop: "19.92px" }} />

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
                            <AccordionActions>
                                <DownloadButton versionId={v.id} />
                                <DownloadSrcButton versionId={v.id} />
                            </AccordionActions>
                        </Accordion>
                    ))}
                </main>
            </ThemeProvider>
        </div>
    )
}

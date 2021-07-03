import React from "react"
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
    createMuiTheme,
    Grid,
    IconButton,
    ThemeProvider,
} from "@material-ui/core"
import Head from "next/head"
import Link from "next/link"
import Header from "../src/Header"
import { latest, RpkgVersion, versions } from "../src/RpkgVersions"
import { renderToString } from "react-dom/server"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
    ChevronLeft,
    ChevronRight,
    GetApp,
    GitHub,
    MenuBook,
} from "@material-ui/icons"

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
            "Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
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
        <Link
            href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${versionId}/rpkg_v${versionId}.zip`}
        >
            <Button
                variant={"contained"}
                color={"secondary"}
                startIcon={<GetApp />}
            >
                Download v{versionId}
            </Button>
        </Link>
    )
}

function DownloadSrcButton({ versionId }: DownloadButtonProps) {
    return (
        <Link
            href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${versionId}/rpkg_v${versionId}-src.zip`}
        >
            <Button
                variant={"contained"}
                color={"primary"}
                startIcon={<GetApp />}
            >
                Download Source
            </Button>
        </Link>
    )
}

function DownloadZHMToolsButton({ versionId }: DownloadButtonProps) {
    return (
        <Link
            href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${versionId}/ZHMTools-src.zip`}
        >
            <Button
                variant={"contained"}
                color={"primary"}
                startIcon={<GetApp />}
            >
                Download ZHMTools Source
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
    const [firstAccordionOpen, setFirstAccordionOpen] =
        React.useState<boolean>(true)
    const [image, setImage] = React.useState<number>(0)
    const images = [
        "/rpkg-1.png",
        "/rpkg-2.png",
        "/rpkg-3.png",
        "/rpkg-4.png",
        "/rpkg-5.png",
    ]

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
                    <h1 className="title">RPKG Tool</h1>

                    <AccordionActions>
                        <Link
                            href={`https://github.com/glacier-modding/RPKG-Tool`}
                        >
                            <Button
                                variant={"outlined"}
                                color={"secondary"}
                                startIcon={<GitHub />}
                            >
                                Github Repo
                            </Button>
                        </Link>

                        {/* <Link href={`https://wiki.notex.app`}>
                        <Button
                            variant={"outlined"}
                            color={"secondary"}
                            startIcon={<MenuBook />}
                        >
                            Wiki
                        </Button>
                    </Link> */}
                    </AccordionActions>

                    <img
                        width={1280}
                        height={800}
                        className="rpkg-image"
                        src={images[image]}
                        alt="The RPKG tool in action."
                    />

                    <Grid
                        container
                        justify="center"
                        style={{ margin: "19.92px" }}
                    >
                        <IconButton
                            disabled={image === 0}
                            onClick={() => {
                                image !== 0 && setImage(image - 1)
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>

                        <IconButton
                            onClick={() => {
                                image + 1 < images.length
                                    ? setImage(image + 1)
                                    : void 0
                            }}
                            disabled={images.length === image + 1}
                        >
                            <ChevronRight />
                        </IconButton>
                    </Grid>

                    {allVersions.map((v) => (
                        <Accordion
                            key={v.id}
                            expanded={
                                v.id === latest.id ? firstAccordionOpen : void 0
                            }
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`changelog-${v.id}-content`}
                                id={`changelog-${v.id}-header`}
                                onClick={
                                    v.id === latest.id
                                        ? () =>
                                              setFirstAccordionOpen(
                                                  !firstAccordionOpen
                                              )
                                        : void 0
                                }
                            >
                                <p>New in v{v.id}</p>
                            </AccordionSummary>
                            <AccordionDetails className="changelog">
                                <div>
                                    <p>Released {v.date}</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: v.changelog,
                                        }}
                                    />
                                </div>
                            </AccordionDetails>
                            <AccordionActions>
                                <DownloadButton versionId={v.id} />
                                <DownloadSrcButton versionId={v.id} />
                                {v.zhmtools && (
                                    <DownloadZHMToolsButton versionId={v.id} />
                                )}
                            </AccordionActions>
                        </Accordion>
                    ))}
                </main>
            </ThemeProvider>
        </div>
    )
}

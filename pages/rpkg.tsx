import React from "react"
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
} from "@mui/material"
import Link from "next/link"
import Header from "../src/Header"
import { latest, RpkgVersion, versions } from "../src/RpkgVersions"
import { renderToString } from "react-dom/server"
import { GetApp, GitHub, MenuBook, ExpandMore } from "@mui/icons-material"
import PageSeo from "../src/PageSeo"
import Carousel from "../src/Carousel"

interface DownloadButtonProps {
    versionId: string
}

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

function DownloadRPKGGUIButton({ versionId }: DownloadButtonProps) {
    return (
        <Link
            href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${versionId}/rpkg_v${versionId}-gui.zip`}
        >
            <Button
                variant={"contained"}
                color={"secondary"}
                startIcon={<GetApp />}
            >
                Download RPKG GUI
            </Button>
        </Link>
    )
}

function DownloadRPKGCLIButton({ versionId }: DownloadButtonProps) {
    return (
        <Link
            href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${versionId}/rpkg_v${versionId}-cli.zip`}
        >
            <Button
                variant={"contained"}
                color={"primary"}
                startIcon={<GetApp />}
            >
                Download RPKG CLI
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

    const images = React.useMemo(
        () =>
            [
                "/rpkg-1.png",
                "/rpkg-2.png",
                "/rpkg-3.png",
                "/rpkg-4.png",
                "/rpkg-5.png",
            ].map((obj) => (
                <img
                    className="rpkg-image"
                    src={obj}
                    alt="The RPKG tool in action."
                />
            )),
        []
    )

    return (
        <div className="container">
            <PageSeo
                title="RPKG Tool"
                description="The RPKG tool allows for easy (un)packing of files from the Glacier 2 Engine RPKG file format!"
                pageUrl="/rpkg"
            />

            <Header />

            <main className="main">
                <h1 className="title">RPKG Tool</h1>

                <AccordionActions>
                    <Link href={`https://github.com/glacier-modding/RPKG-Tool`}>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            startIcon={<GitHub />}
                        >
                            GitHub
                        </Button>
                    </Link>

                    <Link href={`https://wiki.glaciermodding.org`}>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            startIcon={<MenuBook />}
                        >
                            Wiki
                        </Button>
                    </Link>
                </AccordionActions>

                <AccordionActions>
                    <Link
                        href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${latest.id}/rpkg_v${latest.id}-gui.zip`}
                    >
                        <Button
                            variant={"outlined"}
                            color={"secondary"}
                            startIcon={<GetApp />}
                        >
                            Latest GUI Release Build v{latest.id}
                        </Button>
                    </Link>
                    <Link
                        href={`https://github.com/glacier-modding/RPKG-Tool/releases/download/v${latest.id}/rpkg_v${latest.id}-cli.zip`}
                    >
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            startIcon={<GetApp />}
                        >
                            Latest CLI Release Build v{latest.id}
                        </Button>
                    </Link>

                    <Link
                        href={`https://nightly.link/glacier-modding/RPKG-Tool/workflows/build/main/rpkg.zip`}
                    >
                        <Button
                            variant={"outlined"}
                            color={"warning"}
                            startIcon={<GetApp />}
                        >
                            Nightly Build
                        </Button>
                    </Link>
                </AccordionActions>

                <i className="subnote">
                    See below for past versions and changelogs
                </i>

                <Carousel items={images} />

                {allVersions.map((v) => (
                    <Accordion
                        key={v.id}
                        expanded={
                            v.id === latest.id ? firstAccordionOpen : void 0
                        }
                        style={{
                            width: "90%",
                            // @ts-expect-error
                            "&$expanded": {
                                margin: "auto",
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
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
                            {v.newdownloadformat ? (
                                <DownloadRPKGGUIButton versionId={v.id} />
                            ) : (
                                <DownloadButton versionId={v.id} />
                            )}
                            {v.newdownloadformat ? (
                                <DownloadRPKGCLIButton versionId={v.id} />
                            ) : (
                                <DownloadButton versionId={v.id} />
                            )}
                            <DownloadSrcButton versionId={v.id} />
                            {v.zhmtools && (
                                <DownloadZHMToolsButton versionId={v.id} />
                            )}
                        </AccordionActions>
                    </Accordion>
                ))}
            </main>
        </div>
    )
}

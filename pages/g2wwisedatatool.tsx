import React from "react"
import {
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Button,
} from "@mui/material"
import Link from "next/link"
import Header from "../src/Header"
import { GetApp, GitHub, SummarizeOutlined } from "@mui/icons-material"
import PageSeo from "../src/PageSeo"

export default function G2wwisedatatool() {
    return (
        <div className="container">
            <PageSeo
                title="G2WwiseDataTool"
                description="G2WwiseDataTool is a CLI application which can be used to export Audio Objects, Events, Switches and SoundBanks from a WWise project into files which are compatible with the Glacier 2 engine."
                pageUrl="/g2wwisedatatool"
            />

            <Header />

            <main className="main">
                <h1 className="title">G2WwiseDataTool</h1>

                <AccordionActions>
                    <Link
                        href={`https://github.com/glacier-modding/G2WwiseDataTool`}
                    >
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            startIcon={<GitHub />}
                        >
                            GitHub
                        </Button>
                    </Link>
                </AccordionActions>

                <p>
                    G2WwiseDataTool is a CLI application which can be used to
                    export Audio Objects, Events, Switches and SoundBanks from a
                    WWise project into files which are compatible with the
                    Glacier 2 engine. Please read the readme section in the
                    Github repository for more information.
                </p>
            </main>
        </div>
    )
}

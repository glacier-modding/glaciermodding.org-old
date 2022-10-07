import Header from "../../src/Header"
import { Button, Grid } from "@mui/material"
import PageSeo from "../../src/PageSeo"

export default function Prepatched() {
    return (
        <div className="container">
            <PageSeo
                title="Pre-patched Package Definitions"
                description="Pre-patched package definition files, to make installing mods faster."
                pageUrl="/xtea/prepatched"
            />

            <Header />

            <main className="main">
                <h1 className="title">Pre-patched package definitions</h1>
                <h2 className="description no-top">
                    If a mod requires you to patch your{" "}
                    <code>packagedefinition.txt</code> file, fear not. Here are
                    some already patched for you to download.
                </h2>

                <Grid container justifyContent={"center"}>
                    <Grid item xs={3}>
                        <h3>HITMAN&trade; 3</h3>
                        <a
                            href="/prepatched/h3/packagedefinition.txt"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <Button variant={"contained"}>
                                Download for 3.130.0
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>HITMAN&trade; 2</h3>
                        <a
                            href="/prepatched/h2/packagedefinition.txt"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            <Button variant={"contained"}>
                                Download for 2.72.0
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

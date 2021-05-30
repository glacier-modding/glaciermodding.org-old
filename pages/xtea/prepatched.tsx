import Head from "next/head"
import Header from "../../src/Header"
import { Button, Grid } from "@material-ui/core"

export default function Prepatched() {
    return (
        <div className="container">
            <Head>
                <title>
                    Notex.app - Pre-patched packagedefinition.txt files
                </title>
                <meta
                    name="description"
                    content="Glacier Engine 2 - Pre-patched packagedefinition.txt files for the HITMAN(TM) series."
                />
                <meta
                    name="keywords"
                    content="glacier engine, hitman, tools, resources, modding, mod, rpkg, locr, rtlv, dlge, gfxf, unpack, pack"
                />
            </Head>

            <Header />

            <main className="main">
                <h1 className="title">Pre-patched package definitions</h1>
                <h2 className="description no-top">
                    If a mod requires you to patch your <code>packagedefinition.txt</code> file, fear not.
                    Here are some already patched for you to download.
                </h2>

                <Grid container justify={"center"}>
                    <Grid item xs={3}>
                        <h3>HITMAN&trade; 3</h3>
                        <a href="/prepatched/h3/packagedefinition.txt" target="_blank" rel="noopener noreferrer" download>
                            <Button variant={"contained"}>Download for 3.30.0</Button>
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <h3>HITMAN&trade; 2</h3>
                        <a href="/prepatched/h2/packagedefinition.txt" target="_blank" rel="noopener noreferrer" download>
                            <Button variant={"contained"}>Download for 2.72.0</Button>
                        </a>
                    </Grid>
                </Grid>
            </main>
        </div>
    )
}

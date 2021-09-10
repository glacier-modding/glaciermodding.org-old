import { createTheme } from "@mui/material/styles"

export default createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#232425",
        },
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
})

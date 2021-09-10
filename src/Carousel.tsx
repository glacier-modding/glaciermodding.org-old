import React from "react"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"

export interface CarouselProps<Children> {
    items: JSX.Element[] | Children[]
}

export default function Carousel<T>({ items }: CarouselProps<T>) {
    const [currentStep, setCurrentStep] = React.useState(0)

    return (
        <>
            <div>{items[currentStep]}</div>

            <Grid
                container
                justifyContent="center"
                style={{ margin: "19.92px", width: "inherit" }}
            >
                <IconButton
                    disabled={currentStep === 0}
                    onClick={() => {
                        currentStep !== 0 && setCurrentStep(currentStep - 1)
                    }}
                >
                    <ChevronLeft />
                </IconButton>

                <IconButton
                    onClick={() => {
                        currentStep + 1 < items.length
                            ? setCurrentStep(currentStep + 1)
                            : void 0
                    }}
                    disabled={items.length === currentStep + 1}
                >
                    <ChevronRight />
                </IconButton>
            </Grid>
        </>
    )
}

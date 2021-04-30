import React from "react"
import IdealImage from "@endiliey/react-ideal-image"

export default function Image(props) {
    return (
        <IdealImage
            {...props}
            alt={props.alt}
            className={props.className}
            height={props.img.src.height || 100}
            width={props.img.src.width || 100}
            placeholder={{ lqip: props.img.preSrc }}
            src={props.img.src.src}
            srcSet={props.img.src.images.map((image) => ({
                ...image,
                src: image.path,
            }))}
        />
    )
}

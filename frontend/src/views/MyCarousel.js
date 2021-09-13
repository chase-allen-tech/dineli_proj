import React, { Component } from 'react'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"

export default class MyCarousel extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        const images = this.props.images ? this.props.images.map((e) => ({
            src: `${process.env.REACT_APP_API_ENDPOINT}/public/${e}`
        })) : []

        return (
            <Carousel images={images}
                style={{ height: "400px", width: "100%" }}
                leftIcon={<div style={{
                    color: "#ffffff",
                    fontSize: 80,
                    padding: 0,
                    margin: 0
                }}
                ><AiOutlineLeftCircle /></div>}

                rightIcon={<div style={{
                    color: "#ffffff",
                    fontSize: 80,
                    padding: 0,
                    margin: 0
                }}><AiOutlineRightCircle /></div>}

                hasThumbnails={this.props.hasThumbnails}
            />
        )
    }
}



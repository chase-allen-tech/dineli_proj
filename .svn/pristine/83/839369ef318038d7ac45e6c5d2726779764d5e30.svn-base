import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyClj3O8L9kUwDpaTRB6eodlVy_b8NXPz2E'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.lat}
                        lng={this.props.long}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}

export default SimpleMap
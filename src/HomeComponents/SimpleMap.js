import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./SimpleMap.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.315785,
      lng: 21.896691,
    },
    zoom: 17,
  };

  render() {
    return (
      <div className="simplemap">
        <div style={{ height: "50vh", width: "40%" }}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              className="googlemap"
              lat={43.315785}
              lng={21.896691}
              text="Studio Jelena Dragicevic"
            />
          </GoogleMapReact>
        </div>
        <div className="maptext">
          <img src="content/wallpaper4.jpg"></img>
          <div className="textposition">
            <h3>Mozete nas naci u strogom centru grada!</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;

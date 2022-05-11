import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          style={{ width: "70%", height: "70%" }}
          zoom={10}
          intialCenter={{
            lat: 22.159801,
            lng: 32.634813,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(GoogleMap);

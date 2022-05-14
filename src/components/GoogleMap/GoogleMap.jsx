import { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

class GoogleMap extends Component {
  render() {
    return (
      <div className="map">
        {/* <Map
          google={this.props.google}
          style={{ width: "70%", height: "70%" }}
          zoom={10}
          intialCenter={{
            lat: 22.159801,
            lng: 32.634813,
          }}
        /> */}

        <iframe
          className="iFrameMap"
          title="google-map"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=constanta%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>

      </div>
    );
  }
}

export default GoogleMap;

{
  /* export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})(GoogleMap); */
}

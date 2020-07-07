import React, { Component } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Toolbar from "../Toolbar/Toolbar";
// import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import CheckBox from "../CheckBox/CheckBox";
import "./Home.css";

// import * as CollectionData from "./bmx-facilities.json"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        latitude: 51.4552,
        longitude: -2.59665,
        width: "100vw",
        height: "100vh",
        zoom: 13,
      },
      locationList: [],
      error: null,
      selectedItem: null,
      sideDrawerOpen: false,
      Filters: [],
    };
    this.escFunction = this.escFunction.bind(this);
  }

  //Function for updating viewport
  _onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  //Function for updating selected Location
  _setSelectedItem = (selectedItem) => {
    this.setState({ selectedItem });
  };

  _setFilters = (filters) => {
    this.setState({ Filters: filters });
  };

  //function to render popups
  _renderPopup() {
    const { selectedItem } = this.state;
    return (
      selectedItem && (
        <Popup
          latitude={selectedItem.latitude}
          longitude={selectedItem.longitude}
          onClose={() => {
            this._setSelectedItem(null);
          }}
        >
          <div>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.physical_description}</p>
          </div>
        </Popup>
      )
    );
  }

  _renderMarkers() {
    const { locationList } = this.state;

    return locationList.map(
      (item) =>
        this.state.Filters.includes(item.regionID) && (
          <Marker
            key={item.ecatalogKey}
            latitude={item.latitude}
            longitude={item.longitude}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                this._setSelectedItem(item);
              }}
            >
              <img src="/spot.svg" alt="marker icon" />
            </button>
          </Marker>
        )
    );
  }

  //function to allow use of escape key to exit popup
  escFunction(event) {
    if (event.key === "Escape") {
      this._setSelectedItem(null);
    }
  }

  //function to build list of data from the fetch
  _buildLocationList = (data) => {
    this.setState({ locationList: data });
  };

  // _buildObjectList = (data) => {
  //   this.setState({objectList: data})
  // }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false); //this line is used for the escape function
    let url =
      "http://ec2-3-83-134-92.compute-1.amazonaws.com:8080/api/ecatalogobject/allInfo"; //these lines are for pulling from backend, currently dummy data
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then(this._buildLocationList)
      .catch();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false); //used for escape function
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const handleFilters = (filters) => {
      this._setFilters(filters);
    };

    return (
      <div style={{ height: "100%" }}>
        <ReactMapGl
          {...this.state.viewport}
          width={"100vw"}
          height={"100vh"}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/neo380899/ck4434h5r0pro1cmjramtwbwt"
        >
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

          <CheckBox handleFilters={(filters) => handleFilters(filters)} />

          {backdrop}

          {this._renderMarkers()}

          {this._renderPopup()}
        </ReactMapGl>
      </div>
    );
  }
}

export default Home;

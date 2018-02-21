import React, { Component } from "react";
import { connect } from "react-redux";
import { getServices } from "../actions";

class ExampleFetch extends Component {
  componentDidMount() {
    this.props.getServices();
  }

  render() {
    let dataList = this.props.services
      ? this.props.services.map(service => {
          let keys = Object.keys(service);
          return keys.map(key => {
            return (
              <div>
                {key}: {service[key]}
              </div>
            );
          });
        })
      : null;
    return (
      <div>
        <h2>Services Data</h2>
        {dataList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("state in container", state.boards);
  return {
    services: state.servicesReducer.services
  };
};

// Add our new getInitialBOARDS action dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    getServices: () => {
      dispatch(getServices());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleFetch);

import React, { Component } from 'react';
import './App.css';
import Filters from './Data';








export class Header extends Component {

  constructor (props) {
    super(props);

    this.state = {
        auxClasses: "header-level header-aux-down-init",
        filterButtonText: "Hide Filters",
        onClick: this.filtersDisappear,
        location: ""
    };

    this.filtersAppear = this.filtersAppear.bind(this);
    this.filtersDisappear = this.filtersDisappear.bind(this);
  };

  filtersAppear = (e) => {
    if (!(this.state.auxClasses === "header-level header-aux-down-init")) {
    this.setState({
        auxClasses: "header-level header-aux-down",
        filterButtonText: "Hide Filters",
        onClick: this.filtersDisappear
    });
    }
  };

  filtersDisappear = () => {
    this.setState({
        auxClasses: "header-level",
        filterButtonText: "Show Filters",
        onClick: this.filtersAppear
    });
  };

  setLocation = () => {
    this.setState({
        location: "Massachusetts Ave NW"
    });
  };

  setInput = (e) => {
    this.setState({
        location: e.target.value
    });
  };



  render () {

    this.state.filtersDisappear;

    return (
      <div id="header">

        <div id="header-upper" className="header-level">
            <div className="header-left header-block">
                <h3>DC Homeless Services Navigator</h3>
            </div>
        </div>

        <div id="header-bottom" className="header-level">
            <div className="header-left header-block">
                <h3 className="header-title">DC Homeless Services Navigator</h3>
                <div className="search-icon"></div>
                <input type="text" placeholder="search a location" onChange={this.setInput} className="main-header-search" onClick={this.filtersAppear} value={this.state.location}/>

                <div className="add-current-location header-op" onClick={this.setLocation}>
                <object type="image/svg+xml" data="icons/location.svg" className="location-icon"></object>
                <p>find me</p>
                </div>

                

                

            </div>
            <div className="header-right header-block">

                <div className="add-filters header-op" onClick={this.state.onClick}>
                <object type="image/svg+xml" data="icons/filter.svg" className="location-icon"></object>
                <h3>{this.state.filterButtonText}</h3>
                </div>

                <div className="save-search header-op">
                <object type="image/svg+xml" data="icons/save.svg" className="location-icon"></object>
                <h3>Save Search</h3>
                </div>

            </div>
        </div>


        <div id="header-aux" className={this.state.auxClasses}>
            <div className="header-left header-block">
                <h3>Filters</h3>
                {
                    Filters.map((filter) => {
                        return (
                            <div className="filter-block">
                            <div className="filter-categ-icon" style={{backgroundImage: `url(${filter.iconURL})`}}></div>
                            <h5>{filter.category}</h5>
                            </div>
                        );
                    })
                }
            </div>
            <div className="header-right header-block">
            </div>
        </div>

      </div>
    );
  }
}



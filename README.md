# Homelessness Service Navigator

Using open-source data, The Homelessness Services Navigator is a web application to assist clients and/or case workers in
finding and utilizing services that are available to individuals experiencing homelessness. The application allows dynamic filtering of
facilities and services, making it easy to use and navigate. Planned enhancements for Phase 2 include the incorporation of geo-routing to help individuals plan transportation between facilities.

## Background / On-Boarding

This project supports the DC Interagency Council on Homelessness's initiative to make homelessness in DC a "rare, brief, and non-recurring experience." While some individuals experiencing homelessness will resolve their episode of homelessness by qualifying for a government housing program, space in these programs is limited and governed by a tiered coordinated entry system. DC offers a wide range of services to support individuals experiencing homelessness who are waiting on housing or have not qualified. These services are designed to help individuals maximize their chances to self-resolve the episode of homelessness.

Currently, there is no centralized and user-friendly system for exploring the homeless services that are available. This information is generally passed on by caseworkers or other individuals experiencing homelessness based on their knowledge of the system, or it can be accessed in analog through printed informational material. DC Open Data currently publishes data on the facilities that provide homeless services, the location of shelters, and the Shelter Hotline Van shuttle routes. The overarching goal of the Homeless Services Navigator project is to harness this open-source data to build an effective, user-friendly tool that can be used to quickly and easily identify and locate homeless services.

Two phases are planned for this project:

### Phase 1

The product of Phase 1 will be the Homeless Services Navigator web application. Users will be able to input relevant information about themselves and indicate what services they are looking for. The app will then query the underlying data sources to determine a list of facilities providing the services requested, filtered by any applicable conditions such as gender and age. An individual experiencing homelessness will be able to use this information to plan their day and get the services they need in an efficient manner. The audience for this app includes: individuals experiencing homelessness, case workers, service providers such as doctors, and any individual who may be trying to help someone to find homeless services.

### Phase 2

Phase 2 will be an extension of the Homeless Services Navigator web application built in Phase 1. The main enhancement will be to integrate geo-routing data into a user's search results. Users will be able to view different potential transportation options for navigating between services, with recommendations for the quickest and most cost-effective route. Route options may include the Shelter Hotline Van shuttle routes, or public transportation options such as WMATA buses or metro.

## Homelessness Processes and Terms

Recommended Viewing: [Intro to Emergency Shelter for Individuals](https://youtu.be/JtT67BfcihM)

(More detail coming soon.)

## Datasets:

[Homeless Service Facilities](http://opendata.dc.gov/datasets/homeless-service-facilities)
[Homeless Facility Shuttle Stops](http://opendata.dc.gov/datasets/567f007f2d2b4d2b9afe08b9eb620182_52)
[Homeless Shelter Locations](http://opendata.dc.gov/datasets/87c5e68942304363a4578b30853f385d_25)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. npm

	* [How to install npm - The npm Blog](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

2. Yarn

```
curl -o- -L https://yarnpkg.com/install.sh |
```

3. Webpack Dev Server

```
npm install -g webpack-dev-server
```

### Installing

Install Packages

```
yarn install
```
`
Start Web App

```
yarn run start
```

Application should be running on http://localhost:8080/

## Style Guide

* [Javascript](./docs/javascriptStyleGuide.md)
* [React](./docs/reactStyleGuide.md)
* CSS (Coming Soon!)

## Running the tests

### Unit Tests

Executes unit tests for the front end using Jest

```
yarn run test
```

## Deployment

Coming Soon

## Built With

* [React](https://reactjs.org/) - The frontend framework used
* [Webpack](https://webpack.js.org/) - Module bundler
* [Jest](https://facebook.github.io/jest/) - Testing Framework
* [Yarn](https://yarnpkg.com/en/) - Dependency Management

## Contributing

Coming Soon

## Authors

* **Alex Chou** - _Initial work_ - [Chououtside](https://github.com/chououtside)
* **Katie Mitchell** - _Data Ambassador_ - [cimitchell](https://github.com/cimitchell)

See also the list of [contributors](https://github.com/DataKind-DC/homelessness-service-navigator/contributors) who
participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Department of Human Services
* Code for DC
* Data Kind DC


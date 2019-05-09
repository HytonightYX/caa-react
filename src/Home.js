import React, { Fragment } from 'react';
import './Home.css';

import Header from './components/Header/Header'
import Banner from "./components/Banner/Banner"
import BoxRow1 from "./components/BoxRow1/BoxRow1"
import BoxRow2 from "./components/BoxRow2/BoxRow2"
import BoxRow3 from "./components/BoxRow3/BoxRow3"
import IconNav from "./components/IconNav/IconNav"

export default class Home extends React.Component {

  render() {
    return (
      <Fragment>
        <Header/>

        <Banner/>

        <div className="wrap container">
          <BoxRow1/>
          <BoxRow2/>
          <BoxRow2/>
          <BoxRow3/>
          <IconNav />
        </div>

      </Fragment>
    )
  }
}

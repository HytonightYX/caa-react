import React, {Fragment} from 'react'
import '../../Home.css'

import hymdzc from '../../images/08f3729b143c726e833b9f1a67d2c230.jpg'

export default class Banner extends React.Component {

	render() {
		return (
			<div className="banner">
				<div id="dg-container" className="dg-container">
					<div className="dg-wrapper">
						<a target="blank" href="#"
						   style={{opacity: 0}}
						   className="" /><img src={hymdzc} alt="黄杨木雕之春" />
					</div>
					<div className="nav">
						<span className="dg-prev"></span>
						<span className="dg-next"></span>
					</div>
				</div>
			</div>
		)
	}

}
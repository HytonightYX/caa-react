import React, {Fragment} from 'react'
import '../../Home.css'

import logo from '../../images/logo.png'

export default class Header extends React.Component {

	render() {
		return (
			<Fragment>
				<div className="min-head clearfix">
					<div className="nav wrap text-right">
						<a href="#">视觉国美</a><a href="#">EN</a>
					</div>
				</div>

				<div className="header">
					<div className="wrap clearfix">
						<a target="_parent" href="#" className="logo fl"><img src={logo} alt=""/></a>

						<div className="search-form" id="#search_input">
							<input type="search" id="search_input" className="search float-left" name="keyword" required="required"/>
							<input type="submit" id="icon" className="btn btn-icon" value=""/>
							<input type="hidden" id="site_id" className="search float-left" name="site_id" value="1"/>
							<input type="hidden" id="domain" className="search float-left" name="domain" value="www.caa.edu.cn"/>
							<input type="hidden" id="domain_https" className="search float-left" name="domain_https" value="0"/>
						</div>
						<ul className="main-nav" id="mainNav">
							<li>
								<a href="#">首页</a>
							</li>
							<li>
								<a href="#">学院</a>
							</li>
							<li>
								<a href="#">教学</a>
							</li>
							<li>
								<a href="#">研创</a>
							</li>
							<li>
								<a href="#">招生</a>
							</li>
							<li>
								<a href="#">师资</a>
							</li>
							<li>
								<a href="#">交流</a>
							</li>
							<li>
								<a href="#">院报</a>
							</li>
						</ul>
					</div>
				</div>
			</Fragment>
		)
	}

}
import React from 'react'
import '../../Home.css'

class IconNav extends React.Component {

	render() {
		return (
			<div className="icon-nav">
				<a href="#" className="nav1"><i/>&nbsp;&nbsp;专题网站</a>
				<a href="#" className="nav2"><i/>邮件系统</a>
				<a href="#" className="nav3"><i/>校内平台VPN入口</a>
				<a href="#" className="nav4"><i/>OA校内</a>
				<a href="#" className="nav5"><i/>OA校外</a>
				<a href="#" className="nav6"><i/>投稿平台</a>
				<a href="#" className="nav7"><i/>微信公众号</a>
			</div>
		)
	}
}

export default IconNav;
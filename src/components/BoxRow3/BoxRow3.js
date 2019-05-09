import React from 'react'
import '../../Home.css'


export default class BoxRow3 extends React.Component {

	render() {
		return (
			<div className="box-row-3">
				<div className="box box-col-1">
					<div className="hd">
						<a target="blank" href="#" className="more" />
						<h2>国美英文<span className="en">ENGLISH</span></h2>
					</div>
					<div className="bd">
						<a target="blank" href="#">
							<img src="https://www.caa.edu.cn/images/img_54.png" alt="" />
						</a>
					</div>
				</div>

				<div className="box box-col-2">
					<div className="hd">
						<a target="blank"
						   href="#"
						   className="more" />
						<h2>国美校史<span className="en">HISTORY</span></h2>
					</div>
					<div className="bd">
						<a target="blank"
						   href="#" >
						   <img src="https://www.caa.edu.cn/images/img_56.png" alt="" />
						</a>
					</div>
				</div>

				<div className="box box-col-3">
					<div className="hd">
						<a target="blank" href="#" className="more" />
						<h2>院长讲坛<span className="en">FORUM</span></h2>
					</div>
					<div className="bd">
						<a target="blank" href="#" ><img src="https://www.caa.edu.cn/images/img_58.png" alt="" /></a>
					</div>

				</div>
			</div>
		)
	}
}
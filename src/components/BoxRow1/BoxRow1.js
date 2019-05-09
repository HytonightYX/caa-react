import React from 'react'
import '../../Home.css'

import p1 from '../../images/cc206e6c279fd91d226ea4fb1d5ed83d.jpg'
import p2 from '../../images/cc206e6c279fd91d226ea4fb1d5ed83d.jpg'
import p3 from '../../images/3429dc3c41fd90d68f93765f693776c3.jpg'
import p4 from '../../images/0783653592711601912799f691f738a2.jpg'

export default class BoxRow1 extends React.Component {

	render() {
		return (
			<div className="box">
				<div className="hd">
					<a target="blank" href="#" className="more" />
					<h2>国美日新<span className="en">ACADEMY DAILY</span></h2>
				</div>
				<div className="bd">
					<div className="book-scroll">
						<div className="book-scroll-wrap">
							<ul id="slide20181203">
								<li className="open">
									<a href="#" className="pic">
										<div className="red-date">
											<div>04-26</div>
											<img src={p1} alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>文化和旅游部国家美术作品收藏与奖励项目“书艺传家—刘江捐赠...</h3>
										<p>4月26日，文化和旅游部国家美术作品收藏与奖励项目“书艺传家—刘江捐赠书法篆刻作品展暨刘江、章培筠、刘丹艺术展” 在重庆万州三峡移民纪念......</p>
										<p></p>
										<p></p>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
								<li>
									<a href="#" className="pic">
										<div className="wh-date">
											<div>04-22</div>
											<img src={p3} alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>党委副书记胡钟华一行赴南浔看望下乡实践的师生</h3>
										<p>谷雨过后，浙江的乡村愈发清朗。从我校南山校区驱车北上，经过一个多小时的车程便到达一座江南水乡小镇——浙江省湖州市南浔古镇，学校大一的师生......</p>
										<p/><p/>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
								<li>
									<a href="#" className="pic">
										<div className="wh-date">
											<div>04-20</div>
											<img src={p2} alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>我校院长许江受邀出席全国学校美育工作会议并发言</h3>
										<p>4月20日，全国学校美育工作会议在苏州举行，总结交流党的十八大以来学校美育工作取得的经验和成效，研究部署新时代加强和改进美育工作。教育部党组书记、部长......</p>
										<p/>
										<p/>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
								<li>
									<a href="#" className="pic">
										<div className="wh-date">
											<div>04-15</div>
											<img src={p1} alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>“黄杨木雕之春——浙江民艺深耕系列之一”在中国美院民艺博物馆开幕</h3>
										<p> “黄杨木雕之春——浙江民艺深耕系列之一”展览于4月15日上午9点30分在中国美术学院民艺博物馆开幕，展期至6月12日。本次展览主要展......</p>
										<p></p>
										<p></p>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
								<li>
									<a href="#" className="pic">
										<div className="wh-date">
											<div>04-11</div>
											<img src="images/29a4b39519c9e6beb043746fea6fce32.jpg" alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>浙江省陶行知研究会2019年常务理事会议在我校举行</h3>
										<p>&nbsp; &nbsp; &nbsp;4月11日，浙江省陶行知研究会2019年常务理事会议在我校南山校区举行。学校党委副书记、浙江省陶行知研究会副会长胡钟华致欢迎辞并介绍学......</p>
										<p></p>
										<p></p>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
								<li>
									<a href="#" className="pic">
										<div className="wh-date">
											<div>04-11</div>
											<img src="images/45e7df02c3821874a49c15f05e83201b.jpg" alt="" />
										</div>
									</a>
									<div className="detail">
										<h3>学校召开2019年中层领导干部换届选任工作动员会</h3>
										<p> 4月11日上午，学校2019年中层领导干部换届选任工作动员会在南山校区学术报告厅召开。校党政领导班子成员、全体中层干部、机关处室全体符合任职资格的教职......</p>
										<p></p>
										<p></p>
										<p>&nbsp;</p>
										<p><a target="blank" href="#">详细内容</a></p>
									</div>
								</li>
							</ul>
						</div>
						<a href="#" className="btn-prev">prev</a>
						<a href="#" className="btn-next">next</a>
					</div>
				</div>
			</div>
		)
	}
}
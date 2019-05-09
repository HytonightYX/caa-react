import React from 'react'
import '../../Home.css'

import img_45 from '../../images/img_45.png'

export default class BoxRow2 extends React.Component {

	render() {
		return (
			<div className="box-row-2">
				<div className="box box-col-1">
					<div className="hd hd-tabs" data-toggle="tabs">
						<h2 className="tab-nav one current" data-id="#zhzx">
							<a href="#" className="more"/>
							综合资讯 </h2>
						<h2 className="tab-nav" data-id="#lxyy">
							<a href="#" className="more"/>
							两学一做 </h2>
					</div>
					<div className="bd">
						<div className="news-list tab-plane" id="zhzx">
							<ul>
								<li className="pic"><a target="blank" href="#"><img
									src={img_45} alt="" /></a></li>
								<li><a href="#">活动</a>
									<a href="#"
									   className="tit">组织人事（统战）部党支部、纪监审...</a></li>
								<li><a href="#">展览</a>
									<a href="#" className="tit">我校创新设计学院百年传“新”思政创...</a>
								</li>
								<li><a href="#">获奖</a>
									<a href="#"
									   className="tit">我校获浙江省第十五届大学生运动会...</a></li>
								<li><a href="#">活动</a>
									<a href="#" className="tit">我校工会组织教职工趣味篮球赛</a>
								</li>
								<li><a href="#">交流</a>
									<a href="#"
									   className="tit">香港圣士提反女子中学附属小学教师...</a></li>
								<li><a href="#">讲座</a>
									<a href="#" className="tit">“金牌作词人”方文山做客西湖论艺
										畅...</a></li>
							</ul>
						</div>
						<div className="news-list tab-plane" id="lxyy" style={{display: 'none'}}>
							<ul>
								<li className="pic"><a target="blank" href="#"><img src="images/lxyz.jpg"
								                                                    alt="" /></a></li>
								<li><a href="#" className="tit">跨媒体艺术学院党总支举行
									“不忘初心，...</a></li>
								<li><a href="#" className="tit">思政社科部召开会议学习《中国共产党纪...</a>
								</li>
								<li><a href="#"
								       className="tit">国际教育学院党支部开展主题党日活动</a></li>
								<li><a href="#" className="tit">纪监审工会党支部开展“清廉家风，清正人...</a>
								</li>
								<li><a href="#" className="tit">庆祝九十七华诞 缅怀新四军伟业
									——党院...</a></li>
								<li><a href="#" className="tit">中国美术学院教务教辅党总支赴“文化下城...</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="box box-col-2">
					<div className="hd hd-tabs" data-toggle="tabs">
						<a target="blank" href="#" className="more"/>
						<h2 className="tab-nav one" data-id="#xsyg">学术预告</h2>
						<h2 className="tab-nav current" data-id="#tzgg">
							<a target="blank" href="#" className="more"/>通知公告</h2>
					</div>
					<div className="bd">
						<div className="news-list tab-plane" id="xsyg" style={{display: 'none'}}>
							<ul>
								<li><em className="fr en"> 04-25</em><a target="blank" href="#"
								                                        className="tit">讲座|邱伟云：语言与数字转向下的思想史研究 </a></li>
								<li><em className="fr en"> 04-25</em><a target="blank" href="#"
								                                        className="tit">讲座|王睿琦：无形的姿态 </a></li>
								<li><em className="fr en"> 04-18</em><a target="blank" href="#"
								                                        className="tit">讲座|肖小勇：古物与艺术史系列讲座 </a></li>
								<li><em className="fr en"> 04-18</em><a target="blank" href="#"
								                                        className="tit">讲座|贺西林：汉代视觉文化相关知识的生成与检讨 </a></li>
								<li><em className="fr en"> 04-16</em><a target="blank" href="#"
								                                        className="tit">讲座|民艺大讲堂第九讲： 魏力群“中国皮影戏的源流、现状与创... </a></li>
								<li><em className="fr en"> 04-15</em><a target="blank" href="#"
								                                        className="tit"> 讲座|陈嘉映：语言与思想 </a></li>
							</ul>
						</div>
						<div className="news-list tab-plane" style={{display: 'block'}} id="tzgg">
							<ul>
								<li><em className="fr en"> 04-24</em><a target="blank" href="#"
								                                        className="tit">中国美术学院2019年第一批公开招聘资格复审和面试公告 （第三... </a></li>
								<li><em className="fr en"> 04-22</em><a target="blank" href="#"
								                                        className="tit">中国美术学院2019年第一批公开招聘人员笔试结果公告 （第二号... </a></li>
								<li><em className="fr en"> 04-19</em><a target="blank" href="#"
								                                        className="tit">招生| 国家艺术基金“唐代壁画保护与修复艺术传承人才培养”资... </a></li>
								<li><em className="fr en"> 04-17</em><a target="blank" href="#"
								                                        className="tit">中国美术学院公开招聘人员（专任教师）公告（2019年第三批） </a></li>
								<li><em className="fr en"> 04-15</em><a target="blank" href="#"
								                                        className="tit">中国美术学院2019年第一批公开招聘人员资格审查与考试等有关... </a></li>
								<li><em className="fr en"> 04-11</em><a target="blank" href="#"
								                                        className="tit">关于中国美术学院2019年本科招生考试成绩查询的通告 </a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
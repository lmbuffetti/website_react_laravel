import React, { Component } from 'react'
import Helmet from 'react-helmet'
import axios from "axios/index";
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientSide: false
		}
	}
	updateDimensions() {
		if(this.state.clientSide) {
			if (window.innerWidth < 500) {
				this.setState({width: 450, height: 102});
			} else {
				let update_width  = window.innerWidth - 100;
				let update_height = Math.round(update_width / 4.4);
				this.setState({width: update_width, height: update_height});
			}
		}
	}
	componentDidMount() {
		this.setState({clientSide: true})
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}
	componentWillUnmount() {
		//this.projectList();
	}
	render () {
	  var url = this.props.url;
	  var socialShare = require('../Img/social_graph.jpg');
		var minHeight;
		if(this.state.clientSide) {
			minHeight = (window.innerWidth > 767) ? window.innerHeight - 89 : window.innerHeight - 171;
		} else {
			minHeight = 0;
		}
		return (
            <div style={{minHeight: minHeight}}>
				<Helmet
					title={'Mattia Buffetti - Project'}
					meta={[
						{ name: 'description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image.' },
						{ name: 'keywords', content: 'Web Developer' },
						{ property: 'og:title', content: 'Luigi Mattia Buffetti - Web Developer - Project' },
						{ property: 'og:image', content: 'http://www.mattiabuffetti.org'+socialShare },
						{ property: 'og:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
						{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - Web Developer - Project' },
						{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org'+socialShare },
						{ name: 'twitter:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
					]}
				/>
				<div>
					<div itemScope className={"titlePage"}>
						<h1>Mattia Buffetti - </h1>&nbsp;<h2>Project</h2>
					</div>
					<ul id="projectList" className="clearfix">
						{this.props.json.map(function (item, i) {
							var img = item.image;
							var urlImg = require('../gallery/'+item.image);
							return (
								<li key={i}>
									<a href={'/projects/'+item.url} title={item.title}>
										<img src={urlImg} alt={item.title} width={500} height={333} />
										<div className="hoverText">
											<h3>{item.title}</h3>
										</div>
									</a>
								</li>
							)
						})}
					</ul>
				</div>
            </div>
		)
	}
}

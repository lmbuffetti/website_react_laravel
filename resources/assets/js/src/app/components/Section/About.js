import React, { Component } from 'react'
import TabItemProfile from './TabItemProfile'
import Helmet from 'react-helmet'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: [],
			screen: 'mac',
			clientSide: false
		}
	}
	componentDidMount() {
		var _this = this;
		this.setState({clientSide: true})
		window.addEventListener("resize", this.updateDimensions.bind(this));
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
	render () {
		var _this = this;
        let curTask = this.props.match.path.split('/')[this.props.match.path.split('/').length - 1];
		var imgUrl = require('../../gallery/luigi-mattia-buffetti.jpg');
		var socialShare = require('../../Img/logo-luigi-mattia-buffetti-web-developer.png');
		var minHeight;
		if(this.state.clientSide) {
			minHeight = (window.innerWidth > 767) ? window.innerHeight - 89 : window.innerHeight - 171;
		} else {
			minHeight = 0;
		}
		return (
			<div style={{minHeight: minHeight}}>
				<Helmet
					title={'Mattia Buffetti - About'}
					meta={[
						{ name: 'description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image.' },
						{ name: 'keywords', content: 'Web Developer' },
						{ property: 'og:title', content: 'Luigi Mattia Buffetti - Web Developer - About' },
						{ property: 'og:image', content: 'http://www.mattiabuffetti.org'+socialShare },
						{ property: 'og:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
						{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - Web Developer - About' },
						{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org'+socialShare },
						{ name: 'twitter:description', content: 'I developed a lot of site so I know the PHP and MySql, HTML, CSS, Javascript, Jquery and Ajax and I created for a client a plugin for wordpress to get the image from Instagram using hashtag and from the wordpress admin panel it is possibile to manage the image. I developed it using jQuery, Ajax and I use the REST API of Instagram.' },
					]}
				/>
				<div itemScope className={"titlePage"}>
					<h1>Mattia Buffetti - </h1>&nbsp;<h2>About</h2>
				</div>
				<div id="about">
					<div className="row">
						<div className="col-md-5">
							<img src={imgUrl} alt="Luigi Mattia Buffetti" />
						</div>
						<div className="col-md-7">
							<nav id="navTab">
								<ul>
									<li>
										<Link
											className={curTask === '' ? 'active' : ''}
											to={'/about'}
											title={"Profile"}
										>
											Profile
										</Link>
									</li>
									<li>
										<Link
											className={curTask === 'skills' ? 'active' : ''}
											to={'/about/skills'}
											title={"Skills"}
										>
											skills
										</Link>
									</li>
									<li>
										<Link
											className={curTask === 'experience' ? 'active' : ''}
											to={'/about/experience'}
											title={"Experience"}
										>
											Experience
										</Link>
									</li>
								</ul>
							</nav>
							<div id="contentTab">
								<TabItemProfile
									active={curTask}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
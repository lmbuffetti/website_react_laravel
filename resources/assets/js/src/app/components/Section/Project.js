import React, { Component } from 'react'
import Tab from './Tab'
import Ifame from './Ifame'
import Helmet from 'react-helmet'
var striptags = require('striptags');
export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: [],
			clientSide: false
		}
	}
	componentDidMount() {
		var _this = this;
		this.setState({clientSide: true});
        console.log(this.props.json, this.props.match);
        for (var $i=0;$i<this.props.json.length;$i++) {
            if ( this.props.match.params.number === this.props.json[$i]['url']) {
                this.setState({
                    project: this.props.json[$i],
                    clientSide: false
                })
            }
        }
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
		let curTask = this.props.match.path.split('/')[this.props.match.path.split('/').length - 1];
		let minHeight;
		let item = this.state.project;
		let urlImg = require('../../Img/social_graph.jpg');
		if (typeof item.image !== 'undefined') {
			urlImg = require('../../gallery/' + item.image);
		}
		if(this.state.clientSide) {
			minHeight = (window.innerWidth > 767) ? window.innerHeight - 89 : window.innerHeight - 171;
		} else {
			minHeight = 0;
		}
		return (
			<div style={{minHeight: minHeight}}>
				<div>
					<Helmet
						title={'Mattia Buffetti - ' + item.title}
						meta={[
							{name: 'description', content: striptags(item.description)},
							{name: 'keywords', content: item.title},
							{property: 'og:title', content: 'Luigi Mattia Buffetti - ' + item.title},
							{property: 'og:image', content: 'http://www.mattiabuffetti.org' + urlImg},
							{property: 'og:description', content: striptags(item.description)},
							{ name: 'twitter:title', content: 'Luigi Mattia Buffetti - ' + item.title},
							{ name: 'twitter:image', content: 'http://www.mattiabuffetti.org' + urlImg},
							{ name: 'twitter:description', content: striptags(item.description)}
						]}
					/>
					<div itemScope className={"titlePage"}>
						<h1>Mattia Buffetti - </h1>&nbsp;<h2>{item.title}</h2>
					</div>
					<div id="projectDetail">
						<div className="row">
							<div className="col-md-6">
								<Tab
									curTask={curTask}
									skills={item.skills}
									tasks={item.tasks}
									text={item.description}
									url={'/projects/' + item.url}
								/>
							</div>
							<div className="col-md-6">
								<Ifame
									url={'/projects/' + item.url}
									src={item.link}
									type={item.type}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
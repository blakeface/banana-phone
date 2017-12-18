import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollReveal from 'scrollreveal';
import ReactGA from 'react-ga';

// components
import Nav from './components/nav';
import LandingPage from './components/landing-page';
import About from './components/about';
import Features from './components/features';
import Gorillas from './components/gorillas';
import Press from './components/press';
import FAQ from './components/faq';
import Footer from './components/footer';

require('./style/style.scss');

class App extends Component {
	constructor(){
		super();
		this.state = { location: null };
	}

	componentWillMount() {
		this.getIPLocation();
	}

	componentDidMount() {
		this.setScrollAnimations();
		ReactGA.initialize('UA-96623014-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	setScrollAnimations() {
		window.sr = ScrollReveal();

		// about section
		sr.reveal('#aboutText', {
			duration: 1000,
			delay: 250,
		});
		sr.reveal('.srAsync-about', {
			duration: 1000,
			delay: 250,
		}, 50);
		sr.reveal('.srAsync-features', {
			duration: 1000,
			delay: 250,
		}, 50);
		sr.reveal('.srAsync-gorillas', {
			duration: 1000,
			delay: 250,
		}, 50);
		sr.reveal('.srAsync-faq', {
			duration: 1000,
			delay: 250,
		}, 50);
	}

	getIPLocation() {
		const ipLocation = localStorage.getItem('location');
		if ( ! ipLocation) {
			fetch('https://ipinfo.io', {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseJson) => {
				let country = (responseJson.country || 'america').toLowerCase();
				country = (country == 'us' || country == 'usa' || country == 'america') ? 'america' : country;

				localStorage.setItem('location', country);
				this.setState({location: country});
			})
			.catch((error) => {
				localStorage.setItem('location', 'america');
				this.setState({location: 'america'});
			});
		}
		else {
			this.setState({location: ipLocation});
		}
	}

	render() {
		return (
			<div>
				<Nav location={this.state.location} />
				<LandingPage />
				<About />
				<Features />
				<Gorillas />
				<Press />
				<FAQ />
				<Footer location={this.state.location} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));

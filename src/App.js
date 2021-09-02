import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import DownloadPage from './pages/DownloadPage';
import Header from './component/Header';
import FooterWidget from './component/FooterWidget';
import Footer from './component/Footer';
import Topbar from './component/Topbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Topbar/>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/service" component={ServicePage} />
				<Route path="/product" component={ProductPage} />
				<Route path="/download" component={DownloadPage} />
				<Route path="/contact" component={ContactPage}/>
			</Switch>
			<FooterWidget />
			<Footer/>
			</Router>
		</div>
	);
}

export default App;

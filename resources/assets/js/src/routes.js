import Home from './app/components/Home';
import About from './app/components/Section/About';
import Contact from './app/components/Section/Contact';
import Project from './app/components/Section/Project';
import axios from 'axios';
const jsonProj = 'http://www.mattiabuffetti.org/db/project.json';
function getJson() {
	var test = {}

	return test;
}

export default function addRoutes(router) {
	router.get('/', (req, res, next) => {
		axios
		.get(jsonProj)
		.then(function(result) {
			res.locals.component = Home;
			res.locals.initialState = { json: result.data.project.reverse() };
			next();
		}).catch(function (error) {
			console.log(error);
		});
	});
	router.get('/about', (req, res, next) => {
		res.locals.component = About;
		res.locals.initialState = { prop: '' };
		next();
	});
	router.get('/contact', (req, res, next) => {
		res.locals.component = Contact;
		res.locals.initialState = { prop: '' };
		next();
	});
	router.get('/about/:prop', (req, res, next) => {
		res.locals.component = About;
		res.locals.initialState = { prop: req.params.prop };
		next();
	});
	router.get('/projects/:number', (req, res, next) => {
		axios
		.get(jsonProj)
		.then(function(result) {
			res.locals.component = Project;
			res.locals.initialState = { name: req.params.number, json: result.data.project };
			next();
		}).catch(function (error) {
			console.log(error);
		});
	});
	router.get('/projects/:number/:prop', (req, res, next) => {
		axios
		.get(jsonProj)
		.then(function(result) {
			res.locals.component = Project;
			res.locals.initialState = { name: req.params.number, prop: req.params.prop, json: result.data.project,  };
			next();
		}).catch(function (error) {
			console.log(error);
		});
	});
}
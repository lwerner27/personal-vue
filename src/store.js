import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		serverAddress: "http://localhost:5000/",
		isLoggedIn: false,
		jwt: null,
		repos: [],
		featuredProjects: [
			{
				name: "Custom Exercise App",
				details:
					"A personal project I have been working on. It is an exercise tracking web app tailored to my specific use. The frontend is being built with React and Reactstrap. I am using Express with the help of express-session keep users authenticated as well as for protection of the API routes. Data is stored in a MongoDB instance hosted on Google Cloud Platform.",
				githubLink: "https://github.com/lwerner27/exercise-app",
				siteLink: "",
				imgLink:
					"https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/Gym.jpg?alt=media&token=d6dc3318-1c1f-4f2f-bf31-0b0d33bd7b0c"
			},
			{
				name: "Recipe Catalog",
				details:
					"On this team project we leveraged Express, Sequelize, Handlebars, Boostrap and even a little Vue.Js to build an online recipe catalog. I worked directly on the database design, data controllers, Express routes, and created a simple Vue component for the favorites page.",
				githubLink: "https://github.com/lwerner27/Recipe-Catalog",
				siteLink: "https://frozen-atoll-29378.herokuapp.com/",
				imgLink:
					"https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/Food.jpg?alt=media&token=ffe39aa4-e550-431f-a87a-1b01c78c6aa0"
			},
			{
				name: "Bar Crawl Routes",
				details:
					"This is a web app I'm building for creating, finding and navigating bar crawls. The app uses the Yelp API for correctly identifying stops on the route and eventually will have functionality for using the Google Maps API for charting the route. This app is still in the very early stages and is mostly only frontend at the moment but will eventually use more express to handle API endpoints and express-session to help with keeping users authenticated.",
				githubLink: "https://github.com/lwerner27/bar-crawl-route",
				siteLink: "",
				imgLink:
					"https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/DiveBar.jpg?alt=media&token=98cc611e-4a6a-4195-8cce-eebde669fa77"
			}
		]
	},
	mutations: {
		ADD_REPOS: (state, repos) => {
			state.repos = repos;
		},
		UPDATE_LOGIN_STATUS: state => {
			state.isLoggedIn = true;
		},
		UPDATE_JWT: (state, jwt) => {
			state.jwt = jwt;
		}
	},
	actions: {}
});

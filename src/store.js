import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    jwt: null,
    repos: [],
    featuredProjects: [
      {
        name: "Health Tracker",
        details: "Together with a team I utilized Express, Mongoose, Passport, and React to build a basic health tracking app. I personally handled the database design, data controllers, passing the data to components, and rendering it correctly.",
        githubLink: "https://github.com/lwerner27/healthTracker",
        siteLink: "https://health-tracking-app.herokuapp.com/login",
        imgLink: "https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/Gym.jpg?alt=media&token=d6dc3318-1c1f-4f2f-bf31-0b0d33bd7b0c",
      },
      {
        name: "Recipe Catalog",
        details: "On this team project we leveraged Express, Sequelize, Handlebars, Boostrap and even a little Vue.Js to build an online recipe catalog. I worked directly on the database design, data controllers, Express routes, and created a simple Vue component for the favorites page.",
        githubLink: "https://github.com/lwerner27/Recipe-Catalog",
        siteLink: "https://frozen-atoll-29378.herokuapp.com/",
        imgLink: "https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/Food.jpg?alt=media&token=ffe39aa4-e550-431f-a87a-1b01c78c6aa0",

      },
      {
        name: "Personal Site",
        details: "It might sound a little weird to call the site you are currently viewing one of my featured projects but I have grand plans for this site. I am currently working on coding the backend so I can do things like update the featured projects section without having to write new code. I am currently building out the backend to use Google's Firebase but eventually want to move it to more specialized code on AWS and have the site and API's be containereized with Docker and Kubernetes.",
        githubLink: "",
        siteLink: "",
        imgLink: "https://firebasestorage.googleapis.com/v0/b/personal-backend.appspot.com/o/Minneapolis.jpg?alt=media&token=7645fcc3-c72c-44ef-a9c1-a83ffeed0b0e"
      }
    ]
  },
  mutations: {
    ADD_REPOS: (state, repos) => {
      state.repos = repos
    },
    UPDATE_LOGIN_STATUS: (state) => {
      state.isLoggedIn = true
    },
    UPDATE_JWT: (state, jwt) => {
      state.jwt = jwt
    }
  },
  actions: {

  }
})

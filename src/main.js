import Vue from "vue";
import App from "./App.vue";
import FormGenData from "./components/FormGenData";
import Home from "./components/Home.vue";
import Student from "./components/Student.vue";
import CourseDetail from "./components/CourseDetail.vue";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import Vuesax from "vuesax";
import VueRouter from "vue-router";

import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css"; //Vuesax styles

Vue.use(VueRouter);
Vue.use(VueApollo);
Vue.use(Vuesax, {
  // options here
});
const routes = [
  { path: "/", component: Home },
  { path: "/generate", component: FormGenData },
  { path: "/students", component: Student },
  { path: "/course-detail", component: CourseDetail }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.productionTip = false;

// Create an http link:
const link = new HttpLink({
  uri: "localhost:3000",
  fetch
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client
});

new Vue({
  apolloProvider,
  router,
  render: (h) => h(App)
}).$mount("#app");

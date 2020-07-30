import Vue from "vue";
import App from "./App.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const innerdemo = document.getElementById("inner-demo-2");

const stringSplitter = string => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(innerdemo, {
  loop: true,
  delay: 45,
  stringSplitter
});

typewriter
  .typeString("Hi, I'm Luis Gonzalez 👋")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a 🚀 Front End developer 🚀")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I ❤️ Fried Chicken")
  .pauseFor(1000)
  .deleteAll()
  .start();

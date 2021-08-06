import { Module } from "@nuxt/types";
import path from "path";

export default (async function (moduleOptions) {
  console.log(path.resolve(__dirname + "../plugins", "vue.example.ts"));
  this.addPlugin({
    src: path.resolve(__dirname + "/../plugins/", "vue.example.ts"),
    options: {},
  });
} as Module);

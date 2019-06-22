import { app } from "./components/app.js";
import { dynamicsH1FromTitle } from "./scripts/dynamicsH1FromTitle.js";
import { createElement } from "./scripts/createElement.js";

createElement("div", "rootDiv", "", '', "#root");
app();

dynamicsH1FromTitle();

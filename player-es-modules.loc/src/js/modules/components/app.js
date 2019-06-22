import { store } from "../store/store.js";
import { createElement } from "../scripts/createElement.js";
// import { dellButton } from "./dellButton.js";

export function app() {
  createElement("div", "playerCover", "playerCover", "", "#rootDiv");

  createElement("div", "screenName", "", store.screenText, "#playerCover");

  createElement("button", "stop", "", "stop", "#playerCover");
  createElement("button", "back", "", "back", "#playerCover");
  createElement("button", "play", "", "play", "#playerCover");
  createElement("button", "next", "", "next", "#playerCover");

  createElement("div", "bodyForPlayer", "", "", "#playerCover");
  createElement(
    "div",
    "",
    "",
    `${store.allTracks
      .map((e, k) => {
        createElement(
          "div",
          "",
          "someClass2",
          k + 1 + ") " + e,
          "#bodyForPlayer"
        );
      })
      .join(" ")}`,
    // `${
    //     store.allTracks.map(k =>  {'<br>', dellButton('#bodyForPlayer', k) }).join('')
    // }`,
    "#bodyForPlayer"
  );
}

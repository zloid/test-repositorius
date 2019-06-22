export const dynamicsH1FromTitle = title => {
  let titleTextTaked = document.querySelector("title").innerHTML;
  !/\w/.test(titleTextTaked) && (titleTextTaked = title);
  let h1ForActualTitle = document.createElement("h1");
  h1ForActualTitle.innerHTML = titleTextTaked;
  // document.querySelector("body").appendChild(h1ForActualTitle);
  document.querySelector("body").insertBefore(h1ForActualTitle, document.querySelector("body").children[0])
};

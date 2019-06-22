export function createElement(
  createElement,
  id,
  className,
  innerHTML = "",
  parentForInsert
) {
  let newDomNode = document.createElement(createElement);

  // id === "" ? (newDomNode.className = className) : (newDomNode.id = id);
  !/\w/.test(id) ? (newDomNode.className = className.trim()) : (newDomNode.id = id.trim());

  innerHTML !== "" && (newDomNode.innerHTML = innerHTML);
  
  let root = document.querySelector(parentForInsert);
  root.appendChild(newDomNode);
}

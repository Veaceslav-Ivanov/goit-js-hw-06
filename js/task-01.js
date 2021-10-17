const group = document.querySelector("#categories").children;
console.log("Number of categories:", group.length);

[...group].forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});

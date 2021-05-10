// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function myfavAuthor () {
  var name =
   document.getElementById("author").value;
   var message = 
      "<p>Hello " + name + ", I love your books!</p>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "Haruki Murakami") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " (My Favorite Author)";
    document
        .querySelector("h1")
        .textContent = title;
  }
}
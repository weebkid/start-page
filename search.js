 String.prototype.replaceChars = function(character, replacement) {
  var str = this;
  var a;
  var b;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == character) {
      a = str.substr(0, i) + replacement;
      b = str.substr(i + 1);
      str = a + b;
    }
  }
  return str;
}

function search(query) {
  switch (query.substr(0, 2)) {
    // reddit
    case "-r":
      query = query.substr(3);
      window.location =
      "https://www.reddit.com/r/" +
      query.replaceChars(" ", "");
      break;
    // youtube
    case "-y":
      query = query.substr(3);
      window.location =
      "https://www.youtube.com/results?search_query=" +
      query.replaceChars(" ", "+");
      break;
    // wikipedia
    case "-w":
      query = query.substr(3);
      window.location =
      "https://en.wikipedia.org/w/index.php?search=" +
      query.replaceChars(" ", "%20");
      break;
    // wikipedia
    case "-a":
      query = query.substr(3);
      window.location =
      "https://arxiv.org/search/?searchtype=all&order=-announced_date_first&size=50&query=" +
      query.replaceChars(" ", "%20");
      break;
    // default
    default:
      window.location="https://www.google.com/search?q=" +
      query.replaceChars("", "+");
  }
}

window.onload = function() {
  // search
  var searchinput = document.getElementById("searchbox");
  // tab
  if (!!searchinput) {
    searchinput.addEventListener("keypress", function(a) {
      if (a.keyCode == 13) {
        var query = this.value;
        search(query);
      }
    });
  }
}
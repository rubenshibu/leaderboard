
var url = "https://spreadsheets.google.com/feeds/cells/1NrVoO6Wqe-3E3kC8hH-MIqy-yKrb5n5DcfxsfWYSzD4/1/public/full?alt=json#"

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", url);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", function (e) {
    var data = e.target.response;
    var response = JSON.parse(data);
    console.log(response.feed.entry);
    for(var i=0; i<response.feed.entry.length; i++)
    {
        
      var container = document.querySelector(".table-content");
      container.innerHTML +=
      '<div class="col-lg-4 col-md-4 col-sm-4 col-xl-4  rank">'+
        response.feed.entry[i].content.$t+
      '</div><hr>'
        
    }
    
  });

var url = "https://sheet.best/api/sheets/cb49aab6-348f-4bd3-a698-2fd1a3328929";

// AJAX Request
var leaderBoard = new XMLHttpRequest();
leaderBoard.open("GET", url);
leaderBoard.send();

leaderBoard.addEventListener("load", function (e) {
  var data = e.target.response;
  var response = JSON.parse(data);
  let resultsData = response;

  resultsData.forEach((result) => {
    console.log(result);
    $(".table-content").append(
      `<div class="col-lg-2 col-sm-2 col-md-2 col-xl-2 col-2">
        ${result.Rank}
      </div>
      <div class="col-lg-7 col-sm-7 col-md-7 col-xl-7 col-7">
        ${result.Name}
      </div>
      <div class="col-lg-3 col-sm-3 col-md-3 col-xl-3 col-3">
        ${result.Points}
      </div>`
    );
  });
});
var options = {
  bottom: '64px', 
  right: 'unset', 
  left: '32px', 
  time: '0.5s', 
  mixColor: '#fff', 
  backgroundColor: '#fff',  
  buttonColorDark: '#100f2c',  
  buttonColorLight: '#fff', 
  saveInCookies: false, 
  label: '🌓', 
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

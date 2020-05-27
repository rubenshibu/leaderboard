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
    $(".card-content").append(
      `<div>
        ${result.Rank} ${result.Name} ${result.Points}
      </div>`
    );
  });
});

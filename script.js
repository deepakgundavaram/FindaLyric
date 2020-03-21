function search() {
  var lyricName = document.getElementById("lyricInput").value;
  var apiKey = "HOaeWFw9AtiKvo2R3Ic98EFG1j6n4oobnVJDV2Q4K1pjWQKoV1lacK3KKvdYDi2J";
  
  const queryUrl = "https://orion.apiseeds.com/api/music/search?q=" + lyricName + apiKey;
  
  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function(response) {
  console.log(response); 
})
}
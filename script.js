function clearSearch() {
    $("#lyricSearch").val("");
    $("#artistSearch").val("");
    $("#lyrics").html("")
}



// function getLyrics(){
   
//     var artistSearch = document.getElementById("artistSearch").value;
//     var songSearch = document.getElementById("lyricSearch").value;
//     console.log(songSearch);
  
//     $.ajax({
//         type: "GET",
//         data: {
//             apikey:"1f3c721c7b3430d9d7191c41b292822c",
//             q_artist: artistSearch,
//             q_track: songSearch,
//             format:"jsonp",
//             callback:"jsonp_callback",
            
//         },
//         url: "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
//         dataType: "jsonp",
//         jsonpCallback: 'jsonp_callback',
//         contentType: 'application/json',
//         success: function(data) {
//              console.log(data); 
//             // var artist_id=  data.message.body.artist_list[0].artist.artist_id ;    
//             var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";
//             var j = document.createElement("p")
//             j.textContent = lyricsBody
//             document.getElementById("lyrics").appendChild(j)
//            },
//         error: function(jqXHR, textStatus, errorThrown) {
//             console.log(jqXHR);
//             console.log(textStatus);
//             console.log(errorThrown);
//         } 
//     });

    function getSongLyrics(){
        var artist = document.getElementById("artistSearch").value;
        var song = document.getElementById("lyricSearch").value;        
            console.log(artist)
        var apikey = "?apikey=HOaeWFw9AtiKvo2R3Ic98EFG1j6n4oobnVJDV2Q4K1pjWQKoV1lacK3KKvdYDi2J";
        var queryURL = `https://orion.apiseeds.com/api/music/lyric/${artist}/${song}${apikey}`;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response) {
            var lyricsBody = response.result.track.text
            var lyric = document.createElement("p")
            lyric.classList.add("center-align")
            lyricsBody = lyricsBody.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />');
            lyric.innerHTML= lyricsBody
            console.log(response)
            document.getElementById("lyrics").appendChild(lyric)           
    });
              
};
prepend
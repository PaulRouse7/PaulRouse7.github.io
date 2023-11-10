console.log("Let's get this party started!");

function createImage (url){
    let newGIF = $("<img>");
    newGIF.attr('src', url); 
    $("#gifContainer").append(newGIF);
}

$('#userForm').on('submit', async function(event){
    event.preventDefault();

    let userInput = $("#userInput").val();
    $("#userInput").val("");

    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: "OdByyStqSuqLrCA6s0e8kARhdua7c0Nu",
            q: userInput
        }}); 
    const gifURL = res.data.data[0].images.original.url;
    createImage(gifURL);
})

$("#clearGIF").on('click', function(){
    $("#gifContainer").empty();
})
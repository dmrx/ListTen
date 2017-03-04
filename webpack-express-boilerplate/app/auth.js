googleApiClientReady = function() {
  gapi.client.init({'apiKey': 'AIzaSyCx8yuHmvoLF00uIT1nRJ-Zi5XlUpMSHxM',}).then(function() {
    gapi.client.load('youtube', 'v3', function() {
      console.log("loadAPIClientInterface!")
      // handleAPILoaded();
    })
  console.log("Auth.js is running!");
  });
};

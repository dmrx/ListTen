function googleApiClientReady() {
  gapi.client.init({'apiKey': 'AIzaSyCx8yuHmvoLF00uIT1nRJ-Zi5XlUpMSHxM',}).then(function() {
      console.log("Auth.js is running!");
    gapi.client.load('youtube', 'v3', function() {
      console.log("loadAPIClientInterface!")
      // handleAPILoaded();
    })
  });
};

export default googleApiClientReady;

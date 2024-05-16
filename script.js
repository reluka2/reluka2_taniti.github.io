  function convertCurrency() {
  var amount = document.getElementById("amount").value;
  var fromCurrency = document.getElementById("from").value;
  var toCurrency = document.getElementById("to").value;
  
  // Fetch conversion rate from API
  fetch('https://open.er-api.com/v6/latest/' + fromCurrency)
    .then(response => response.json())
    .then(data => {
      var conversionRate = data.rates[toCurrency];
      var convertedAmount = amount * conversionRate;
      document.getElementById("result").innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
	//book activity
	function bookActivity() {
      var activity = document.getElementById("activity").value;
      var date = document.getElementById("date").value;
      var participants = document.getElementById("participants").value;
      
      // Perform booking logic here, e.g., send data to server or display confirmation message
      // Example: alert("Booking confirmed for " + activity + " on " + date + " for " + participants + " participant(s).");
    }

// Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

// Check if favorites exist in local storage, initialize if not
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to check if hotel is already a favorite
function isFavorite(hotelName) {
  return favorites.includes(hotelName);
}

// Function to save hotel as favorite
function saveFavorite(hotelName) {
  if (!isFavorite(hotelName)) {
    favorites.push(hotelName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Hotel saved as favorite!');
  } else {
    alert('Hotel already saved as favorite!');
  }
}

// Event listener for save favorite button
document.getElementById('saveFavoriteBtn').addEventListener('click', function() {
  saveFavorite('XYZ Hotel'); // Replace 'XYZ Hotel' with actual hotel name
});

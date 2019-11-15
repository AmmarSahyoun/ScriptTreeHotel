
class HotelGuest {
    constructor (){
        this.username = '';
        this.email='';
        this.phone = '';
        this.country = 'Sw';
    }
}
// Define global variables

  // Define Arry
  var guests = [];

  // Add Guest function
  function submitForm(){
    // Create new Instance of HotelGuest
    var myGuest = new HotelGuest();

    // Access DOM elements
    var usernameControl = document.getElementById('username');
    var emailControl = document.getElementById('email');
    var phoneControl = document.getElementById('phone');
    var countryList = document.getElementById('country');
    
    // Assign DOM values to myGuest
    myGuest.username =  usernameControl.value;
    myGuest.email = emailControl.value;
    myGuest.phone = phoneControl.value;
    myGuest.country = countryList.value;

    // Add to Array
    guests.push(myGuest);

    // Clear values
    usernameControl.value = '';
    emailControl.value = '';
    phoneControl.value = '';
    countryList.value = 'Sw';


    alert('Guest added');
    }

    // Fill Select Element
    function populateGuestList(){
      var guestListElement = document.getElementById('guestList');

      for (index = 0 ; index < guests.length ; index++)
      {
        var option = document.createElement("option");
        option.text = guests[index].username;
        guestListElement.add(option);
      }
    }

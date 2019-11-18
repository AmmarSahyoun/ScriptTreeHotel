
class HotelGuest {
  constructor() {
    this.username = '';
    this.email = '';
    this.phone = '';
    this.checkin = '';
    this.checkout = '';
    this.room = 'Single Room';
  }
}

var guests = [];

function submitForm() {

  var usernameControl = document.getElementById('username');
  var emailControl = document.getElementById('email');
  var phoneControl = document.getElementById('phone');
  var checkinControl = document.getElementById('checkin');
  var checkoutControl = document.getElementById('checkout');
  var roomControl = document.getElementById('room');


  var myGuest = new HotelGuest();

  myGuest.username = usernameControl.value;
  myGuest.email = emailControl.value;
  myGuest.phone = phoneControl.value;
  myGuest.checkin = checkinControl.value;
  myGuest.checkout = checkoutControl.value;
  myGuest.room = roomControl.value;

  guests.push(myGuest);

  usernameControl.value = '';
  emailControl.value = '';
  phoneControl.value = '';
  checkinControl.value = '';
  checkoutControl.value = '';
  roomControl.value = '';

  alert('Guest added successfully');
}

function populateGuestList() {

  var dataTableElement = document.getElementById('dataTableBody');

  for (index = 0; index < guests.length; index++) {

    var newRow = document.createElement("tr");

    var newCell = document.createElement("td");
    newCell.innerHTML = guests[index].username;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].email;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].phone;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].checkin;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].checkout;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].room;
    newRow.append(newCell);

    dataTableElement.append(newRow);

  }
}

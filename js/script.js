class person {
  constructor(username, email, phone) {
    this.username = username;
    this.email = email;
    this.phone = phone;
  }
}

class guest extends person {
  constructor(username, email, phone) {
    super(username, email, phone);
    this.memberId = '';
  }
}

class GuestBooking {
  constructor(username, email, phone, memberId, checkin, checkout, room) {
    this.guest = new guest(username, email, phone);
    this.guest.memberId = memberId;
    this.checkin = checkin;
    this.checkout = checkout;
    this.room = room;
  }
}

var guests = [];

function submitForm() {

  var usernameControl = document.getElementById('username');
  var emailControl = document.getElementById('email');
  var phoneControl = document.getElementById('phone');
  var memberIdControl = document.getElementById('memberId');
  var checkinControl = document.getElementById('checkin');
  var checkoutControl = document.getElementById('checkout');
  var roomControl = document.getElementById('room');

  var myGuest = new GuestBooking(usernameControl.value
    , emailControl.value, phoneControl.value, memberIdControl.value
    , checkinControl.value, checkoutControl.value, roomControl.value);

  guests.push(myGuest);

  usernameControl.value = '';
  emailControl.value = '';
  phoneControl.value = '';
  memberIdControl.value = '';
  checkinControl.value = '';
  checkoutControl.value = '';
  roomControl.value = 'sn';

  alert('Guest added successfully');
}

function populateGuestList() {

  var dataTableElement = document.getElementById('dataTableBody');

  clearTable();

  for (index = 0; index < guests.length; index++) {

    var newRow = document.createElement("tr");

    var newCell = document.createElement("td");
    newCell.innerHTML = guests[index].guest.username;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].guest.email;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].guest.phone;
    newRow.append(newCell);

    newCell = document.createElement("td");
    newCell.innerHTML = guests[index].guest.memberId;
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

  function clearTable() {
    var tableControl = document.getElementById('dataTableBody');
    var varRows = tableControl.rows.length;

    for (var index = varRows - 1; index > -1; index--) {
      tableControl.deleteRow(index);
    }

  }
}

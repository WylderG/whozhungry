 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD_p_80vQAC85hnttvurL1tDF9cR2cSCzA",
    authDomain: "whozhungry-e0979.firebaseapp.com",
    databaseURL: "https://whozhungry-e0979.firebaseio.com",
    projectId: "whozhungry-e0979",
    storageBucket: "whozhungry-e0979.appspot.com",
    messagingSenderId: "235118731232"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
 //function to add donations. pushes data in firebase
  $("#myModalHorizontal").on("click","#add-donations", function (event) {
    var addItemName = $("#itemName").val().trim();
    var addQuantity = $("#quantity").val().trim();
    var addStreetName = $("#streetName").val().trim();
    var addCity = $("#city").val().trim();
    var addZipCode = $("#zipCode").val().trim();
    var addPhoneNumber = $("#phoneNumber").val().trim();
    var addExpirationDate = $("#expirationDate").val().trim();
    database.ref("/Donations").push({
        itemName:addItemName,
        quantity:addQuantity,
        streetName:addStreetName,
        city:addCity,
        zipcode:addZipCode,
        phoneNumber:addPhoneNumber,
        expirateDate:addExpirationDate
  });
  $("#itemName").val("");
  $("#quantity").val("");
  $("#streetName").val("");
  $("#city").val("");
  $("#zipCode").val("");
  $("#phoneNumber").val("");
  $("#expirationDate").val("");
  $('#myModalHorizontal').modal('hide');

  });
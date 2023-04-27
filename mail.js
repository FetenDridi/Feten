const firebaseConfig = {
    apiKey: "AIzaSyDuL2rPlh9XZI2_jWTl2UOGipB6llJ_yuI",
    authDomain: "fetendridi-5863c.firebaseapp.com",
    databaseURL: "https://fetendridi-5863c-default-rtdb.firebaseio.com",
    projectId: "fetendridi-5863c",
    storageBucket: "fetendridi-5863c.appspot.com",
    messagingSenderId: "207545225373",
    appId: "1:207545225373:web:f51d53ed4e8e603f73c474"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
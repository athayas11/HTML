function validateTextbox()
 {
     var box = document.getElementById("name");
     var box2 = document.getElementById("address");
     if (box.value == "" || box2.value == "" )
     {
         alert("The field marked in red cannot be blank");
         return false;
     }
    return true;
}

function validateTextbox1()
{
     var box = document.getElementById("name");
     var box2 = document.getElementById("address");
     alert("before if");
     if (box.value.length < 5 || box2.value.length < 5 )
     {
       alert("Inside if");
       alert("Please enter at least 5 characters");
       return false;
    }
    alert("Afterif")
    return true;
}

function validateTextbox2()
{
   var box = document.getElementById("name");
   var box2 = document.getElementById("address");

   if (box.value.length < 5 || box2.value.length < 5 )
   {
       alert("Please enter at least 5 characters");
       box.focus();
       box.style.border = "solid 3px red";
       return false;
  }
}

function phonenumber(inputtxt)
{
   var phoneno = /^\d{10}$/;
   if((inputtxt.value.match(phoneno))
         {
       return true;
         }
       else
         {
         alert("Invalid Phone Number");
         return false;
         }

}

function isNumber(evt)
{
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
  {
    alert("Please enter only Numbers.");
    return false;
  }

  return true;
}

function ValidateNo()
{
  var phoneNo = document.getElementById('txtPhoneNo');

  if (phoneNo.value == "" || phoneNo.value == null)
  {
    alert("Please enter your Mobile No.");
    return false;
  }
  if (phoneNo.value.length < 10 || phoneNo.value.length > 10)
  {
    alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
    return false;
  }
}

function validatePhoneNumber()
{

    var mob = Xrm.Page.getAttribute("gen_phone").getValue();
    var length = mob.length;
    if (length < 10 || length > 10) {
        alert("Please Enter 10 Digit Number:");
        Xrm.Page.getAttribute("gen_phone").setValue(null);
        return true;
    }
    if (mob > 31 && (mob < 48 || mob > 57)) {} else {
        alert("Please Enter 10 Digit Number:");
        Xrm.Page.getAttribute("gen_phone").setValue(null);
        return true;
    }
}

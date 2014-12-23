var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
  var finalName = oldName;
  // Your code goes here!
  var array = oldName.split(/[ ,]+/);
  var firstName = array[0];
  var lastName = array[1];
  firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName.toUpperCase();
  finalName = firstName + " " + lastName;
  // Don't delete this line!
  return finalName;
};

function nameChangerAnswer(oldName) {
  var finalName = oldName;
  var names = oldName.split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  finalName = names.join(" ");
  return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));/**
 * Created by lwang on 11/18/14.
 */

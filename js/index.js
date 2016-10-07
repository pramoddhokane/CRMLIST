
var options = {
  valueNames: [ 'name', 'born','id' ],
  item: '<li><h3 class="name"></h3> <label class="switch"><input type="checkbox" id="id"><div class="slider round"></div></label> <p> Description : <input type="text" name="fname"> </p> </li>'
};
// <p class="born"></p>
var values = [
  {
    name: 'Jonas Arnklint',
    born: 1985,
    id:110
  },
  {
    name: 'Pramod Dhokane',
    born: 1985,
    id:111
  }];

var userList = new List('users', options, values);

// userList.add({
//   name: "Gustaf Lindqvist",
//   born: 1983
// });
function screamName(name) {
  /* take a name as input and return it in ALL CAPS with exclamation marks */
   let nam = prompt ("Name?");
   name = nam.toUpperCase + '!!!';
   return name;
}

module.exports = screamName;

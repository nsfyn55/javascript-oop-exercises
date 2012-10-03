var mikhail = Object.create(null);

function get_full_name() {
  return this .first_name + ' ' + this.last_name;
}

function set_full_name(new_name){ var names
  names = new_name.trim().split(/\s+/);
  this.first_name = names['0'] || ''
  this.last_name  = 'Last Name No Matter What'
}

Object.defineProperty(mikhail, 'name' , { get: get_full_name
                                        , set: set_full_name 
                                        , configurable: true 
                                        , enumerable: true }) 

mikhail.name = "Mike Kach";

console.log(mikhail.name);
//List All Properties
console.log(Object.getOwnPropertyNames(mikhail));
//List All Properties defined as enumerable
console.log(Object.keys(mikhail));
                  

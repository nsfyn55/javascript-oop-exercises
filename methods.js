var mikhail = { first_name: "Mikhail"
              , last_name:  "Wieb"
              , age:        19 
              , gender:     "Male"

              ,get name(){
                return this.first_name + ' ' + this.last_name
              }

              ,set name(new_name){ var names
                names = new_name.trim().split(/\s+/);
                this.first_name = names['0'] || ''
                this.last_name  = 'Last Name No Matter What'
              }
}

mikhail.greet = function(person) {
  return this.name + ": Why, hello there," + person + '.'
}

console.log(mikhail.greet("Stan"));

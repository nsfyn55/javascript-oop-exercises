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

console.log(mikhail.name)
mikhail.name = 'Mikhail Kach'
console.log(mikhail.name)

/*
  object literals can only appear inside expressions
  the syntax is ambiguous to block statements so it is easy
  to conflate the two

  //Block statement with label
  {foo: 'bar'}

  //Syntax error labels can't be quoted
  {"foo": 'bar'}
  
  //object literal(parenthisis forces parsing as expression)
  ({"foo": 'bar'})

  //parser is already expecting expressions
  var x = {foo: 'bar'}
  
  fn({foo: 'bar'))

  return { foo: 'bar'}

  1, {foo: 'bar'}
 */

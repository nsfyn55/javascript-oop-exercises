/*
 The little objects that carry the sematics of a property are called descriptors

 flags(defaults are false)
 ========================
 writable - whether the property may be changed
 configurable - whether the type of descriptor may be changed or if
                the property can be removed
 enumerable - whether the property is listed in a loop through the 
              properties of the object
 
 Data Descriptors(Hold Concrete Values)  
 ======================================
 value = the value of the property

 Accesor Descriptor(proxy access to concrete value)
 ==================================================
 get() 
 set(new_value)
  
 
 */
var mikhail = Object.create(null);

Object.defineProperty(mikhail, 'name',   { value:       'Mikhail'
                                         , writable:     true
                                         , configurable: true
                                         , enumerable:   true});

Object.defineProperty(mikhail, 'age',    { value:       19 
                                         , writable:     true
                                         , configurable: true
                                         , enumerable:   true});

Object.defineProperty(mikhail, 'gender', { value:       'Male'   
                                         , writable:     true
                                         , configurable: true
                                         , enumerable:   true});

//The above is equivalent to saying 
//these property definitions have no constraints
mikhail['name']    = 'Mikhail'
mikhail['age']     = 19
mikhail['gender']  = 'Male'

//The above again in dot-notation
mikhail.name  = 'Mikhail'
mikhail.age   = 19 
mikhail.gender= 'Male'

//Accessing Properties
mikhail['age']

//Deleting Properties
//delete is an operator and it returns true of successful
delete mikhail['gender']



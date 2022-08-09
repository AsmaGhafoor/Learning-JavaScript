console.log('INDEX 28');

//Object Literal

let obj = {
    name: 'asma',
    id: '10305',
    city: 'Karachi'
}

function Obj(givenName) {
    this.name = givenName
}

// Constructor k obj ko bana kr change kr sakte hain
// Obj k prototype ko override nhi krna hai
Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.getName = function(newName){
    return this.name = newName;
}

let obj2 = new Obj("Asma");
console.log(obj)



// arrow functions

let a = [1,2,3,4,5,6];
let a_double = a.map(a => a*2);
console.log(a_double);

let b = [8,7,5,4,3];
// to return objects wrap around the object in parenthesis in arrow functions
let b_obj = b.map((a,i) => ({val:a*i}) );


// inside constructor functions
function Clock() {
    this.currentTime = new Date();
}

// no need of using the self=this hack
Clock.prototype.start = function() {
    setInterval(()=> this.currentTime = new Date(),1000);
}

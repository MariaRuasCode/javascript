
var random = "random"; 

function Call (){
    var last = "last"
    console.log(last)
    console.log(random) //since random was declared outside, it wraps the fuctions within. So it works
    idk = "idk"
}


function scream (){
    //console.log(last) //this wont work since the var only works within their own functions...
    console.log(idk)
}
console.log(last);
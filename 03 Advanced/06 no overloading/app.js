// function log(type, message) {
//     if(type=="ERR") {
//         console.error(message);
//     }
//     else {
//         console.log(message);
//     }
// }
//
// function log(message) {
//     console.log(message);
// }

function log(type, message) {
    if(message === undefined) {
        console.log(type);
    }
    else {
        if(type=="ERR") {
            console.error(message);
        }
        else {
            console.log(message);
        }
    }
}

log("Hello");
log("ERR", "Ooops");

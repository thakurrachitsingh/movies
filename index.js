const auth = firebase.auth();
function first(){
    const remail = document.getElementById("remail").value
    const rpassword = document.getElementById("rpassword").value
    

    firebase.auth().createUserWithEmailAndPassword(remail, rpassword)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
    console.log(remail);
}

function last(){
    const iemail = document.getElementById("iemail").value
    const ipassword = document.getElementById("ipassword").value
    firebase.auth().signInWithEmailAndPassword(iemail, ipassword)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
    console.log(iemail);
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("./movie.html")
    }
})









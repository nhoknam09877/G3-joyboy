function saveContact() {
    var name = document.getElementById("name").value;
    // input check
    if (name !== "nam") {
        document.getElementById("errorMessage").innerHTML = "M ko phai Nam";
    }
}

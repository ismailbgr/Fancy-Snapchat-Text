var font = 1;

function changefont(x) {
    document.getElementById("txtinput").classList.remove("font" + font)
    document.getElementById("fontselect").classList.remove("font" + font)
    document.getElementById("txtinput").classList.add("font" + x)
    document.getElementById("fontselect").classList.add("font" + x)
    font = x
}

function Showcreate() {
    $("#settxt").slideDown(1000);
    $("#createbutton").hide();
}

function create() {
    var text = document.getElementById("txtinput").value
    if (text !== "") {
        location.hash = font + window.btoa(encodeURI(text))
        location.reload();
    } else {
        alert("Boş Alan Bırakılamaz!!!")
    }
}

window.onload = function () {
    if (location.hash != "") {
        var messagebox = document.getElementById("txt")
        var hash = location.hash;
        var realhash = hash.substring(2)
        var fontinhash = hash.substring(1, 2)
        messagebox.classList.add("font" + fontinhash);
        messagebox.innerHTML = decodeURI(window.atob(realhash))
        document.getElementById("url").value = location.href;
        $("#txtbox").slideDown(1000);
        $("#createbutton").hide();
        $("#header").hide();
        $("#header1").hide();
        $("#header2").hide();
    }
}

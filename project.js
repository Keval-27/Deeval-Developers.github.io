function allfunction() {
    document.getElementById("western-building-1").style.display = "block";
    document.getElementById("western-building-2").style.display = "block";
    document.getElementById("western-building-3").style.display = "block";
    document.getElementById("central-building-1").style.display = "block";
    document.getElementById("central-building-2").style.display = "block";
    document.getElementById("harbour-building-1").style.display = "block";
    document.getElementById("harbour-building-2").style.display = "block";
}


function westernfunction() {
    document.getElementById("western-building-1").style.display = "block";
    document.getElementById("western-building-2").style.display = "block";
    document.getElementById("western-building-3").style.display = "block";
    document.getElementById("central-building-1").style.display = "none";
    document.getElementById("central-building-2").style.display = "none";
    document.getElementById("harbour-building-1").style.display = "none";
    document.getElementById("harbour-building-2").style.display = "none";
}

function centralfunction() {
    document.getElementById("western-building-1").style.display = "none";
    document.getElementById("western-building-2").style.display = "none";
    document.getElementById("western-building-3").style.display = "none";
    document.getElementById("central-building-1").style.display = "block";
    document.getElementById("central-building-2").style.display = "block";
    document.getElementById("harbour-building-1").style.display = "none";
    document.getElementById("harbour-building-2").style.display = "none";
}

function harbourfunction() {
    document.getElementById("western-building-1").style.display = "none";
    document.getElementById("western-building-2").style.display = "none";
    document.getElementById("western-building-3").style.display = "none";
    document.getElementById("central-building-1").style.display = "none";
    document.getElementById("central-building-2").style.display = "none";
    document.getElementById("harbour-building-1").style.display = "block";
    document.getElementById("harbour-building-2").style.display = "block";
}
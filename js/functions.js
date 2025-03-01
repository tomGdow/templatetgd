
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function delay(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

function createATag(anchorText, anchorLink) {
    var aTag = document.createElement("a");
    aTag.href = anchorLink;
    aTag.innerHTML = anchorText;
    return aTag;
}

function createIndexTag() {
    var iTag = document.createElement("div");
    iTag.tabindex = "0"
    iTag.classList.add("icount");
    return iTag;
}

function createOptionTag(myvalue) {
    var oTag = document.createElement("option");
    oTag.setAttribute("value", myvalue);
    return oTag;
}


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

function getBaseFileName(baseFileName) {

    if (window.location.pathname.split(/[\\/]/).pop()) {

        baseFileName = window.location.pathname.split(/[\\/]/).pop().split(".")[0];
    } else {
        baseFileName = "index";
    }

    return baseFileName;

}

function createIndexDivs(targetId, arr) {
    let parent = document.getElementById(targetId);
    let arrModified = arr.slice(1);

    for (const element of arrModified) {
        let customElement = createATag(element.toString(), "./html/" + element + ".html");
        let customDiv = createIndexTag();
        customDiv.appendChild(customElement)
        parent.appendChild(customDiv)
    }
    return parent
}

function getPageTitle(pageTitleArr, pageArr, baseFileName) {

    return pageTitleArr[pageArr.indexOf(baseFileName)];
}

function splitAndCapitalize(baseFileName) {

    return "&nbsp;" + baseFileName.split("_").map((x) => capitalizeFirstLetter(x)).toString().replaceAll(",", " ");
}

function nextPageURL(baseFileName = baseFileName, arr = pageArr, directoryGuide = "./") {

    return directoryGuide + arr[arr.indexOf(baseFileName) + 1] + ".html"
}

function prevPageURL(baseFileName = baseFileName, arr = pageArr, directoryGuide = "./") {

    // var prevPageURL = "./" + pageArr[pageArr.indexOf(baseFileName) - 1] + ".html"

    return directoryGuide + arr[arr.indexOf(baseFileName) - 1] + ".html"
    // return "./html/" + pageArr[pageArr.length - 1] + ".html";
}
function prevPageURLfromIndex(baseFileName = baseFileName, arr = pageArr, directoryGuide = "./html/") {

    // var prevPageURL = "./" + pageArr[pageArr.indexOf(baseFileName) - 1] + ".html"

    // return directoryGuide + arr[arr.indexOf(baseFileName) - 1] + ".html"
    return directoryGuide + arr[arr.length - 1] + ".html";
}

function toIndexPageFromSubdir(arr, directoryGuide = "../") {

    return directoryGuide + arr[0] + ".html"
    // var nextPageURL = "../" + pageArr[0] + ".html"
}

// prevPage.setAttribute("href", prevPageURL)

function search() {

    return (async () => {
        // console.log(Date.now());
        await delay(1);
        if (pageArr.includes(this.value) && (this.value == 'index' || this.value == 'home')) {
            if (this.value == 'home') {

                location.href = "../index.html"
            } else {

                location.href = "../" + this.value + ".html"
            }
        }
        else if (pageArr.includes(this.value)) {

            location.href = "./" + this.value + ".html"
        }

    })();

}


function createOptionTags(targetId = "pageList", arr = pageArr) {

    let parent = document.getElementById(targetId);

    arr.pop();

    for (const element of arr.sort()) {
        console.log(element);
        let customDiv = createOptionTag(element)
        parent.appendChild(customDiv);
    }

    return parent;
}
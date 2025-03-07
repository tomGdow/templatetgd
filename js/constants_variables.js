// const baseFileName = window.location.pathname.split(/[\\/]/).pop().split(".")[0];

let baseFileName;

if (window.location.pathname.split(/[\\/]/).pop()) {

    baseFileName = window.location.pathname.split(/[\\/]/).pop().split(".")[0];
} else {
    baseFileName = "index"
}

//Add New FileName(s)
let pageArr = ["index", "template_first_page"];
pageArr.push("search"); // 'search' should be the last term in pageArr

let pageTitleArr = ["ckr-index", "ckr-template", "ckr-search"];

// Add banner third part
const bannerThirdPart = "bannerPart3";

// Add (meta) keyword list
const myKeywordList = "my, keyword, list";

// Add (meta) description
const myDescription = "my site description";

'use strict'
// page numbers
document.getElementById("total_pages").innerHTML = "&nbsp;" + pageArr.length;
document.getElementById("page_number").innerHTML = pageArr.indexOf(baseFileName) + 1 + "&nbsp;";


document.getElementsByClassName("banner-item-3-alt")[0].innerHTML = pageArr.indexOf(baseFileName) + 1 + "&nbsp;" + "of " + pageArr.length;


// meta description
let el = document.querySelectorAll('[name="description"]');
el[0].setAttribute('content', myDescription);

// meta keywords
let el2 = document.querySelectorAll('[name="keywords"]');
el2[0].setAttribute('content', myKeywordList);






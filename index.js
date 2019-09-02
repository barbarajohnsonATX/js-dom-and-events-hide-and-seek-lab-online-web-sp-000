// Define a function getFirstSelector(selector), 
// which accepts a selector and returns the first element that matches
function getFirstSelector(selector) {
    return document.querySelector(selector);
}

// Define a function nestedTarget() that pulls a .target out of #nested
function nestedTarget() {
    return document.querySelector("#nested .target");
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. 
// (You might need to make use of parseInt()
function increaseRankBy(n) {
    const lis = document.querySelectorAll("ul.ranked-list li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    }
}

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. 
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. 
function deepestChild() {
    const divs = document.querySelectorAll("#grand-node div");
    return divs[divs.length - 1]
}


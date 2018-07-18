import chromep from 'chrome-promise';

console.log("This is content scripts");

const anchorElms = Array.from(document.querySelectorAll("a"));
console.dir(anchorElms);

anchorElms.forEach( (item, index) => {
    item.classList.add("xan-thus-anchor");
    item.addEventListener("mouseenter", (event) => {
        addPrefetchLink(event.target as HTMLAnchorElement);
    });
});

function addPrefetchLink (item: HTMLAnchorElement) {
    const linkSrc = item.href;
    console.log(`linkSrc : ${linkSrc}`);
    const preFetchLink = document.createElement("link");
    preFetchLink.rel = "prefetch";
    preFetchLink.href = linkSrc;
    document.head.appendChild(preFetchLink);
}

// const observeOption = {
//     childList: true,
//     attributes: false,
//     characterData: false,
//     subtree: true
// };
//
// const observer = new MutationObserver((records) => {
//     records.forEach(record => {
//         if (record.type === "childList") {
//
//         }
//     });
// });
//
// observer.observe(document.body, observeOption);
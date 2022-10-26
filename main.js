// ==UserScript==
// @name                Pixiv-DeleteNoNeed
// @name:zh-CN          Pixiv-删除无用元素
// @name:ja             Pixiv-不要な要素を削除
// @namespace           https://github.com/TitanRGB
// @version             1.0
// @description         Hide no need iframe elements which looks like empty space with no meaning.
// @description:zh-CN   隐藏无用的、看起来意义不明的 iframe 元素造成的空白。
// @description:ja      無駄で意味不明に見えるiframe要素による空白を隠す。
// @author              https://github.com/TitanRGB
// @icon                data:image/png;base64,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
// @match               http*://pixiv.net
// @match               http*://pixiv.net/*
// @match               http*://www.pixiv.net
// @match               http*://www.pixiv.net/*
// @license             MPL-2.0
// @license^            Mozilla Public License 2.0
// @grant               unsafeWindow
// @homepageURL         https://github.com/SynRGB/Pixiv-DeleteNoNeed
// @contributionURL     https://github.com/SynRGB/Pixiv-DeleteNoNeed
// @updateURL           https://github.com/SynRGB/Pixiv-DeleteNoNeed/releases/new
// @copyright           Copyright © 2022-PRESENT, TitanRGB (https://github.com/TitanRGB)
// @charset             UTF-8
// @run-at              document-end
// ==/UserScript==

let last_run_time = new Date().getTime();

let main = function () {
    let iframe = document.querySelectorAll('iframe');
    for (let i = 0; i < iframe.length; i++) {
        let parent = iframe[i].parentElement;
        if (parent.tagName === 'LI' && iframe[i].name === 'relatedworks') {
            parent.style.display = 'none';
        }
        if (parent.tagName === 'DIV' && iframe[i].name === 'header') {
            parent.style.display = 'none';
        }
    }
    last_run_time = new Date().getTime();
}

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        if (new Date().getTime() - last_run_time > 100) {
            main();
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("JS script Pixiv-DeleteNoNeed (Pixiv-删除无用元素) loaded. See more details at https://github.com/SynRGB/Pixiv-DeleteNoNeed");
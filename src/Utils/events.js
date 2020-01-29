const onScroll = () => window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250;

const on = (event, callback, els) => {
    if (!event) return;
    els = els || window;
    callback = callback || {};
    for (let i = 0; i < els.length; i++) {
        if (els[i].addEventListener) {
            els[i].addEventListener(event, callback, false);
        }
    }
    return els;
}

const destroy = (event, callback, els) => {
    if (!event) return;
    els = els || window;
    callback = callback || {};
    for (let i = 0; i < els.length; i++) {
        if (els[i].addEventListener) {
            els[i].removeEventListener(event, callback, false);
        }
    }
    return els;
}

export { onScroll, on, destroy };
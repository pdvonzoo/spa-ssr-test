
export default function onScroll() {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
        return true;
    } else {
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    function scrollbarVisible(element) {
        return element.scrollHeight > element.clientHeight
    }

    function scrollContainer(element) {
        if (scrollbarVisible(element)) {
            element.setAttribute("tabindex", "-1")
        } else {
            element.removeAttribute("tabindex")
        }
    }

    scrollContainer(document.querySelector(".main-nav"))

    window.addEventListener('resize', function() {
        scrollContainer(document.querySelector(".main-nav"))
    }, true)
})

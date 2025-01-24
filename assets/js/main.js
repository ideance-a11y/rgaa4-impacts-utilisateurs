document.addEventListener("DOMContentLoaded", function() {
    scrollbarVisible = (element) => {
        return element.scrollHeight > element.clientHeight
    }
    scrollContainer = (element) => {
        if (scrollbarVisible(element)) {
            element.setAttribute("tabindex", "0")
        } else {
            element.removeAttribute("tabindex")
        }
    }

    scrollContainer(document.querySelector(".main-nav"))

    window.addEventListener('resize', function() {
        scrollContainer(document.querySelector(".main-nav"))
    }, true)
})

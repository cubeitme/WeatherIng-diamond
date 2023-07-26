function Drag(dragger, panel) {
    dragger.onmousedown = function (e) {
        panel.style.position = "absolute"
        moveAt(e)
        document.body.appendChild(panel)
        panel.style.zIndex = 1000

        function moveAt(e) {
            panel.style.left = e.pageX - dragger.offsetWidth - 20 / 2 + "px"
            panel.style.top = e.pageY - dragger.offsetHeight - 20 / 2 + "px"
        }

        document.onmousemove = function (e) {
            moveAt(e)
        }

        panel.onmouseup = function () {
            document.onmousemove = null
            dragger.onmouseup = null
        }
    }
}
// Drag panels

/* data_panel.onmousedown = function (e) {
    data_panel.style.position = "absolute"
    moveAt(e)

    document.body.appendChild(data_panel)

    data_panel.style.zIndex = 1000;

    function moveAt(e) {
        data_panel.style.left = e.pageX - data_panel.offsetWidth / 2 + "px"
        data_panel.style.top = e.pageY - data_panel.offsetHeight / 2 + "px"
    }

    document.onmousemove = function (e) {
        moveAt(e)
    }

    data_panel.onmouseup = function () {
        document.onmousemove = null
        data_panel.onmouseup = null
    }
} */
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
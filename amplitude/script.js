const pi = 3.14159 * 25;
// 1

let canvas1 = document.getElementById("canvas_1");
let ctx1 = canvas1.getContext("2d");
// 2
let canvas2 = document.getElementById("canvas_2");
let ctx2 = canvas2.getContext("2d");
// 3
let canvas3 = document.getElementById("canvas_3");
let ctx3 = canvas3.getContext("2d");
// 3
let canvas4 = document.getElementById("canvas_4");
let ctx4 = canvas4.getContext("2d");
// 5
let canvas5 = document.getElementById("canvas_5");
let ctx5 = canvas5.getContext("2d");

//
butt.onclick = function () {
    let inp_1 = document.getElementById("f").value;
    ctx1.strokeStyle = " #AE00B1";
    ctx1.beginPath();
    cx = 0;
    cy = canvas1.height / 2;
    ctx1.moveTo(cx, cy);
    for (i = 1; i < 200; i++) {
        x = i * 2.5;
        y = inp_1 * Math.sin(10 * i / 180 * Math.PI);
        ctx1.lineTo(cx + x, cy + y);
    }
    ctx1.lineWidth = 2;
    ctx1.stroke()

    stage_1.onclick = function () {
        let inp_1 = document.getElementById("f").value;

        ctx2.strokeStyle = "#AE00B1"
        for (let i = 1; i < canvas2.width; i += 5) {
            for (var j = 0; j < canvas2.height; j += 3) {

                y = inp_1 * Math.sin(4 * i / 180 * Math.PI);
                ctx2.strokeRect(i, canvas2.height / 2, 0, y);
            }
        }

        stage_2.onclick = function () {
            let inp_1 = document.getElementById("f").value;


            ctx3.strokeStyle = "#AE00B1"
            for (let i = 1; i < canvas3.width; i += 5) {
                for (var j = 0; j < canvas3.height; j += 3) {

                    y = inp_1 * Math.sin(4 * i / 180 * Math.PI);
                    ctx3.strokeRect(i, canvas3.height / 2, 0, y);
                }
            }

            stage_3.onclick = function () {
                let inp_1 = document.getElementById("f").value;
                let height_4 = canvas4.height - inp_1;
                let width4 = 45;
                ctx4.strokeStyle = "#AE00B1"
                ctx4.lineWidth = 4;

                ctx4.beginPath();
                ctx4.moveTo(0, canvas4.height);
                ctx4.lineTo(width4, canvas4.height);
                ctx4.lineTo(width4, height_4);
                ctx4.lineTo(width4 * 2, height_4);
                ctx4.lineTo(width4 * 2, canvas4.height);
                ctx4.lineTo(width4 * 3, canvas4.height);
                ctx4.lineTo(width4 * 3, height_4);
                ctx4.lineTo(width4 * 4, height_4);
                ctx4.lineTo(width4 * 4, canvas4.height);
                ctx4.lineTo(width4 * 5, canvas4.height);
                ctx4.lineTo(width4 * 5, height_4);
                ctx4.lineTo(width4 * 6, height_4);
                ctx4.lineTo(width4 * 6, canvas4.height);
                ctx4.lineTo(width4 * 7, canvas4.height);
                ctx4.lineTo(width4 * 7, height_4);
                ctx4.lineTo(width4 * 8, height_4);
                ctx4.lineTo(width4 * 8, canvas4.height);
                ctx4.lineTo(width4 * 9, canvas4.height);
                ctx4.stroke();

                stage_4.onclick = function () {
                    let inp_1 = document.getElementById("f").value;
                    let width4 = 45;
                    ctx5.lineWidth = 2;
                    ctx5.strokeStyle = " #AE00B1";

                    ctx5.beginPath();
                    cx = 0;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i <= 18; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i < 19; i++) {
                        x = i * 2.5;
                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 2;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i <= 18; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 3;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i < 19; i++) {
                        x = i * 2.5;
                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 4;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i <= 18; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()


                    ctx5.beginPath();
                    cx = width4 * 5;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i < 19; i++) {
                        x = i * 2.5;
                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 6;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i <= 18; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 7;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i < 19; i++) {
                        x = i * 2.5;
                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()

                    ctx5.beginPath();
                    cx = width4 * 8;
                    cy = canvas5.height / 2;
                    ctx5.moveTo(cx, cy);
                    for (i = 1; i <= 18; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                        ctx5.lineTo(cx + x, cy + y);
                    }
                    ctx5.stroke()
                }


            }
        }
    }
}
// перенос элементов
var DragManager = new function () {

    var dragObject = {};

    var self = this;

    function onMouseDown(e) {
        if (e.which != 1) return;
        var elem = e.target.closest('.draggable');
        if (!elem) return;
        dragObject.elem = elem;
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;
        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return;
        if (!dragObject.avatar) {
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }
            dragObject.avatar = createAvatar(e);
            if (!dragObject.avatar) {
                dragObject = {};
                return;
            }
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e);
        }
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) {
            finishDrag(e);
        }
        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {

        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        avatar.rollback = function () {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {

        dragObject.avatar.hidden = true;
        var elem = document.elementFromPoint(event.clientX, event.clientY);
        dragObject.avatar.hidden = false;

        if (elem == null) {
            return null;
        }

        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function (dragObject, dropElem) { };
    this.onDragCancel = function (dragObject) { };

};


function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}
DragManager.onDragCancel = function (dragObject) {
    dragObject.avatar.rollback();
};

// DragManager.onDragEnd = function (dragObject, dropElem) {
//     dragObject.elem.style.display = 'none';

// };
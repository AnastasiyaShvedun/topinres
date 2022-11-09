const pi = 3.14159 * 25;
let canvas1 = document.getElementById("canvas_1");
let ctx1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("canvas_2");
let ctx2 = canvas2.getContext("2d");
let canvas3 = document.getElementById("canvas_3");
let ctx3 = canvas3.getContext("2d");
let canvas4 = document.getElementById("canvas_4");
let ctx4 = canvas4.getContext("2d");
let canvas5 = document.getElementById("canvas_5");
let ctx5 = canvas5.getContext("2d");
let inp_1 = 30;

var DragManager = new function () {
    var dragObject = {};

    var self = this;

    function onMouseDown(e) {

        if (e.which != 1) return;

        var elem = e.target.closest('.draggable');
        if (!elem) return;

        dragObject.elem = elem;

        // запомним, что элемент нажат на текущих координатах pageX/pageY
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
        if (!dragObject.elem) return; // элемент не зажат

        if (!dragObject.avatar) { // если перенос не начат...
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            // если мышь передвинулась в нажатом состоянии недостаточно далеко
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                return;
            }

            // начинаем перенос
            dragObject.avatar = createAvatar(e); // создать аватар
            if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
                dragObject = {};
                return;
            }

            // аватар создан успешно
            // создать вспомогательные свойства shiftX/shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e); // отобразить начало переноса
        }

        // отобразить перенос объекта при каждом движении мыши
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) { // если перенос идет
            finishDrag(e);
        }

        // перенос либо не начинался, либо завершился
        // в любом случае очистим "состояние переноса" dragObject
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

        // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        // функция для отмены переноса
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

        // инициировать начало переноса
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {
        // спрячем переносимый элемент
        dragObject.avatar.hidden = true;

        // получить самый вложенный элемент под курсором мыши
        var elem = document.elementFromPoint(event.clientX, event.clientY);

        // показать переносимый элемент обратно
        dragObject.avatar.hidden = false;

        if (elem == null) {
            // такое возможно, если курсор мыши "вылетел" за границу окна
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


function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}
DragManager.onDragCancel = function (dragObject) {
    dragObject.avatar.rollback();
};

DragManager.onDragEnd = function (dragObject, dropElem) {
    dragObject.elem.style.display = 'none';



    play.onclick = function () {


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
        ctx1.stroke();

        // дискретизация
        stage_1.onclick = function () {

            ctx2.clearRect(0, 0, 407, 68)
            ctx2.strokeStyle = "#AE00B1";
            let fr = document.getElementById("Frequency").value;
            for (let i = 1; i < canvas2.width; i += 4) {
                for (var j = 0; j < canvas2.height; j += 3) {
                    y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                    ctx2.strokeRect(i, canvas2.height / 2, 0, y);
                }
            }
            let dicr = document.getElementById("dicr");
            dicr.style.display = 'block';
            dicr.id = '';
            close1.onclick = function () {
                const div = document.querySelector('.dickr');
                div.style.display = 'none';
            }

            // смена частоты
            butt1.onclick = function () {
                //change f1
                let fr = document.getElementById("Frequency").value;
                ctx1.clearRect(0, 0, 407, 68);
                ctx1.strokeStyle = " #AE00B1";
                ctx1.beginPath();
                cx = 0;
                cy = canvas1.height / 2;
                ctx1.moveTo(cx, cy);
                for (i = 1; i < 200; i++) {
                    x = i * 2.5;
                    y = inp_1 * Math.sin(2.5 * fr * i / 180 * Math.PI);
                    ctx1.lineTo(cx + x, cy + y);
                }
                ctx1.lineWidth = 2;
                ctx1.stroke()

                //change f2
                ctx2.clearRect(0, 0, 407, 68)
                ctx2.strokeStyle = "#AE00B1";

                for (let i = 1; i < canvas2.width; i += 4) {
                    for (var j = 0; j < canvas2.height; j += 3) {
                        y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                        ctx2.strokeRect(i, canvas2.height / 2, 0, y);

                    }
                }
            }

            //квантование
            stage_2.onclick = function () {
                //f3
                ctx3.clearRect(0, 0, 407, 68)
                let fr = document.getElementById("Frequency").value;
                ctx3.strokeStyle = "#AE00B1"
                for (let i = 1; i < canvas3.width; i += 4) {
                    for (var j = 0; j < canvas3.height; j += 3) {
                        y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                        ctx3.strokeRect(i, canvas3.height / 2, 0, y);
                    }
                }
                butt1.onclick = function () {
                    //change f2
                    ctx2.clearRect(0, 0, 407, 68)
                    ctx2.strokeStyle = "#AE00B1";
                    let fr = document.getElementById("Frequency").value;
                    for (let i = 1; i < canvas2.width; i += 4) {
                        for (var j = 0; j < canvas2.height; j += 3) {
                            y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                            ctx2.strokeRect(i, canvas2.height / 2, 0, y);

                        }
                    }
                    //change f3
                    ctx3.clearRect(0, 0, 407, 68)
                    ctx3.strokeStyle = "#AE00B1"
                    for (let i = 1; i < canvas3.width; i += 4) {
                        for (var j = 0; j < canvas3.height; j += 3) {
                            y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                            ctx3.strokeRect(i, canvas3.height / 2, 0, y);
                        }
                    }
                    //change f1
                    ctx1.clearRect(0, 0, 407, 68);
                    ctx1.strokeStyle = " #AE00B1";
                    ctx1.beginPath();
                    cx = 0;
                    cy = canvas1.height / 2;
                    ctx1.moveTo(cx, cy);
                    for (i = 1; i < 200; i++) {
                        x = i * 2.5;
                        y = inp_1 * Math.sin(2.5 * fr * i / 180 * Math.PI);
                        ctx1.lineTo(cx + x, cy + y);
                    }
                    ctx1.lineWidth = 2;
                    ctx1.stroke()
                }
                let kvant = document.getElementById("kvant");

                kvant.style.display = 'block';
                kvant.id = '';

                close2.onclick = function () {
                    const div = document.querySelector('.kvant');
                    div.style.display = 'none';
                }

                // кодирование
                stage_3.onclick = function () {
                    //h4
                    ctx4.clearRect(0, 0, 407, 68)
                    ctx4.clearRect(0, 0, 407, 68)
                    let fr = document.getElementById("Frequency").value;
                    let height_4 = canvas4.height - inp_1;
                    console.log('height_4')
                    let width4 = 45;
                    ctx4.beginPath();
                    ctx4.strokeStyle = "#AE00B1"
                    ctx4.lineWidth = 4;
                    ctx4.moveTo(0, canvas4.height);
                    ctx4.lineTo(width4 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 2 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 2 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 3 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 3 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 4 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 4 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 5 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 5 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 6 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 6 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 7 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 7 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 8 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 8 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 9 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 9 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 10 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 10 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 11 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 11 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 12 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 12 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 13 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 13 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 14 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 14 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 15 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 15 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 16 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 16 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 17 * 4 / fr, canvas4.height);
                    ctx4.lineTo(width4 * 17 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 18 * 4 / fr, height_4);
                    ctx4.lineTo(width4 * 18 * 4 / fr, canvas4.height);
                    ctx4.stroke();

                    // смена частоты
                    butt1.onclick = function () {
                        //change f4
                        ctx4.clearRect(0, 0, 407, 68)
                        let fr = document.getElementById("Frequency").value;
                        let height_4 = canvas4.height - inp_1;
                        console.log('height_4')
                        let width4 = 45;
                        ctx4.beginPath();
                        ctx4.strokeStyle = "#AE00B1"
                        ctx4.lineWidth = 4;
                        ctx4.moveTo(0, canvas4.height);
                        ctx4.lineTo(width4 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 2 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 2 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 3 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 3 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 4 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 4 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 5 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 5 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 6 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 6 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 7 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 7 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 8 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 8 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 9 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 9 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 10 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 10 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 11 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 11 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 12 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 12 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 13 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 13 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 14 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 14 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 15 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 15 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 16 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 16 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 17 * 4 / fr, canvas4.height);
                        ctx4.lineTo(width4 * 17 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 18 * 4 / fr, height_4);
                        ctx4.lineTo(width4 * 18 * 4 / fr, canvas4.height);
                        ctx4.stroke();
                        //change f2
                        ctx2.clearRect(0, 0, 407, 68)
                        ctx2.strokeStyle = "#AE00B1";
                        for (let i = 1; i < canvas2.width; i += 4) {
                            for (var j = 0; j < canvas2.height; j += 3) {
                                y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                                ctx2.strokeRect(i, canvas2.height / 2, 0, y);

                            }
                        }
                        //change f3
                        ctx3.clearRect(0, 0, 407, 68)
                        ctx3.strokeStyle = "#AE00B1"
                        for (let i = 1; i < canvas3.width; i += 4) {
                            for (var j = 0; j < canvas3.height; j += 3) {
                                y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                                ctx3.strokeRect(i, canvas3.height / 2, 0, y);
                            }
                        }
                        //change f1
                        ctx1.clearRect(0, 0, 407, 68);
                        ctx1.strokeStyle = " #AE00B1";
                        ctx1.beginPath();
                        cx = 0;
                        cy = canvas1.height / 2;
                        ctx1.moveTo(cx, cy);
                        for (i = 1; i < 200; i++) {
                            x = i * 2.5;
                            y = inp_1 * Math.sin(2.5 * fr * i / 180 * Math.PI);
                            ctx1.lineTo(cx + x, cy + y);
                        }
                        ctx1.lineWidth = 2;
                        ctx1.stroke()
                    }

                    let kod = document.getElementById("kod");

                    kod.style.display = 'block';
                    kod.id = '';

                    close3.onclick = function () {
                        const div = document.querySelector('.kod');
                        div.style.display = 'none';
                    }

                    // манипуляция
                    stage_4.onclick = function () {
                        //f5
                        ctx5.clearRect(0, 0, 407, 140)
                        let fr = document.getElementById("Frequency").value;
                        ctx5.clearRect(0, 0, 407, 140)
                        let input = 2.5;
                        ctx5.lineWidth = 3;
                        ctx5.strokeStyle = " #AE00B1";

                        for (let j = 0; j < 200; j += 2) {
                            ctx5.beginPath();
                            cx = 18 * input * 4 / fr * j;
                            cy = canvas5.height / 2;
                            ctx5.moveTo(cx, cy);
                            for (i = 1; i <= 18 * 4 / fr; i++) {
                                x = i * input;
                                y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                ctx5.lineTo(cx + x, cy + y);
                            }
                            ctx5.stroke()
                            for (let z = 1; z < 200; z += 2) {

                                ctx5.beginPath();
                                cx = 18 * input * 4 / fr * z;
                                cy = canvas5.height / 2;
                                ctx5.moveTo(cx, cy);
                                for (i = 1; i <= 18 * 4 / fr; i++) {
                                    x = i * input;
                                    y = inp_1 * 1.8 * Math.sin(30 * i / 180 * Math.PI);
                                    ctx5.lineTo(cx + x, cy + y);
                                }
                                ctx5.stroke()
                            }
                        }
                        // 

                        if (fr == 2.5) {
                            ctx5.clearRect(0, 0, 407, 140)
                            ctx5.stroke()
                            for (let j = 0; j < 200; j += 2) {
                                ctx5.beginPath();
                                cx = 18 * input * j * 4 / fr;
                                cy = canvas5.height / 2;
                                ctx5.moveTo(cx, cy);
                                for (i = 1; i <= 19 * 4 / fr; i++) {
                                    x = i * input;
                                    y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                    ctx5.lineTo(cx + x, cy + y);
                                }
                                ctx5.stroke()
                                for (let z = 1; z < 200; z += 2) {

                                    ctx5.beginPath();
                                    cx = 18 * input * z * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 19.5 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                }
                            }
                        }
                        else if (fr == 3.5) {
                            ctx5.clearRect(0, 0, 407, 140)
                            ctx5.stroke()
                            for (let j = 0; j < 200; j += 2) {
                                ctx5.beginPath();
                                cx = 16.5 * input * j * 4 / fr;
                                cy = canvas5.height / 2;
                                ctx5.moveTo(cx, cy);
                                for (i = 1; i <= 16.5 * 4 / fr; i++) {
                                    x = i * input;
                                    y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                    ctx5.lineTo(cx + x, cy + y);
                                }
                                ctx5.stroke()
                                for (let z = 1; z < 200; z += 2) {

                                    ctx5.beginPath();
                                    cx = 16.5 * input * z * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 16.5 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                }
                            }
                        }
                        else if (fr == 4) {
                            ctx5.clearRect(0, 0, 407, 140)
                            ctx5.stroke()
                            for (let j = 0; j < 200; j += 2) {
                                ctx5.beginPath();
                                cx = 18 * input * j * 4 / fr;
                                cy = canvas5.height / 2;
                                ctx5.moveTo(cx, cy);
                                for (i = 1; i <= 18 * 4 / fr; i++) {
                                    x = i * input;
                                    y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                    ctx5.lineTo(cx + x, cy + y);
                                }
                                ctx5.stroke()
                                for (let z = 1; z < 200; z += 2) {

                                    ctx5.beginPath();
                                    cx = 18 * input * z * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                }
                            }
                        }

                        butt1.onclick = function () {
                            //change f5
                            let fr = document.getElementById("Frequency").value;
                            ctx5.clearRect(0, 0, 407, 140)
                            let input = 2.5;
                            ctx5.lineWidth = 3;
                            ctx5.strokeStyle = " #AE00B1";

                            for (let j = 0; j < 200; j += 2) {
                                ctx5.beginPath();
                                cx = 18 * input * 4 / fr * j;
                                cy = canvas5.height / 2;
                                ctx5.moveTo(cx, cy);
                                for (i = 1; i <= 18 * 4 / fr; i++) {
                                    x = i * input;
                                    y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                    ctx5.lineTo(cx + x, cy + y);
                                }
                                ctx5.stroke()
                                for (let z = 1; z < 200; z += 2) {

                                    ctx5.beginPath();
                                    cx = 18 * input * 4 / fr * z;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * 1.8 * Math.sin(30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                }
                            }
                            // 

                            if (fr == 2.5) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 19 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 19.5 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            else if (fr == 3.5) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 16.5 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 16.5 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 16.5 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 16.5 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            else if (fr == 4) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            else if (fr == 4.5) {
                                if (fr == 4.5) {
                                    ctx5.clearRect(0, 0, 407, 140)
                                    ctx5.stroke()
                                    for (let j = 0; j < 200; j += 2) {
                                        ctx5.beginPath();
                                        cx = 18 * input * j * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * Math.sin(33.5 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                        for (let z = 1; z < 200; z += 2) {

                                            ctx5.beginPath();
                                            cx = 18 * input * z * 4 / fr;
                                            cy = canvas5.height / 2;
                                            ctx5.moveTo(cx, cy);
                                            for (i = 1; i <= 18 * 4 / fr; i++) {
                                                x = i * input;
                                                y = inp_1 * 1.8 * Math.sin(-33.8 * i / 180 * Math.PI);
                                                ctx5.lineTo(cx + x, cy + y);
                                            }
                                            ctx5.stroke()
                                        }
                                    }
                                }
                            }
                            if (fr == 5) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(39 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(-39 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            if (fr == 5.5) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 16.5 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(30 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            if (fr == 6.5) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(35 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(35 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            if (fr == 7) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(38 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(37 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            if (fr == 7.5 || fr == 8) {
                                ctx5.clearRect(0, 0, 407, 140)
                                ctx5.stroke()
                                for (let j = 0; j < 200; j += 2) {
                                    ctx5.beginPath();
                                    cx = 18 * input * j * 4 / fr;
                                    cy = canvas5.height / 2;
                                    ctx5.moveTo(cx, cy);
                                    for (i = 1; i <= 18 * 4 / fr; i++) {
                                        x = i * input;
                                        y = inp_1 * Math.sin(40 * i / 180 * Math.PI);
                                        ctx5.lineTo(cx + x, cy + y);
                                    }
                                    ctx5.stroke()
                                    for (let z = 1; z < 200; z += 2) {

                                        ctx5.beginPath();
                                        cx = 18 * input * z * 4 / fr;
                                        cy = canvas5.height / 2;
                                        ctx5.moveTo(cx, cy);
                                        for (i = 1; i <= 18 * 4 / fr; i++) {
                                            x = i * input;
                                            y = inp_1 * 1.8 * Math.sin(40 * i / 180 * Math.PI);
                                            ctx5.lineTo(cx + x, cy + y);
                                        }
                                        ctx5.stroke()
                                    }
                                }
                            }
                            //change f4
                            ctx4.clearRect(0, 0, 407, 68);
                            let height_4 = canvas4.height - inp_1;
                            console.log('height_4')
                            let width4 = 45;
                            ctx4.beginPath();
                            ctx4.strokeStyle = "#AE00B1"
                            ctx4.lineWidth = 4;
                            ctx4.moveTo(0, canvas4.height);
                            ctx4.lineTo(width4 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 2 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 2 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 3 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 3 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 4 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 4 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 5 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 5 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 6 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 6 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 7 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 7 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 8 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 8 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 9 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 9 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 10 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 10 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 11 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 11 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 12 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 12 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 13 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 13 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 14 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 14 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 15 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 15 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 16 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 16 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 17 * 4 / fr, canvas4.height);
                            ctx4.lineTo(width4 * 17 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 18 * 4 / fr, height_4);
                            ctx4.lineTo(width4 * 18 * 4 / fr, canvas4.height);
                            ctx4.stroke();
                            //change f2
                            ctx2.clearRect(0, 0, 407, 68)
                            ctx2.strokeStyle = "#AE00B1";
                            for (let i = 1; i < canvas2.width; i += 4) {
                                for (var j = 0; j < canvas2.height; j += 3) {
                                    y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                                    ctx2.strokeRect(i, canvas2.height / 2, 0, y);

                                }
                            }
                            //change f3
                            ctx3.clearRect(0, 0, 407, 68)
                            ctx3.strokeStyle = "#AE00B1"
                            for (let i = 1; i < canvas3.width; i += 4) {
                                for (var j = 0; j < canvas3.height; j += 3) {
                                    y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
                                    ctx3.strokeRect(i, canvas3.height / 2, 0, y);
                                }
                            }
                            //change f1
                            ctx1.clearRect(0, 0, 407, 68);
                            ctx1.strokeStyle = " #AE00B1";
                            ctx1.beginPath();
                            cx = 0;
                            cy = canvas1.height / 2;
                            ctx1.moveTo(cx, cy);
                            for (i = 1; i < 200; i++) {
                                x = i * 2.5;
                                y = inp_1 * Math.sin(2.5 * fr * i / 180 * Math.PI);
                                ctx1.lineTo(cx + x, cy + y);
                            }
                            ctx1.lineWidth = 2;
                            ctx1.stroke()
                        }
                    }
                }
            }
        }
    }
};
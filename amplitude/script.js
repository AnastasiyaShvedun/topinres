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

// let dicr = document.getElementById("dicr");
// stage_1.onclick = function () {
//     dicr.style.display = 'block';
//     dicr.id = '';
// }
// close1.onclick = function () {
//     const div = document.querySelector('.dickr');
//     div.style.display = 'none';
// }
// let kvant = document.getElementById("kvant");
// stage_2.onclick = function () {
//     kvant.style.display = 'block';
//     kvant.id = '';
// }
// close2.onclick = function () {
//     const div = document.querySelector('.kvant');
//     div.style.display = 'none';
// }
// let kod = document.getElementById("kod");
// stage_3.onclick = function () {
//     kod.style.display = 'block';
//     kod.id = '';
// }
// close3.onclick = function () {
//     const div = document.querySelector('.kod');
//     div.style.display = 'none';
// }




// перенос элементов 1
// var DragManager1 = new function () {

//     var dragObject = {};

//     var self = this;

//     function onMouseDown1(e) {
//         if (e.which != 1) return;
//         var elem = e.target.closest('.draggable1');
//         if (!elem) return;
//         dragObject.elem = elem;
//         dragObject.downX = e.pageX;
//         dragObject.downY = e.pageY;
//         return false;
//     }

//     function onMouseMove1(e) {
//         if (!dragObject.elem) return;
//         if (!dragObject.avatar) {
//             var moveX = e.pageX - dragObject.downX;
//             var moveY = e.pageY - dragObject.downY;

//             if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
//                 return;
//             }
//             dragObject.avatar = createAvatar1(e);
//             if (!dragObject.avatar) {
//                 dragObject = {};
//                 return;
//             }
//             var coords = getCoords1(dragObject.avatar);
//             dragObject.shiftX = dragObject.downX - coords.left;
//             dragObject.shiftY = dragObject.downY - coords.top;

//             startDrag1(e);
//         }
//         dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
//         dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

//         return false;
//     }

//     function onMouseUp1(e) {
//         if (dragObject.avatar) {
//             finishDrag1(e);
//         }
//         dragObject = {};
//     }

//     function finishDrag1(e) {
//         var dropElem = findDroppable1(e);

//         if (!dropElem) {
//             self.onDragCancel1(dragObject);
//         } else {
//             self.onDragEnd1(dragObject, dropElem);
//         }
//     }

//     function createAvatar1(e) {

//         var avatar = dragObject.elem;
//         var old = {
//             parent: avatar.parentNode,
//             nextSibling: avatar.nextSibling,
//             position: avatar.position || '',
//             left: avatar.left || '',
//             top: avatar.top || '',
//             zIndex: avatar.zIndex || ''
//         };

//         avatar.rollback1 = function () {
//             old.parent.insertBefore(avatar, old.nextSibling);
//             avatar.style.position = old.position;
//             avatar.style.left = old.left;
//             avatar.style.top = old.top;
//             avatar.style.zIndex = old.zIndex
//         };

//         return avatar;
//     }

//     function startDrag1(e) {
//         var avatar = dragObject.avatar;
//         document.body.appendChild(avatar);
//         avatar.style.zIndex = 9999;
//         avatar.style.position = 'absolute';
//     }

//     function findDroppable1(event) {

//         dragObject.avatar.hidden = true;
//         var elem = document.elementFromPoint(event.clientX, event.clientY);
//         dragObject.avatar.hidden = false;

//         if (elem == null) {
//             return null;
//         }

//         return elem.closest1('.droppable1');
//     }

//     document.onmousemove = onMouseMove1;
//     document.onmouseup = onMouseUp1;
//     document.onmousedown = onMouseDown1;

//     this.onDragEnd1 = function (dragObject, dropElem) { };
//     this.onDragCancel1 = function (dragObject) { };

// };


// function getCoords1(elem) {
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// }
// DragManager1.onDragCancel1 = function (dragObject) {
//     dragObject.avatar.rollback1();
// };
// // перенос элементов 2
// var DragManager2 = new function () {

//     var dragObject = {};

//     var self = this;

//     function onMouseDown(e) {
//         if (e.which != 1) return;
//         var elem = e.target.closest('.draggable2');
//         if (!elem) return;
//         dragObject.elem = elem;
//         dragObject.downX = e.pageX;
//         dragObject.downY = e.pageY;
//         return false;
//     }

//     function onMouseMove(e) {
//         if (!dragObject.elem) return;
//         if (!dragObject.avatar) {
//             var moveX = e.pageX - dragObject.downX;
//             var moveY = e.pageY - dragObject.downY;

//             if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
//                 return;
//             }
//             dragObject.avatar = createAvatar(e);
//             if (!dragObject.avatar) {
//                 dragObject = {};
//                 return;
//             }
//             var coords = getCoords2(dragObject.avatar);
//             dragObject.shiftX = dragObject.downX - coords.left;
//             dragObject.shiftY = dragObject.downY - coords.top;

//             startDrag(e);
//         }
//         dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
//         dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

//         return false;
//     }

//     function onMouseUp(e) {
//         if (dragObject.avatar) {
//             finishDrag(e);
//         }
//         dragObject = {};
//     }

//     function finishDrag(e) {
//         var dropElem = findDroppable(e);

//         if (!dropElem) {
//             self.onDragCancel(dragObject);
//         } else {
//             self.onDragEnd(dragObject, dropElem);
//         }
//     }

//     function createAvatar(e) {

//         var avatar = dragObject.elem;
//         var old = {
//             parent: avatar.parentNode,
//             nextSibling: avatar.nextSibling,
//             position: avatar.position || '',
//             left: avatar.left || '',
//             top: avatar.top || '',
//             zIndex: avatar.zIndex || ''
//         };

//         avatar.rollback = function () {
//             old.parent.insertBefore(avatar, old.nextSibling);
//             avatar.style.position = old.position;
//             avatar.style.left = old.left;
//             avatar.style.top = old.top;
//             avatar.style.zIndex = old.zIndex
//         };

//         return avatar;
//     }

//     function startDrag(e) {
//         var avatar = dragObject.avatar;
//         document.body.appendChild(avatar);
//         avatar.style.zIndex = 9999;
//         avatar.style.position = 'absolute';
//     }

//     function findDroppable(event) {

//         dragObject.avatar.hidden = true;
//         var elem = document.elementFromPoint(event.clientX, event.clientY);
//         dragObject.avatar.hidden = false;

//         if (elem == null) {
//             return null;
//         }

//         return elem.closest('.droppable2');
//     }

//     document.onmousemove = onMouseMove;
//     document.onmouseup = onMouseUp;
//     document.onmousedown = onMouseDown;

//     this.onDragEnd = function (dragObject, dropElem) { };
//     this.onDragCancel2 = function (dragObject) { };

// };


// function getCoords2(elem) {
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// }
// DragManager2.onDragCancel2 = function (dragObject) {
//     dragObject.avatar.rollback();
// };

//  перенос элементов 3
// var DragManager3 = new function () {

//     var dragObject3 = {};

//     var self = this;

//     function onMouseDown(e) {
//         if (e.which != 1) return;
//         var elem = e.target.closest('.draggable3');
//         if (!elem) return;
//         dragObject3.elem = elem;
//         dragObject3.downX = e.pageX;
//         dragObject3.downY = e.pageY;
//         return false;
//     }

//     function onMouseMove(e) {
//         if (!dragObject3.elem) return;
//         if (!dragObject3.avatar) {
//             var moveX = e.pageX - dragObject3.downX;
//             var moveY = e.pageY - dragObject3.downY;

//             if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
//                 return;
//             }
//             dragObject3.avatar = createAvatar(e);
//             if (!dragObject3.avatar) {
//                 dragObject3 = {};
//                 return;
//             }
//             var coords = getCoords(dragObject3.avatar);
//             dragObject3.shiftX = dragObject3.downX - coords.left;
//             dragObject3.shiftY = dragObject3.downY - coords.top;

//             startDrag(e);
//         }
//         dragObject3.avatar.style.left = e.pageX - dragObject3.shiftX + 'px';
//         dragObject3.avatar.style.top = e.pageY - dragObject3.shiftY + 'px';

//         return false;
//     }

//     function onMouseUp(e) {
//         if (dragObject3.avatar) {
//             finishDrag(e);
//         }
//         dragObject3 = {};
//     }

//     function finishDrag(e) {
//         var dropElem = findDroppable(e);

//         if (!dropElem) {
//             self.onDragCancel(dragObject3);
//         } else {
//             self.onDragEnd(dragObject3, dropElem);
//         }
//     }

//     function createAvatar(e) {

//         var avatar = dragObject3.elem;
//         var old = {
//             parent: avatar.parentNode,
//             nextSibling: avatar.nextSibling,
//             position: avatar.position || '',
//             left: avatar.left || '',
//             top: avatar.top || '',
//             zIndex: avatar.zIndex || ''
//         };

//         avatar.rollback = function () {
//             old.parent.insertBefore(avatar, old.nextSibling);
//             avatar.style.position = old.position;
//             avatar.style.left = old.left;
//             avatar.style.top = old.top;
//             avatar.style.zIndex = old.zIndex
//         };

//         return avatar;
//     }

//     function startDrag(e) {
//         var avatar = dragObject3.avatar;
//         document.body.appendChild(avatar);
//         avatar.style.zIndex = 9999;
//         avatar.style.position = 'absolute';
//     }

//     function findDroppable(event) {

//         dragObject3.avatar.hidden = true;
//         var elem = document.elementFromPoint(event.clientX, event.clientY);
//         dragObject3.avatar.hidden = false;

//         if (elem == null) {
//             return null;
//         }

//         return elem.closest('.droppable3');
//     }

//     document.onmousemove = onMouseMove;
//     document.onmouseup = onMouseUp;
//     document.onmousedown = onMouseDown;

//     this.onDragEnd = function (dragObject3, dropElem) { };
//     this.onDragCancel = function (dragObject3) { };

// };


// function getCoords3(elem) {
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// }
// DragManager3.onDragCancel = function (dragObject3) {
//     dragObject3.avatar.rollback();
// };

// // перенос элементов 4
// var DragManager4 = new function () {

//     var dragObject4 = {};

//     var self = this;

//     function onMouseDown(e) {
//         if (e.which != 1) return;
//         var elem = e.target.closest('.draggable4');
//         if (!elem) return;
//         dragObject4.elem = elem;
//         dragObject4.downX = e.pageX;
//         dragObject4.downY = e.pageY;
//         return false;
//     }

//     function onMouseMove(e) {
//         if (!dragObject4.elem) return;
//         if (!dragObject4.avatar) {
//             var moveX = e.pageX - dragObject4.downX;
//             var moveY = e.pageY - dragObject4.downY;

//             if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
//                 return;
//             }
//             dragObject4.avatar = createAvatar(e);
//             if (!dragObject4.avatar) {
//                 dragObject4 = {};
//                 return;
//             }
//             var coords = getCoords4(dragObject4.avatar);
//             dragObject4.shiftX = dragObject4.downX - coords.left;
//             dragObject4.shiftY = dragObject4.downY - coords.top;

//             startDrag(e);
//         }
//         dragObject4.avatar.style.left = e.pageX - dragObject4.shiftX + 'px';
//         dragObject4.avatar.style.top = e.pageY - dragObject4.shiftY + 'px';

//         return false;
//     }

//     function onMouseUp(e) {
//         if (dragObject4.avatar) {
//             finishDrag(e);
//         }
//         dragObject4 = {};
//     }

//     function finishDrag(e) {
//         var dropElem = findDroppable(e);

//         if (!dropElem) {
//             self.onDragCancel(dragObject4);
//         } else {
//             self.onDragEnd(dragObject4, dropElem);
//         }
//     }

//     function createAvatar(e) {

//         var avatar = dragObject4.elem;
//         var old = {
//             parent: avatar.parentNode,
//             nextSibling: avatar.nextSibling,
//             position: avatar.position || '',
//             left: avatar.left || '',
//             top: avatar.top || '',
//             zIndex: avatar.zIndex || ''
//         };

//         avatar.rollback = function () {
//             old.parent.insertBefore(avatar, old.nextSibling);
//             avatar.style.position = old.position;
//             avatar.style.left = old.left;
//             avatar.style.top = old.top;
//             avatar.style.zIndex = old.zIndex
//         };

//         return avatar;
//     }

//     function startDrag(e) {
//         var avatar = dragObject4.avatar;
//         document.body.appendChild(avatar);
//         avatar.style.zIndex = 9999;
//         avatar.style.position = 'absolute';
//     }

//     function findDroppable(event) {

//         dragObject4.avatar.hidden = true;
//         var elem = document.elementFromPoint(event.clientX, event.clientY);
//         dragObject4.avatar.hidden = false;

//         if (elem == null) {
//             return null;
//         }

//         return elem.closest('.droppable4');
//     }

//     document.onmousemove = onMouseMove;
//     document.onmouseup = onMouseUp;
//     document.onmousedown = onMouseDown;

//     this.onDragEnd = function (dragObject4, dropElem) { };
//     this.onDragCancel = function (dragObject4) { };

// };


// function getCoords4(elem) {
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// }
// DragManager4.onDragCancel = function (dragObject4) {
//     dragObject4.avatar.rollback();
// };






// DragManager.onDragEnd = function (dragObject, dropElem) {
// play.onclick = function () {


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

    ctx2.clearRect(0, 0, 407, 68)
    ctx2.strokeStyle = "#AE00B1";
    let fr = document.getElementById("Frequency").value;
    for (let i = 1; i < canvas2.width; i += 4) {
        for (var j = 0; j < canvas2.height; j += 3) {
            y = inp_1 * Math.sin(fr * i / 180 * Math.PI);
            ctx2.strokeRect(i, canvas2.height / 2, 0, y);
        }
    }
    // let dicr = document.getElementById("dicr");

    // dicr.style.display = 'block';
    // dicr.id = '';

    // close1.onclick = function () {
    //     const div = document.querySelector('.dickr');
    //     div.style.display = 'none';
    // }
    butt1.onclick = function () {
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
        ctx1.stroke();
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
    }
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
        // let kvant = document.getElementById("kvant");

        // kvant.style.display = 'block';
        // kvant.id = '';

        // close2.onclick = function () {
        //     const div = document.querySelector('.kvant');
        //     div.style.display = 'none';
        // }
        stage_3.onclick = function () {
            //h4
            ctx4.clearRect(0, 0, 407, 68)
            let height_4 = canvas4.height - inp_1;
            console.log('height_4')
            let width4 = 45;
            ctx4.beginPath();
            ctx4.strokeStyle = "#AE00B1"
            ctx4.lineWidth = 4;
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
            // let kod = document.getElementById("kod");

            // kod.style.display = 'block';
            // kod.id = '';

            // close3.onclick = function () {
            //     const div = document.querySelector('.kod');
            //     div.style.display = 'none';
            // }
            stage_4.onclick = function () {
                //f5

                ctx5.clearRect(0, 0, 407, 140)
                let fr = document.getElementById("Frequency").value;
                ctx5.clearRect(0, 0, 407, 140)
                let input = 2.5;

                ctx5.lineWidth = 3;
                ctx5.strokeStyle = " #AE00B1";
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
                            y = inp_1 * 1.8 * Math.sin(30 * i / 180 * Math.PI);
                            ctx5.lineTo(cx + x, cy + y);
                        }
                        ctx5.stroke()
                    }
                }

                butt1.onclick = function () {
                    //     //change f5
                    let fr = document.getElementById("Frequency").value;
                    ctx5.clearRect(0, 0, 407, 140)
                    let input = 2.5;
                    ctx5.lineWidth = 3;
                    ctx5.strokeStyle = " #AE00B1";


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
                    else {
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
                                    y = inp_1 * 1.8 * Math.sin(30 * i / 180 * Math.PI);
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

        // butt2.onclick = function () {
        //     ctx5.clearRect(0, 0, 407, 140)
        //     let input = document.getElementById("time").value;
        //     let width4 = 45;
        //     ctx5.lineWidth = 3;
        //     ctx5.strokeStyle = " #AE00B1";

        //     ctx5.stroke()
        //     for (let j = 0; j < 200; j += 2) {
        //         ctx5.beginPath();
        //         cx = 18 * input * j;
        //         cy = canvas5.height / 2;
        //         ctx5.moveTo(cx, cy);
        //         for (i = 1; i <= 18; i++) {
        //             x = i * input;
        //             y = inp_1 * Math.sin(30 * i / 180 * Math.PI);
        //             ctx5.lineTo(cx + x, cy + y);
        //         }
        //         ctx5.stroke()
        //         for (let z = 1; z < 200; z += 2) {

        //             ctx5.beginPath();
        //             cx = 18 * input * z;
        //             cy = canvas5.height / 2;
        //             ctx5.moveTo(cx, cy);
        //             for (i = 1; i <= 18; i++) {
        //                 x = i * input;
        //                 y = inp_1 * 1.8 * Math.sin(-30 * i / 180 * Math.PI);
        //                 ctx5.lineTo(cx + x, cy + y);
        //             }
        //             ctx5.stroke()
        //         }
        //     }
        // }
    }
}
// }
// }

// };

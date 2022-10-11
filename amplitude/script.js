butt.onclick = function () {
    //1
    let number_1 = Number(document.getElementById('first-number').value); //значение инпута
    let one_0 = document.getElementById("one_zero") //нашли элемент с нулем картинкой
    let one_1 = document.getElementById("one_one")//нашли элемент с единицей картинкой

    if (number_1 === 0) {
        one_0.classList.toggle("one_0")  // если 0, то добавляем картинку с нулем
        one_0.id = ""
    } else if (number_1 === 1) {
        one_1.classList.toggle("one_1")// если 1, то добавляем картинку с единицей
        one_1.id = ""
    }
    //2
    let number_2 = Number(document.getElementById('second-number').value); //значение инпута
    let two_0 = document.getElementById("two_zero") //нашли элемент с нулем картинкой
    let two_1 = document.getElementById("two_one")//нашли элемент с единицей картинкой

    if (number_2 === 0) {
        two_0.classList.toggle("two_0")  // если 0, то добавляем картинку с нулем
        two_0.id = ""
    } else if (number_2 === 1) {
        two_1.classList.toggle("two_1")// если 1, то добавляем картинку с единицей
        two_1.id = ""
    }
    //3
    let number_3 = Number(document.getElementById('third-number').value); //значение инпута
    let three_0 = document.getElementById("three_zero") //нашли элемент с нулем картинкой
    let three_1 = document.getElementById("three_one")//нашли элемент с единицей картинкой

    if (number_3 === 0) {
        three_0.classList.toggle("three_0")  // если 0, то добавляем картинку с нулем
        three_0.id = ""
    } else if (number_3 === 1) {
        three_1.classList.toggle("three_1")// если 1, то добавляем картинку с единицей
        three_1.id = ""
    }
    //4
    let number_4 = Number(document.getElementById('fourth-number').value); //значение инпута
    let four_0 = document.getElementById("four_zero") //нашли элемент с нулем картинкой
    let four_1 = document.getElementById("four_one")//нашли элемент с единицей картинкой

    if (number_4 === 0) {
        four_0.classList.toggle("four_0")  // если 0, то добавляем картинку с нулем
        four_0.id = ""
    } else if (number_4 === 1) {
        four_1.classList.toggle("four_1")// если 1, то добавляем картинку с единицей
        four_1.id = ""
    }
    //5
    let number_5 = Number(document.getElementById('fifth-number').value); //значение инпута
    let five_0 = document.getElementById("five_zero") //нашли элемент с нулем картинкой
    let five_1 = document.getElementById("five_one")//нашли элемент с единицей картинкой

    if (number_5 === 0) {
        five_0.classList.toggle("five_0")  // если 0, то добавляем картинку с нулем
        five_0.id = ""
    } else if (number_5 === 1) {
        five_1.classList.toggle("five_1")// если 1, то добавляем картинку с единицей
        five_1.id = ""
    }
}
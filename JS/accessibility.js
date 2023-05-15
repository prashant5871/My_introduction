let tmp = document.getElementsByClassName('main');
function Myfun(value) {
    if (value === 'increase') {
        for (let i = 0; i < tmp.length; i++) {
            tmp[i].style.fontSize = '30px';
        }
    }
    else if (value === 'decrease') {
        for (let i = 0; i < tmp.length; i++) {
            tmp[i].style.fontSize = '15px';
        }
    } else {
        for (let i = 0; i < tmp.length; i++) {
            tmp[i].style.fontSize = '16px';
        }
    }
}
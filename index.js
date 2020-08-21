const total = document.getElementById("total");
const ratio = document.getElementById("ratio");
const wish = document.getElementById("wish");
const btn = document.querySelector('.btn-result');
let rWin = document.querySelector('.win');
let rLoss = document.querySelector('.loss');
let rFinal = document.querySelector('.final');

function Switch(array1){
    let array2 = array1.split(''), array3 = "";
    for(let i = 0; i < array2.length; i++){
        if (isNaN(array2[i]) == false){
            array3 += array2[i];
        }
        if(array2[i] == ',' || array2[i] == '.'){
            array3 += '.';
        }
        if(array2[i] == '-'){
            array3 += '-';
        }
    }
    return Number(array3);
}

//Validation tổng số trận
const checkTotal = (total) => {
    if (!total.value){
        return "Hãy nhập tổng số trận đấu!";
    }
    else if (Number(total.value) < 0){
        return "Hãy nhập lại số trận đấu!";
    }
    else
    return true;
}
//var messageErrolTotal = checkTotal(total);

//Valisation tỉ lệ thắng
const checkRatio = (ratio) => {
    let ratioTemp = ratio.value;
    let ratioTemp2 = Switch(ratioTemp);

    if (!ratio.value){
        return "Hãy nhập tỉ lệ thắng!";
    }
    else if (ratioTemp2 > 100){
        return "Tỉ lệ thắng thì không thế lớn hơn 100%";
    }
    else if (ratioTemp2 < 0){
        return "Tỉ lệ thắng thì không thế nhỏ hơn 0%";
    }    
    else
    return true;
}
//let messageErrolRatio = checkRatio(ratio);

const checkWish = (wish) => {

}

let showErrol = (element, message) => {
    element.style.display = 'block';
    element.innerHTML = message;
    element.style.color = 'red';
}



var cacl = function(){
    let totalTemp = Number(total.value);
    let ratioTemp = ratio.value;
    let ratioTemp2 = Switch(ratioTemp) / 100;
    let wishTemp = wish.value;
    let wishTemp2 = (Switch(wishTemp) / 100);
    console.log(wishTemp2);

    let win = "Không thể tính số trận thắng !", loss = "Không thể tính số trận thua !";
    let resultT = "Không thể tính!";
    
    if (checkTotal(total) === true && checkRatio(ratio) === true){
        win = Math.floor(totalTemp * ratioTemp2);
        console.log(totalTemp);
        console.log(ratioTemp2);
        console.log(wishTemp2);
        loss = totalTemp - win;
        if(checkRatio(wish) === true){
            resultT = Math.floor(((wishTemp2 - ratioTemp2) * totalTemp ) / (1 - wishTemp2));
        }
    }
    if(checkTotal(total) === true || checkRatio(ratio) === true){
        rWin.innerHTML = "Số trận thắng là: " + win;
        rWin.style.display = 'block';
        rWin.style.color = 'black';
        rLoss.innerHTML = "Số trận thua là: " + loss;
        rLoss.style.display = 'block';
        rLoss.style.color = 'black';
        if (ratioTemp2 < wishTemp2){
            rFinal.innerHTML = "Số trận cần đánh THẮNG LIÊN TỤC để đạt được " + wishTemp2 * 100 + "% là: " + resultT;
        }
        else if (ratioTemp2 > wishTemp2){
            rFinal.innerHTML = "Số trận cần đánh THUA LIÊN TỤC để đạt được " + wishTemp2 * 100 + "% là: " + (resultT * -1);
        }
        rFinal.style.display = 'block';
        rFinal.style.color = 'black';
    }
    if (checkTotal(total) !== true){
        showErrol(rWin, checkTotal(total));
    }
    if (checkRatio(ratio) !== true){
        showErrol(rLoss, checkRatio(ratio));
    }
    if (checkRatio(wish) !== true){
        showErrol(rFinal, checkRatio(wish));
    }
    console.log(resultT);
}
btn.addEventListener("click", cacl);




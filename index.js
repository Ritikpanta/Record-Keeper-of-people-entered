let count = 0;
let save_1 = document.getElementById("save-btn");
let count_value = document.getElementById("count");
let entries = document.getElementById("entries");
let increament = document.getElementById("increment-btn");
let decreases = document.getElementById("decrease-btn");

increament.onclick = function increment(){
    count = count + 1;
    console.log(count);
    count_value.innerText = count;
}


save_1.onclick = function save() {
   let countstr = count + " - ";

    console.log(count);
    entries.textContent += countstr;
    count_value.textContent = 0;
    count = 0;
}

decreases.onclick = function decrease(){
    count = count - 1;
    count_value.textContent = count;
}



const input = document.getElementById('txt_lsd');
const button = document.getElementById('btn_check');
const label = document.getElementById('lbl_valid');

input.addEventListener("keyup", event => {
    input.value = formatLSD(input.value);
    console.log(formatLSD(input.value));
});

button.addEventListener("click", event =>{
    let valid = checkLSDFormat(input.value, false);
    label.innerHTML = valid;
});
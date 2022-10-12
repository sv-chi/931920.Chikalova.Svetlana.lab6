const buttons = document.querySelectorAll("button");
const left_img = document.querySelector(".leftpic");
const right_img = document.querySelector(".rightpic");

buttons.forEach(button => {
    button.onclick = () => {
        switch (button.className) {
            case 'left':
                left_img.style.width = '90%';
                right_img.style.width = '10%';
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'none';
                break;
            case 'both':
                left_img.style.width = '50%';
                right_img.style.width = '50%';
                left_img.querySelector("img").style.display = 'block';
                right_img.querySelector("img").style.display = 'block';
                break;
            case 'right':
                left_img.style.width = '10%';
                right_img.style.width = '90%';              
                right_img.querySelector("img").style.display = 'block';  
                left_img.querySelector("img").style.display = 'none';
                break;
        }
    }
})
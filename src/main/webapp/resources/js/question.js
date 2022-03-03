const items = document.querySelectorAll('.question');
const arrows = document.querySelectorAll('.arrow');

    function openCloseAnswer() {
        const answerId = this.id.replace('que', 'ans');
        

        if(document.getElementById(answerId).style.display === 'block') {
            document.getElementById(answerId).style.display = 'none';
            arrows[this].style.transform = 'rotate(360deg)';
            
        } else {
            document.getElementById(answerId).style.display = 'block';
            arrows[this].style.transform = 'rotate(180deg)';
            
        }
    }

    items.forEach(item => item.addEventListener('click', openCloseAnswer));
    

    


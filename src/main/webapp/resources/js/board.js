const items = document.querySelectorAll('.question'); // 클래스를 가져온다 
      
        function openCloseAnswer() {
          const answerId = this.id.replace('que', 'ans');   // 가져온 다음에 
      
          if(document.getElementById(answerId).style.display === 'block') {
            document.getElementById(answerId).style.display = 'none';
            document.getElementById(this.id + '-toggle').textContent = '+';
          } else {
            document.getElementById(answerId).style.display = 'block';
            document.getElementById(this.id + '-toggle').textContent = '-';
          }
        }
      
items.forEach(item => item.addEventListener('click', openCloseAnswer));
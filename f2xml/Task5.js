let btn = document.getElementById('toggleBtn');

btn.addEventListener('click' , toggleBulb);
    function toggleBulb(){
        if(btn.textContent.includes('On')){
            btn.textContent = "Dark Mode Off";
            btn.className = 'btn btn-outline-success';
            
        }
        else{

            btn.textContent = "Dark Mode On";
            btn.className = 'btn btn-outline-red';
            
        }
    }
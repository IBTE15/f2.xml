let btn = document.getElementById('add_btn');
btn.addEventListener('click' , addfood);


    function addfood(e){
        let currentBtn = e.currentTarget;
        console.log(currentBtn);
        let currentInput = currentBtn.previousElementSibling;
        console.log(currentInput.value);
        let currentFoodName = currentInput.value;
        let newLi = document.createElement('li');
        newLi.className = `list-group-item d-flex justify-content-between my-1`;
        newLi.innerHTML = ` <h2 class="flex-grow-1">${currentFoodName}</h2>
                            <button class="btn btn-dark mx-2">Read</button>
                            <button class="btn btn-danger" onclick="removeFood(this)">Delete</button>`

        let parentList = document.getElementById('parentlist');
        parentList.appendChild(newLi);

        if(btn.click){
            currentInput.value = ""
        }
    }

    function removeFood(currentElement){
        currentElement.parentElement.remove()
    }
   

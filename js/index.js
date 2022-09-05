const textMove = document.querySelector(".text");


    const loadText = () => {
        setTimeout (() =>{
            textMove.textContent = "Sports Bike";
        }, 0);

        setTimeout (() =>{
            textMove.textContent = "Available";
        }, 4000);

        setTimeout (() =>{
            textMove.textContent = "Here";
        }, 8000);

        
    }
    loadText();
    setInterval(loadText, 12000); 

//Option 2 for event habdler-->


function makeYellow(){
        document.body.style.backgroundColor = 'yellow';
    }

    function makeRed(){
        document.body.style.backgroundColor = 'red';
    }

// option 3: get Element by Id and then set onclick

const btnMakeBlue = document.getElementById('btn-make-blue');
    btnMakeBlue.onclick = function makeBlue(){
        document.body.style.background = 'blue';
        // document.body.button.style.color = 'White';
        // document.body.button.style.backgroundColor = 'greenyellow';
         
        btnMakeBlue.style.color = 'white';
        btnMakeBlue.style.backgroundColor = 'tomato';
    }

//option 4: differen version
// This example for just understand
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple)
btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}
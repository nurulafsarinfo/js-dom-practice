console.log('This is event handler')

document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            const pageTitleElement = document.getElementById('page-title');
            pageTitleElement.innerText = 'Updated page title text';
           
        })


document.getElementById('btn-login').addEventListener('click',
    function(){
        const userInfo = document.getElementById('user-info');
        userInfo.innerText = 'User logged in Successfully!';
    }
)

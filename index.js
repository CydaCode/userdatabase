// 1. API URL

const url = 'https://jsonplaceholder.typicode.com/users'

// 2. Fetch user from the API
function fetchUsers() {
    // 2.1 Make use of the browser to fetch API
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // 2.2 Passing the user data to the renderUsers funtion
        renderUsers(data)
    })
}




// 3.1 render the user in the DOM
function renderUsers(usersData) {
    console.log(usersData);

    const ul = document.getElementById('user-list-container')
    console.log(ul)

    // 3.2 Render an li tag for each of the user
    usersData.forEach((user, i) => {
        console.log(user, i + 1)
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${i + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class='username'>${user.username}</span>
        `;

        // 3.2 Append the current user li tag to the ul tag
        ul.appendChild(li)
    })     
    
}



// 4. Add a search function to the DOM
function searchUsersByUsername() {
    const input = document.getElementById('search');
    const ul = document.getElementById('user-list-container');
    const inputValue = input.value.toUpperCase()
    const userList = ul.querySelectorAll('li')


    // Loop through all the users nd render the ones that match the search
    for (i=0; i < userList.length; i++) {
        const usernameSpanTag = userList[i].querySelector('.username');
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase()
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
    
        if (isMatch) {
            userList[i].style.display = 'block';
        } else {
            userList[i].style.display = 'none'
        }
    }
}


// 5. Calling the function
fetchUsers()
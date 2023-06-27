// Add your code here
function submitData(name,email){

    const details={
        name: name,
        email: email
    }

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(details)
    })
    .then (response => response.json())
    .then(data => alert(data))

    .catch(error =>{
        alert('There is an error!')
        const p=document.createElement('p');
        const body=document.querySelector('body')
        body.appendChild(p);
        p.innerHTML=`${error.message}`
    })
    
}

submitData('Samuel', 'sammymaiko721@gmail.com');
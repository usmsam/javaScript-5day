let form = document.querySelector('form'),
    inputs = form.querySelectorAll('input'),
    userName = form.querySelector('.userName'),
    userLastName = form.querySelector('.userLastName'),
    userAge = form.querySelector('.userAge'),
    select = form.querySelector('select');
let output = document.querySelector('.output-tbody');
let selVal = select.value;
select.addEventListener('change' , (e)=>{
    selVal = e.target.value
})

let object = [
    { id: 1, userName: 'Samandar', lastName: 'Usmanov', age: 17 , hobby : 'Java Script' }
]
function setStorage() {
    localStorage.setItem('data' , JSON.stringify(object));
}
setStorage();







form.addEventListener('submit', (e) => {
    e.preventDefault();
        if(inputs[0].value =='' || inputs[1].value =='' || inputs[2].value ==''){
           alert('Ma\'lumotlarni kiriting !!')
        }else{
            let newObj = {
                id: object.length +1,
                userName : userName.value,
                lastName : userLastName.value,
                age: userAge.value,
                hobby: selVal
            };

          
            object.push(newObj)
            setStorage();
            render();
            inputs.forEach( i => i.value = '')
        }
})

function render() {
    output.innerHTML ='';
    let dataObj = JSON.parse(localStorage.getItem('data'))
    dataObj.map((item) => {
        
        let th = `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.userName}</td>
            <td>${item.lastName}</td>
            <td>${item.age}</td>
            <td>${item.hobby}</td>
        </tr>`;

        output.innerHTML += th;
    })
}
render();
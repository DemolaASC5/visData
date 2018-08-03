// document.getElementById("data").innerHTML = data.results[0].name.first ;
let index = Math.round(Math.random()*4); 
let firstName = data.results[index].name.first;
let lastName = data.results[index].name.last; 
let fullname = document.querySelector('#name');
fullname.innerText = `${firstName} ${lastName}`; 

let pic = data.results[index].picture.large; 
let profile_pic = document.querySelector('#profile_pic'); 
profile_pic.src = pic; 

let gender = data.results[index].gender; 
let gender_html = document.querySelector('#gender'); 
gender_html.innerText = gender; 

let email = data.results[index].email; 
let email_html = document.querySelector('#email'); 
email_html.innerText = email; 

let age = data.results[index].registered.age; 
let age_html = document.querySelector('#age'); 
age_html.innerText = age;

let state = data.results[index].location.state; 
let city = data.results[index].location.city; 
let street = data.results[index].location.street; 
let address = document.querySelector('#address'); 
address.innerText = street + ", " + city + ", " + state; 
index++;

//Math.round(Math.random()*9); 
let firstName2 = data.results[index].name.first;
let lastName2 = data.results[index].name.last; 
let fullname2 = document.querySelector('#name2');
fullname2.innerText = `${firstName2} ${lastName2}`; 

let pic2 = data.results[index].picture.large; 
let profile_pic2 = document.querySelector('#profile_pic2'); 
profile_pic2.src = pic2; 

let gender2 = data.results[index].gender; 
let gender_html2 = document.querySelector('#gender2'); 
gender_html2.innerText = gender2; 

let email2 = data.results[index].email; 
let email_html2 = document.querySelector('#email2'); 
email_html2.innerText = email2; 

let age2 = data.results[index].registered.age; 
let age_html2 = document.querySelector('#age2'); 
age_html2.innerText = age;

let state2 = data.results[index].location.state; 
let city2 = data.results[index].location.city; 
let street2 = data.results[index].location.street; 
let address2 = document.querySelector('#address2'); 
address2.innerText = street2 + ", " + city2 + ", " + state2; 
index++; 

let firstName3 = data.results[index].name.first;
let lastName3 = data.results[index].name.last; 
let fullname3 = document.querySelector('#name3');
fullname3.innerText = `${firstName3} ${lastName3}`; 

let pic3 = data.results[index].picture.large; 
let profile_pic3 = document.querySelector('#profile_pic3'); 
profile_pic3.src = pic3; 

let gender3 = data.results[index].gender; 
let gender_html3 = document.querySelector('#gender3'); 
gender_html3.innerText = gender3; 

let email3 = data.results[index].email; 
let email_html3 = document.querySelector('#email3'); 
email_html3.innerText = email3; 

let age3 = data.results[index].registered.age; 
let age_html3 = document.querySelector('#age3'); 
age_html3.innerText = age3;

let state3 = data.results[index].location.state; 
let city3 = data.results[index].location.city; 
let street3 = data.results[index].location.street; 
let address3 = document.querySelector('#address3'); 
address3.innerText = "            " + street3 + ", " + city3 + ", " + state3; 
index++; 

let firstName4 = data.results[index].name.first;
let lastName4 = data.results[index].name.last; 
let fullname4 = document.querySelector('#name4');
fullname4.innerText = `${firstName4} ${lastName4}`; 

let pic4 = data.results[index].picture.large; 
let profile_pic4 = document.querySelector('#profile_pic4'); 
profile_pic4.src = pic4; 

let gender4 = data.results[index].gender; 
let gender_html4 = document.querySelector('#gender4'); 
gender_html4.innerText = gender4; 

let email4 = data.results[index].email; 
let email_html4 = document.querySelector('#email4'); 
email_html4.innerText = email4; 

let age4 = data.results[index].registered.age; 
let age_html4 = document.querySelector('#age4'); 
age_html4.innerText = age4;

let state4 = data.results[index].location.state; 
let city4 = data.results[index].location.city; 
let street4 = data.results[index].location.street; 
let address4 = document.querySelector('#address4'); 
address4.innerText = street4 + ", " + city4 + ", " + state4; 
index++; 

let firstName5 = data.results[index].name.first;
let lastName5 = data.results[index].name.last; 
let fullname5 = document.querySelector('#name5');
fullname5.innerText = `${firstName5} ${lastName5}`; 

let pic5 = data.results[index].picture.large; 
let profile_pic5 = document.querySelector('#profile_pic5'); 
profile_pic5.src = pic5; 

let gender5 = data.results[index].gender; 
let gender_html5 = document.querySelector('#gender5'); 
gender_html5.innerText = gender5; 

let email5 = data.results[index].email; 
let email_html5 = document.querySelector('#email5'); 
email_html5.innerText = email5; 

let age5 = data.results[index].registered.age; 
let age_html5 = document.querySelector('#age5'); 
age_html5.innerText = age5;

let state5 = data.results[index].location.state; 
let city5 = data.results[index].location.city; 
let street5 = data.results[index].location.street; 
let address5 = document.querySelector('#address5'); 
address5.innerText = street5 + ", " + city5 + ", " + state5; 
index++; 

const connection = document.addEventListener('click',onClick)
function onClick(event){
    alert("Request sent successfully. Refresh the page for more connections.");
}
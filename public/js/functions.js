let showLogin = () =>{
    let wrapper = document.querySelector('.wrapper');
    let wrapper2 = document.querySelector('.wrapper2');
    if(wrapper.className === 'wrapper' && wrapper2.className === 'wrapper2'){
        wrapper.classList.add('wrapper-desactive');
        wrapper2.classList.add('wrapper2-active');
    }else{
        backHomeLogin();
    }
}
let backHomeLogin = () =>{
    let wrapper = document.querySelector('.wrapper-desactive');
    let wrapper2 = document.querySelector('.wrapper2-active');

    wrapper.classList.remove('wrapper-desactive');
    wrapper2.classList.remove('wrapper2-active');
    
}

let showRegister = () =>{
    let wrapper = document.querySelector('.wrapper');
    let wrapper3 = document.querySelector('.wrapper3');

    if(wrapper.className === 'wrapper' && wrapper3.className === 'wrapper3'){
        wrapper.classList.add('wrapper-desactive');
        wrapper3.classList.add('wrapper3-active');
    }else{
        backHomeRegister();
    }
}

let backHomeRegister = () =>{
    let wrapper = document.querySelector('.wrapper-desactive');
    let wrapper3 = document.querySelector('.wrapper3-active');

    wrapper.classList.remove('wrapper-desactive');
    wrapper3.classList.remove('wrapper3-active');


}
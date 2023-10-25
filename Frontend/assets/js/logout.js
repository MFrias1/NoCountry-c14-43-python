const logout=()=>{
    sessionStorage.removeItem('token');
    window.location ='../index.html';
};
const logoutButton =document.querySelector("logOut");
logoutButton.addEventListener('click',logout);
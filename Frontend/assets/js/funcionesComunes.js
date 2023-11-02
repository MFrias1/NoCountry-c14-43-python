async function getUserById(id) {
    const response = await fetch('https://nocountry-api.onrender.com/users/'+ id);
    const data = await response.json();
    localStorage.setItem('coins',data.coins);
    }
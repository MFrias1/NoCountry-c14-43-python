const endpointBase = 'https://crudcrud.com/api/0e1f1ebd4fb247288315833ab214c3e9/pepito';

async function Post() {
    const resp = await axios.post(endpointBase, {
        firstName: 'Fred',
        lastName: 'Flintstone'
      });
    console.log(resp);
}
const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const GetUser = (count = 6, page = 1) => fetch(`${BASE_URL}/users?count=${count}&page=${page}`)
  .then(response => response.json())
  .then(data => data.users)

export const GetPosition = () => fetch(`${BASE_URL}/positions`)
  .then(response => response.json())
  .then(data => data.positions)

export async function getToken() {
  let response = await fetch(`${BASE_URL}/token`);
  let data = await response.json();
  
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return data;
}


  export const addUser = (data, token) => {
    const url = `${BASE_URL}/users`;
    const formData = new FormData();
    
    for (let key in data) {
      formData.append(key, data[key])
    }

    const action = {
      method: 'POST',
      headers: { token: token },
      body: formData,
    };
    //console.log(formData);
    return fetch(url, action);
  };


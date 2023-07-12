//Component to manage logic of apis

//creating global variables for api requests
const DOMAIN_URL = 'https://legend.lnbits.com/';

const ADMIN_URL = DOMAIN_URL + 'api/v1/';
const ADMIN_KEY = 'eb8d3f250f0340feb18affd60baf4757';
const ADMIN_ID_FOR_USR_MNG = '031e0e39187846c5b4253b7c71ec8ed6';

const USR_MNG_URL = DOMAIN_URL + 'usermanager/api/v1/';
const USR_MNG_KEY = '4dfeea8d9ecf4611ace81e5cf929a6a9';

//get data from lnbits api
const apiRequestGet = async (action, usr) => {
    let key = '';
    let url = '';

    switch (usr) {
        case 1:
            key = ADMIN_KEY;
            url = ADMIN_URL;
            break;
        case 2:
            key = USR_MNG_KEY;
            url = USR_MNG_URL;
            break;
        default: 
            console.log('Specify an announced kind of user')
            break;
    }

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        }
    }

    const response = await fetch(url + action, options);
    const json = await response.json();

    if (json.error) {
        console.log(json.error);
    }

    return json;
}

//post requests for lnbits api
const apiRequestPost = async (action, usr, body) => {
    let key = '';
    let url = '';

    switch (usr) {
        case 1:
            key = ADMIN_KEY;
            url = ADMIN_URL;
            break;
        case 2:
            key = USR_MNG_KEY;
            url = USR_MNG_URL;
            break;
        default: 
            console.log('Specify an announced kind of user')
            break;
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(url + action, options);
    const json = await response.json();

    if (json.error) {
        console.log(json.error);
    }

    return json;
}

//structures for create user
const createBody = (username, walletname, email, password) => {
    let body = {
        'admin_id': ADMIN_ID_FOR_USR_MNG,
        'user_name': username,
        'wallet_name': walletname,
        'email': email,
        'password': password
    }
    return body;
}

const formUser = document.getElementById('create-user-form');

formUser.addEventListener('submit', (e) => {
    e.preventDefault();
});
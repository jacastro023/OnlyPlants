import tokenService from './tokenService';

const BASE_URL = '/api/details'

export function create(postId, comment){
	return fetch(`${BASE_URL}/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken(),
                "Content-Type": "application/json"
        }
        
        }).then(res => res.json());
}

  export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }
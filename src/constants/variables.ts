export const CONFIG_FETCH: RequestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: null,
}
const NAME = 'nathaniel'
export const URL_BASE = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com'
export const GET_EMPLOYEES = `${URL_BASE}/v1/examen/employees/${NAME}`

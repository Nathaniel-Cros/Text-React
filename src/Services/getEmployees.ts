import {
    CONFIG_FETCH,
    GET_EMPLOYEES,
} from '../constants/variables'

const GetEmployees = async () => {
    try {
        const response = await fetch(GET_EMPLOYEES, {...CONFIG_FETCH})
        return await response.json()
    }catch (e) {
        return { success: false, error: e}
    }
}

export default GetEmployees

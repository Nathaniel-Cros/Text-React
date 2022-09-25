import {
    CONFIG_FETCH,
    GET_EMPLOYEES,
} from '../constants/variables'

const AddEmployee = async (name:string, last_name:string, birthday:string) => {
    try {
        const response = await fetch(GET_EMPLOYEES,
            {
                ...CONFIG_FETCH,
                method: 'POST',
                body: JSON.stringify({ name, last_name, birthday }),
            })
        return await response.json()
    }catch (e) {
        return { success: false, error: e}
    }
}

export default AddEmployee

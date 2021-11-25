import Axios from 'axios'

const $axios = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

//Example of a cross-cutting concern - client api error-handling
$axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("got error")
        console.error(error)

        throw error;
    });


class ColorsService {
    static getRandomColor() {
        return $axios
            .get('colors/generate-new-color')
            .then(response => response.data)
    }
}

const service = {
    ColorsService
}

export default service

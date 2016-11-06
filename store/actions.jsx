import axios from 'axios';

export function getAllEvents() {
    return dispatch => {
        return axios.get('http://api.itboost.org:88/app_dev.php/api/events')
            .then(axiosResponse => axiosResponse.data.response)
            .then(response => {
                dispatch({
                    type: 'FETCH_ALL_EVENTS_SUCCESS',
                    events: response.items
                })
            })
            .catch(error => console.log(error));
    }
}

export function getEvent(id) {
    return dispatch => {
        return axios.get(`http://api.itboost.org:88/app_dev.php/api/event/${id}`)
            .then(axiosResponse => axiosResponse.data.response.event)
            .then(response => {
                dispatch({
                    type: 'FETCH_EVENT_SUCCESS',
                    event: {
                        id: response.id,
                        name: response.name,
                        description: response.description,
                        subscribers_count: response.subscribers_count,
                        created_at: response.created_at
                    }
                })
            })
            .catch(error => console.log(error));
    }
}
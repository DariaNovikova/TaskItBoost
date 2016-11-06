export default function eventReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_EVENTS_SUCCESS':
            return action.events;
        case 'FETCH_EVENT_SUCCESS':
            if (!state.length)
                return [action.event];

            var updated = [];
            for (e in state) {
                updated.push((e.id === action.event.id) ? action.event : e);
            }
            return updated;
        default:
            return state;
    }
}
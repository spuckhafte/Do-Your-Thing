export default function syncLocalStorage(object, command) {
    if (object === undefined) { localStorage.setItem('tasks', '') }
    else {
        if (localStorage.getItem('tasks') === '') {
            localStorage.setItem('tasks', JSON.stringify(object))
        }
    }
}
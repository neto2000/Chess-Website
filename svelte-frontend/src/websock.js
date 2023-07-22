import { writable } from 'svelte/store';

const messageStore = writable('');

const socket = new WebSocket('ws://127.0.0.1:9000/ws');

// Connection opened
socket.addEventListener('open', function (event) {
    console.log("It's open");
});

// Listen for messages
socket.addEventListener('message', function (event) {
    messageStore.set(event.data);
});

const sendMessage = (message) => {
	if (socket.readyState <= 1) {
		socket.send(message);
	}

	console.log("send")
}


export default {
	subscribe: messageStore.subscribe,
	sendMessage
}
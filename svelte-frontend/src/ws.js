import { writable } from 'svelte/store'

const webSock = () => {
  let socket = new WebSocket("ws://localhost:9000/ws");

  // our temperature is now a store with initial value 0
  const response = writable(0);

  // now we don't need to change this function, the change will be propaged
  // by the store itself
  const getResponse = () => {
    return response;
  }

  const sendMessage = (msg) => {
    console.log("send")
    socket.send(msg)
  }

  socket.onmessage = function (event) {
    // temperature = data.message;

    // we update the value of our (writable) store, 
    // this will propagate the change
    response.set(event.data)
  };

  // ... rest of the code

  return { getResponse, sendMessage };
};

export default webSock;

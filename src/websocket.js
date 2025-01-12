// src/websocket.js

export const connectWebSocket = () => {
    // Create WebSocket connection to the server
    const ws = new WebSocket('ws://localhost:5000'); // Make sure to match the port
  
    // Handle the open event - when the connection is established
    ws.onopen = () => {
      console.log('WebSocket connected');
      ws.send('Hello from React Client!'); // Send an initial message to the server
    };
  
    // Handle incoming messages from the server
    ws.onmessage = (event) => {
      console.log('Message received from server:', event.data);
    };
  
    // Handle any errors during WebSocket communication
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    // Handle connection closure
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  
    return ws; // Return the WebSocket instance to use elsewhere
  };
  
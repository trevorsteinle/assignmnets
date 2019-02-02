// import React, { Component } from 'react';
// import Websocket from 'react-websocket';

// class WebSocketDemo extends Component {

//     constructor(props) {
//         super(props);
//         this.state = [];
//     }

//     handleData(data) {
//         let result = JSON.parse(data);
//         this.setState({ ticker: result.movement });
//     }

//     render() {
//         return (
//             <div>
//                 Count: <strong>{this.state.count}</strong>

//                 <Websocket url='wss://stream.binance.com:9443/ws/bnbbtc@depth'
//                     onMessage={this.handleData.bind(this)} />
//             </div>
//         );
//     }
// }

// export default WebSocketDemo;

const WebSocket = require('ws');

const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

ws.on('message', function incoming(data) {
    console.log(data);
});

// export default ws.on

// const WebSocket = require('isomorphic-ws')

// const ws = new WebSocket('wss://echo.websocket.org/', {
//   origin: 'https://websocket.org'
// });

// ws.onopen = function open() {
//   console.log('connected');
//   ws.send(Date.now());
// };

// ws.onclose = function close() {
//   console.log('disconnected');
// };

// ws.onmessage = function incoming(data) {
//   console.log(`Roundtrip time: ${Date.now() - data} ms`);

//   setTimeout(function timeout() {
//     ws.send(Date.now());
//   }, 500);
// };

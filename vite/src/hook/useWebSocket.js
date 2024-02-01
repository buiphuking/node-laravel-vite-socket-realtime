import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:8000');

const useWebSocket = (callback) => {
  useEffect(() => {
    socket.on('records', callback);

    return () => {
      socket.off('records', callback);
    };
  }, [callback]);
};

export default useWebSocket;
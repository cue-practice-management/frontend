import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socketMap = new Map<string, Socket>();

  connect(channel: string, authToken?: string): void {
    if (this.socketMap.has(channel)) return;

    const socket = io(`${environment.WEB_SOCKET_URL}${channel}`, {
      query: { authToken },
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log(`🔌 Conectado a /${channel}`);
    });

    socket.on('disconnect', () => {
      console.log(`❌ Desconectado de /${channel}`);
    });

    socket.on('connect_error', (err) => {
      console.error(`❗ Error en /${channel}:`, err.message);
    });

    this.socketMap.set(channel, socket);
  }

  on<T>(channel: string, event: string): Observable<T> {
    return new Observable<T>((subscriber) => {
      const socket = this.socketMap.get(channel);
      if (!socket) {
        subscriber.error(`No conectado al canal: ${channel}`);
        return;
      }

      socket.on(event, (data: T) => {
        subscriber.next(data);
      });

      return () => socket.off(event);
    });
  }


  emit<T>(channel: string, event: string, payload: T): void {
    const socket = this.socketMap.get(channel);
    if (socket) {
      socket.emit(event, payload);
    } else {
      console.warn(`❗ No se puede emitir, no conectado a /${channel}`);
    }
  }

  /**
   * Desconecta un canal específico o todos
   */
  disconnect(channel?: string): void {
    if (channel) {
      const socket = this.socketMap.get(channel);
      socket?.disconnect();
      this.socketMap.delete(channel);
    } else {
      for (const [ch, sock] of this.socketMap.entries()) {
        sock.disconnect();
      }
      this.socketMap.clear();
    }
  }
}
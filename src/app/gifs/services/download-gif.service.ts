import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadGifService {

  constructor() { }

  public downloadGif(urlGif: string, gifName: string): void {
    fetch(urlGif, {
      method: 'GET'
    })
      .then(response => response.blob())
      .then(gif => {
        // Crear un objeto URL a partir del blob
        const url = URL.createObjectURL(gif);

        // Crear un enlace temporal para descargar el archivo
        const link = document.createElement('a');
        link.href = url;
        link.download = `${gifName}.gif`; // Nombre del archivo descargado
        link.click(); // Simular el clic para iniciar la descarga

        // Liberar el objeto URL
        URL.revokeObjectURL(url);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

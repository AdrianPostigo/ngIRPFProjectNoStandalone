import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  constructor() { }

  borwserDefaultLanguage(): string {
    // Obtiene el idioma del navegador usando las propiedades modernas
    return navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  }
}

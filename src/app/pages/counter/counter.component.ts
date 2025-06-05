import { Component } from "@angular/core";

@Component({
  //Componente llamado por url ya que excederia las 3 lineas y Angular recomienda hacerlo aparte dentro de la carpeta
   templateUrl: './counter.component.html', 
   styleUrls: ['./counter.component.css'],
})

// Creando una clase para la lógica
export class CounterComponent {
    counter= 0;

    // Metodo para sumar
    increaseBy(value: number){
        this.counter += value;
    }
    
    // Metodo para restar
    decreaseBy(value: number){
        this.counter -= value;
    }

    // Metodo para reestablecer
    resetCounter(value: number){
        this.counter = value;
    }
}


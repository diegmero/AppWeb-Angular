import { Component, signal } from "@angular/core";

@Component({
  //Componente llamado por url ya que excederia las 3 lineas y Angular recomienda hacerlo aparte dentro de la carpeta
   templateUrl: './counter.component.html', 
   styleUrls: ['./counter.component.css'],
})

// Creando una clase para la lógica
export class CounterComponent {
    counter= 0;
    counterSignal = signal(15);

    // Metodo para sumar
    increaseBy(value: number){
        this.counter += value;
        this.counterSignal.update(Current => Current + value);
    }
    
    // Metodo para restar
    decreaseBy(value: number){
        this.counter -= value;
        this.counterSignal.update(current => current - value);
    }

    // Metodo para reestablecer
    resetCounter(value: number){
        this.counter = value;
        this.counterSignal.set(0);
    }
}


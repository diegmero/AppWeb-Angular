import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected title = 'GrinTic';
  protected empresa = 'MI Aplicación';
  protected proveedor = 'GrinTic';
}
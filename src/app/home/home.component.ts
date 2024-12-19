import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private logger: LoggerService) {
    // this.logger.logErrorCustom('Ceci est un message d\'erreur d\'exemple.');
  }
}
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  titre: string = '';
  contenu: string = '';
  date: string = ''; 

  @Output() articleAdded = new EventEmitter<{ titre: string; date: string; contenu: string }>();

  addArticle() {
    if (this.titre.trim() && this.contenu.trim()) {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); 
      const year = today.getFullYear();
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      const seconds = String(today.getSeconds()).padStart(2, '0');

      this.date = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

      this.articleAdded.emit({ titre: this.titre, date: this.date, contenu: this.contenu });

      this.titre = '';
      this.contenu = '';
    }
  }
}
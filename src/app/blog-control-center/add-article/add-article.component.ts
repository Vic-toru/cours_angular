import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  titre: string = '';
  contenu: string = '';

  @Output() articleAdded = new EventEmitter<{ titre: string; contenu: string }>();

  addArticle() {
    if (this.titre.trim() && this.contenu.trim()) {
      this.articleAdded.emit({ titre: this.titre, contenu: this.contenu });
      this.titre = '';  
      this.contenu = ''; 
    }
  }
}
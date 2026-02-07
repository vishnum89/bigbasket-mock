import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
    isSidePanelVisible: boolean = false;

    viewSidePanel(){
      this.isSidePanelVisible = true;
    }

    closeSidePanel(){
      this.isSidePanelVisible = false;
    }
}

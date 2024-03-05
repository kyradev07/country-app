import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Output() onSearchTerm: EventEmitter<string> = new EventEmitter<string>();

  searchTerm(term: string): void {
    this.onSearchTerm.emit(term);
  }

}

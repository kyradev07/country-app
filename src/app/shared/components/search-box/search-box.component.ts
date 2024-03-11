import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, filter, map, Subject } from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Input() initialValue!: string
  @Output() onSearchTerm: EventEmitter<string> = new EventEmitter<string>();

  private debounce$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce$
    .pipe(
      map((term: string) => term.trim()),
      filter((term: string) => term !== ''),
      debounceTime(500)
    ).subscribe((term: string) => this.onSearchTerm.emit(term));
  }

  searchTerm(term: string): void {
    this.debounce$.next(term);
  }

  ngOnDestroy(): void {
    this.debounce$.unsubscribe();
  }
}

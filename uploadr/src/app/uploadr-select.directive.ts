import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appUploadrSelect]'
})
export class UploadrSelectDirective {
  @Output()
  public fileSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  protected element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('change')
  public onChange(): any {
    const files = this.element.nativeElement.files;
    this.fileSelected.emit(files);

    console.log('this.element.nativeElement.attributes');
    console.log(this.element.nativeElement.attributes);

    // if (this.isEmptyAfterSelection()) {
    //   console.log('Empty hit!');
    //   this.element.nativeElement.value = '';
    // }
  }

  // public isEmptyAfterSelection(): boolean {
  //   return !!this.element.nativeElement.attributes.multiple;
  // }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styles: [],
})
export class LoadingModalComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  @ViewChild('modal') modal: ElementRef<HTMLDialogElement>;
  @Input() message = 'mensaje';
  @Input() loaderVisible = false;

  ngAfterViewInit(): void {
    this.modal.nativeElement.addEventListener(
      'cancel',
      this.preventClosingWithEscKey.bind(this)
    );
  }

  ngOnDestroy(): void {
    this.modal.nativeElement.removeEventListener(
      'cancel',
      this.preventClosingWithEscKey.bind(this)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['loaderVisible'].currentValue) {
      this.openModal();
    }

    if (changes && !changes['loaderVisible'].currentValue) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    if (this.modal) {
    alert('s')

      this.modal.nativeElement.close();
    }
  }

  preventClosingWithEscKey(event: Event) {
    event.preventDefault();
  }
}

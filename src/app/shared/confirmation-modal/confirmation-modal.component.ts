import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styles: [],
})
export class ConfirmationModalComponent
  implements AfterViewInit, OnDestroy, OnChanges
{
  @ViewChild('modal') modal: ElementRef<HTMLDialogElement>;
  @Input() modalTitle = 'TEST';
  @Input() modalSize = 'sm:6/12 md:w-4/12';
  @Input() modalVisible = false;
  @Output() modalVisibleChange = new EventEmitter<boolean>();
  @Output() result = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    this.modal.nativeElement.addEventListener(
      'cancel',
      this.closeModal.bind(this, '')
    );
  }

  ngOnDestroy(): void {
    this.modal.nativeElement.removeEventListener(
      'cancel',
      this.closeModal.bind(this, '')
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['modalVisible'].currentValue) {
      this.openModal();
    }

    if (changes && !changes['modalVisible'].currentValue) {
      this.closeModal('');
    }
  }

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal(choice: string) {
    if (this.modal) {
      this.modalVisible = false;
      this.modalVisibleChange.emit(this.modalVisible);
      this.modal.nativeElement.close();

      switch (choice) {
        case 'ACCEPTED':
          this.result.emit(true);

          break;
        case 'REJECTED':
          this.result.emit(false);

          break;
      }
    }
  }
}

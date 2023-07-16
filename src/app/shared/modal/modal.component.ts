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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [],
})
export class ModalComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('modal') modal: ElementRef<HTMLDialogElement>;
  @Input() modalTitle = 'TEST';
  @Input() modalSize = 'w-4/12';
  @Input() modalVisible = false;
  @Output() modalVisibleChange = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    this.modal.nativeElement.addEventListener(
      'cancel',
      this.closeModal.bind(this)
    );
  }

  ngOnDestroy(): void {
    this.modal.nativeElement.removeEventListener(
      'cancel',
      this.closeModal.bind(this)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['modalVisible'].currentValue) {
      this.openModal();
    }

    if (changes && !changes['modalVisible'].currentValue) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    if (this.modal) {
      this.modalVisible = false;
      this.modalVisibleChange.emit(this.modalVisible);
      this.modal.nativeElement.close();
    }
  }
}

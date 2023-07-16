import { Component, ContentChild, EventEmitter, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ContentChild('modalHeader') modalHeaderTemplate!: TemplateRef<any>;
  @ContentChild('modalBody') modalBodyTemplate!: TemplateRef<any>;

  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }

}

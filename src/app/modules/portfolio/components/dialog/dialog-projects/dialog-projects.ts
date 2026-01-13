import { Component, Inject, OnInit, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IProjects } from '../../../interface/IProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss',
})

export class DialogProjects implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjects>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
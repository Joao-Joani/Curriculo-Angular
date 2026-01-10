import { Component, inject, signal } from '@angular/core';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  #dialog = inject(MatDialog)
  
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/tarefas.png",
      alt: "Projeto Lista de Tarefas com TypeScript",
      title: "Lista de Tarefas com TypeScript",
      with: "100px",
      height: "100px",
      description: "Criação de uma lista de tarefas utilizando TypeScript, HTML e CSS. O projeto permite adicionar, remover e marcar tarefas como concluídas, proporcionando uma experiência interativa para o usuário.",
      links: [
        {
          name: "Acessar Projeto",
          href: "https://joao-joani.github.io/ListaTarefas_TypeScript/",
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}

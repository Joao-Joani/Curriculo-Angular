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
      with: "120px",
      height: "120px",
      description: "Criação de uma lista de tarefas utilizando TypeScript, HTML e CSS. O projeto permite adicionar, remover e marcar tarefas como concluídas, proporcionando uma experiência interativa para o usuário.",
      links: [
        {
          name: "Acessar Projeto",
          href: "https://joao-joani.github.io/ListaTarefas_TypeScript/",
        },
      ],
    },

    {
      src: "assets/img/projects/lista-de-tarefas.png",
      alt: "Projeto Lista de Tarefas utilizando Angular",
      title: "Lista de Tarefas com Angular",
      with: "84px",
      height: "86px",
      description: "Explore uma aplicação de lista de tarefas desenvolvida com Angular. Este projeto demonstra a utilização de componentes, serviços e data binding para criar uma interface dinâmica e responsiva, permitindo aos usuários gerenciar suas tarefas de forma eficiente.",
      links: [
        {
          name: "Acessar Projeto",
          href: "https://joao-joani.github.io/ListaTarefaas_Angular/",
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

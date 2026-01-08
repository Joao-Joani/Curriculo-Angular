import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  public arrayProjects = signal([
    {
      scr: "assets/img/projects/tarefas.png",
      alt: "Projeto Lista de Tarefas com TypeScript",
      title: "Lista de Tarefas com TypeScript",
      with: "100px",
      height: "100px",
      description: "Criação de uma lista de tarefas utilizando TypeScript, HTML e CSS. O projeto permite adicionar, remover e marcar tarefas como concluídas, proporcionando uma experiência interativa para o usuário.",
      link: [
        {
          name: "Acessar Projeto",
          href: "https://joao-joani.github.io/ListaTarefas_TypeScript/",
        },
      ],
    },
  ]);
}

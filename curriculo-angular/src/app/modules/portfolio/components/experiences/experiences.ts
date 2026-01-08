import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal([
    {
      summary: {
        strong: "Bacharelado em Engenharia Elétrica / UNIFEI",
        p: " Mar 2024 - Presente"
      },
      text: "Estudante de Bacharelado em Engenharia Elétrica na Universidade Federal de Itajubá (UNIFEI), com foco em sistemas elétricos, eletrônica e automação."
    },
    {
      summary: {
        strong: "Trainee Desktop / Asimov Jr",
        p: " Nov 2025 - Presente"
      },
      text: "Atuando como Trainee na Asimov Jr, empresa júnior de consultoria em tecnologia da informação da UNIFEI. Responsável por desenvolver soluções de software para clientes, focando em aplicações desktop."
    },
  ]);
}
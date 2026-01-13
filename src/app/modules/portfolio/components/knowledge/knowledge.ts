import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/Knowledge.intarface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: "Icone HTML5",
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: "Icone CSS3",
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: "Icone Angular",
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: "Icone Python",
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: "Icone JavaScript",
    }
  ])
}

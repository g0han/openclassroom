import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      message: 'Dignissimos veniam metus facilis corporis voluptatem dolorem cum aut labore tempus, corporis dolore illum ea ac expedita habitant, incidunt viverra.',
      date: new Date()
    },
    {
      title: 'Mon deuxième post',
      message: 'Dignissimos veniam metus facilis corporis voluptatem dolorem cum aut labore tempus, corporis dolore illum ea ac expedita habitant, incidunt viverra.',
      date: new Date()
    },
    {
      title: 'Mon troisième post',
      message: 'Dignissimos veniam metus facilis corporis voluptatem dolorem cum aut labore tempus, corporis dolore illum ea ac expedita habitant, incidunt viverra.',
      date: new Date()
    },
  ];
}

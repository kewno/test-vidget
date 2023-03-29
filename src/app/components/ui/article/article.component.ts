import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() headline: string = 'Lorem ipsum'
  @Input() text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt, labore aut praesentium laboriosam quae dicta veniam autem sapiente similique temporibus repudiandae quo impedit quos odio maxime quia! Blanditiis, animi, reiciendis.'
  @Input() textBtn: string = 'Read'
  @Input() path: string = ''
}

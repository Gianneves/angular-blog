import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
      const result = dataFake.filter(article => article.id)[0]

       this.contentTitle = result.title
       this.contentDescription = result.description
       this.photoCover = result.photoCover
  }
}

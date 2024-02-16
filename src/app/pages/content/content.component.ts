import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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

  constructor(
    private route:ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => console.log(value.get("Id"))
    )
  }
}

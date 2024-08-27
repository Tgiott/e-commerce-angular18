import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }
  
  
  ngOnInit(): void {
  
  }

  get routerUrl (): string{
    return this.headerService.headerData.routerUrl
    
  }
  
  get icon (): string{
    return this.headerService.headerData.icon
  }
  
  get title (): string{
    return this.headerService.headerData.title
  }
  
}

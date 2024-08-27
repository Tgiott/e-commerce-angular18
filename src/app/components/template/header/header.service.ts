import { headerData } from './header.data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

private _headerData = new BehaviorSubject<headerData>(
  {
    title: "Inicio",
    icon: "home",
    routerUrl: "/"
  }
)

  constructor() { }


get headerData(): headerData
{
  return this._headerData.value
}

set headerData(headerData:headerData)
{
  this._headerData.next(headerData)
}

}

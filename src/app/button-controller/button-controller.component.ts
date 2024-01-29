import { Component, Input, OnInit } from '@angular/core';

interface IButtonsIcon {
  [key: string]: string;

  filter: string;
  search: string;
  edit: string;
  del: string;
  default: string;
}

@Component({
  selector: 'app-button-controller',
  templateUrl: './button-controller.component.html',
  styleUrls: ['./button-controller.component.scss'],
})
export class ButtonControllerComponent implements OnInit {
  @Input('typeButton') typeButton: string = 'default';

  constructor() {
    this.typeButton = 'default';
  }

  public buttonsIcon: IButtonsIcon = {
    filter: 'assets/icons/filter.svg',
    search: 'assets/icons/search.svg',
    edit: 'assets/icons/edit.svg',
    del: 'assets/icons/del.svg',
    default: '',
  };

  ngOnInit() {}
}

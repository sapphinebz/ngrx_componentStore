import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rc-loading',
  templateUrl: './rc-loading.component.html',
  styleUrls: ['./rc-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RcLoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

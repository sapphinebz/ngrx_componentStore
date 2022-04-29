import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

const enum Label {
  SHOW = 'show',
  HIDE = 'hide',
}

interface ToggleButtonState {
  toggle: boolean;
  label: Label;
}

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
})
export class ToggleButtonComponent implements OnInit {
  toggle = this.componentStore.updater((state) => ({
    ...state,
    toggle: !state.toggle,
  }));

  setLabelOnToggle = this.componentStore.updater((state, toggle: boolean) => {
    if (toggle === true) {
      return { ...state, label: Label.HIDE };
    }
    return { ...state, label: Label.SHOW };
  });

  toggle$ = this.componentStore.select((state) => state.toggle);
  label$ = this.componentStore.select((state) => state.label);

  constructor(public componentStore: ComponentStore<ToggleButtonState>) {
    componentStore.setState({
      toggle: false,
      label: Label.SHOW,
    });

    this.setLabelOnToggle(this.toggle$);
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
@Component({
  // moduleId: module.id,
  selector: 'font-awesome',
  templateUrl: 'font-awesome.component.html',
  styleUrls: ['font-awesome.component.css']
})
export class FontAwesomeComponent implements OnInit {
  // @Input() faIcon: string;
  // the following is commented out while I troubleshoot AoT...
  // but I believe properties are still acceptable for static analysis...
  private _faIcon: string // font awesome icons
  @Input() set faIcon(icon: string) {
    // sanitize the icon each time it is set.
    // if they didn't provide something like this: 'fa fa-cubes', fix it for them.
    if (icon) {
      if (!icon.match(/^\s?fa fa\-/i)) {
        if (!icon.match(/^fa\-/i)) { icon = 'fa-' + icon; }
        if (!icon.match(/^fa /i)) { icon = 'fa ' + icon; }
      }
    }
    this._faIcon = icon;
  }

  get faIcon() { return this._faIcon; }
  // ngOnInit sanitizes faIcon on init
  ngOnInit() {
  }
}



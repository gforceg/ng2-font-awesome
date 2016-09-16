import { Component, OnInit, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'font-awesome',
  templateUrl: 'font-awesome.component.html',
  styleUrls: ['font-awesome.component.css']
})
export class FontAwesomeComponent implements OnInit {
  @Input() faIcon: string // font awesome icons

  // ngOnInit sanitizes faIcon on init
  ngOnInit() {
    // add 'fa-' to the faIcon if it isn't already present
    if (this.faIcon) {
      if (!this.faIcon.match(/^fa\-/i)) { this.faIcon = 'fa-' + this.faIcon; }
      if (!this.faIcon.match(/fa /i)) { this.faIcon = 'fa ' + this.faIcon; }
    }
  }
}



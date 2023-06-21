import { Component } from '@angular/core';
import { GizlilikPolitikasiComponent } from '../gizlilik-politikasi/gizlilik-politikasi.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HakkimizdaComponent } from '../hakkimizda/hakkimizda.component';
import { IletisimComponent } from '../iletisim/iletisim.component';
import { IptalIadeComponent } from '../iptal-iade/iptal-iade.component';

@Component({
  selector: 'app-welcome-page-footer',
  templateUrl: './welcome-page-footer.component.html',
  styleUrls: ['./welcome-page-footer.component.css']
})
export class WelcomePageFooterComponent {

  constructor(
    private bottomSheet: MatBottomSheet
  ) {}

  showGizlilik() {
    this.bottomSheet.open(GizlilikPolitikasiComponent);
  }

  showHakkimizda() {
    this.bottomSheet.open(HakkimizdaComponent)
  }

  showIletisim() {
    this.bottomSheet.open(IletisimComponent)
  }

  showIptalIade() {
    this.bottomSheet.open(IptalIadeComponent)
  }


}

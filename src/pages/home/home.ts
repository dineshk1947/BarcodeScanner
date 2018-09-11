import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  
  options :BarcodeScannerOptions; 

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }
  
  scanFun(){
    this.options = {
      prompt : "Scan your barcode "
  }
  console.log("check for bacoder scanner",this.barcodeScanner);
  this.barcodeScanner.scan(this.options).then((barcodeData) => {

      console.log(barcodeData);
      this.scanData = barcodeData;
  }, (err) => {
      console.log("Error occured : " + err);
  });       
}
}

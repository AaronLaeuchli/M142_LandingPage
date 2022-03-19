import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {JpgPngDialogComponent} from "../../dialog/jpg-png-dialog/jpg-png-dialog.component";

@Component({
  selector: 'app-jpg-png',
  templateUrl: './jpg-png.component.html',
  styleUrls: ['./jpg-png.component.scss']
})
export class JpgPngComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  viewJPGPNGDialog(){
    this.dialog.open(JpgPngDialogComponent)
  }

}

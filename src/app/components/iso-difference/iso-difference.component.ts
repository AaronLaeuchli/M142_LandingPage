import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IsoDialogComponent} from "../../dialog/iso-dialog/iso-dialog.component";

@Component({
  selector: 'app-iso-difference',
  templateUrl: './iso-difference.component.html',
  styleUrls: ['./iso-difference.component.scss']
})
export class IsoDifferenceComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  viewIsoDialog(){
    this.dialog.open(IsoDialogComponent);
  }

}

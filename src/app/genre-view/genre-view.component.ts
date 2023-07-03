import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.css'],
})
export class GenreViewComponent implements OnInit {
  constructor(
    public dialogReg: MatDialogRef<GenreViewComponent>,
    public data: {
      genre: any;
    }
  ) {}

  ngOnInit(): void {}
}

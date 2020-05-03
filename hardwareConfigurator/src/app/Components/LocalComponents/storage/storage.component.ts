import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../Models/storage';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  title = 'Choose your Harddrive';
  storages: Storage[];

  constructor() { }

  ngOnInit(): void {
    this.storages = Storage.storage();
  }
}

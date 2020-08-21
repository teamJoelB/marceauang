import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  selectedFile: File = null;
  mediaUrl;

  memos;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8085/memo').subscribe(data => {
    this.memos = data;
    }, err => {
      console.log(err);
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.mediaUrl = reader.result;
    };
  }

  mediaExist(media) {
    if (media == null) {return false; } else {return true; }
  }

  chargementMedia(media) {
    return window.atob(media);
  }


  sendMemo(value) {
    value.video = window.btoa(this.mediaUrl);

    this.http.post('http://localhost:8085/memo', value).subscribe(data => {
     console.log('ok');
     this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }


}

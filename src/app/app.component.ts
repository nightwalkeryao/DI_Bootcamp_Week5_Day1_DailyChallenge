import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let res = this.http.get('https://swapi.dev/api/films/1/').pipe(
      map((r: any) => { return r})
    )
    res.subscribe(data => console.log(data))
  }
}

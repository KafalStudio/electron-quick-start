import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { iTunesService } from "../services/itunes.services";
import { Subject } from "rxjs/Subject";

@Component({
    selector: 'iTunesAlbums',
    styleUrls: ['./itunes.albums.component.css'],
    templateUrl: './itunes.albums.component.html',
})
export class iTunesAlbumsComponent implements OnInit {
    albums: Observable<any>;

    ngOnInit(): void {
        this.albums = this.itunesService.getTopAlbums(20);
    }

    constructor(public itunesService: iTunesService) {
        
    }
}

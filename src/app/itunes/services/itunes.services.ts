// https://itunes.apple.com/us/rss/topsongs/limit=10/json
// https://itunes.apple.com/us/rss/topalbums/limit=10/json
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

// let request = require('request-promise')

@Injectable()
export class iTunesService {

    constructor(private http: Http) {

    }

    getTopAlbums(count:number = 10) {
        return this.http.get(`https://itunes.apple.com/us/rss/topalbums/limit=${count}/json`).map(res => {
            return res.json().feed.entry;
        });
    }

    // execute() {
    //     request('https://itunes.apple.com/us/rss/topalbums/limit=10/json').then(result => {
    //         let results: any = JSON.parse(result);
    //         let div = document.createElement("div");
    //         div.setAttribute('class', 'itunes');
    //         div.setAttribute('id', 'itunes');

    //         results.feed.entry.forEach(entry => {
    //             let element = document.createElement("div");
    //             element.setAttribute('class', 'card');

    //             let imgWrapper = document.createElement("div");
    //             imgWrapper.setAttribute('class', 'card-image');

    //             let imgElement = document.createElement('img');
    //             imgElement.setAttribute('src', entry["im:image"][0].label);
    //             imgWrapper.appendChild(imgElement);

    //             let txtElement = document.createElement('div');
    //             txtElement.setAttribute('class', 'card-content');
    //             txtElement.innerText = JSON.stringify(entry.title.label);
    //             element.appendChild(imgWrapper);
    //             element.appendChild(txtElement);
    //             div.appendChild(element);
    //         });
    //         return div;
    //     }).then(div => {
    //         document.getElementById('test').appendChild(div);
    //     });
    // }
}
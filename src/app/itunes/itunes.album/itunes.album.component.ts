import { Component, Input } from '@angular/core'
@Component({
    selector: 'iTunesAlbum',
    templateUrl: 'itunes.album.template.html',
    styleUrls: ['itunes.album.component.css']
})
export class iTunesAlbumComponent {

    public album: Album;

    @Input()
    public set model(value: any) {
        this.album = new Album(value);
    }
}

export class Album {
    albumUrl: any;
    public static MaxLength: number = 30;
    public coverHref: any;
    public artistHref: any;
    public artist: any;
    public albumName: any;
    public title: any;

    constructor(private model: any) {
        this.title = model.title.label;
        this.albumUrl = model.id.label;
        console.log('processing ' + this.title);
        this.albumName = this.normalize(model['im:name'].label);
        this.artist = model['im:artist'].label;
        let artist = model['im:artist'];
        if (artist.attributes) {
            this.artistHref = artist.attributes.href;
        }
        ///Last image url
        let image = model['im:image'].find(img => img.attributes.height == '170') ||  model['im:image'][(model['im:image'].length - 1)];
        this.coverHref = image.label;
    }
    normalize(titleString: string) {
        let title = titleString;
        let seperator: number = titleString.indexOf('(');
        if (seperator > 4) {
            title = title.substr(0, seperator - 1).trim();
        }
        return title.substr(0, Album.MaxLength);
    }
}
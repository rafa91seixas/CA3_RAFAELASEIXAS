import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll

    episodes: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('my dataEpisodes: ', data);
        })


    }

    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
        console.log('my dataEpisodeDetails: ', episodeId);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            if (this.api.getQuote.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
}



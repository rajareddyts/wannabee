import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { ApiClientService } from '../../services';

@Component({
    selector: 'app-locateme',
    templateUrl: './locateme.component.html',
    styleUrls: ['./locateme.component.scss']
})

export class LocatemeComponent implements OnInit {
    location = {};
    locateme() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.location = position.coords;
                console.log(position)
            },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;


    public lat: number;
    public lon: number;
    public ip: string;

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private ipLatLon: ApiClientService,
    ) { }

    ngOnInit() {
        //set google maps defaults
        this.latitude = 39.8282;
        this.longitude = -98.5795;

        //create search FormControl
        this.searchControl = new FormControl();

        //set current position
        //this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }


                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                });
            });
        });

    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            });
            console.log('position');
        }
    }
    getIpData(): void {
       this.ipLatLon.getIpData().subscribe(result => {
             console.log(result);
        })
    }

}

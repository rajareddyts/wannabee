import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {InterestingTopic,GeoLocation} from '../models';
@Injectable()
export class InterestingTopicsService {
  constructor(private afdb: AngularFireDatabase) {}

  getInterestingTopicsNearMe(location : GeoLocation): FirebaseListObservable<InterestingTopic> {
    return this.afdb.list('/interestingTopic');
  }

}
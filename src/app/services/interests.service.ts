import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {InterestingTopic} from '../models/interesting-topic';
@Injectable()
export class InterestingTopicsService {
  constructor(private afdb: AngularFireDatabase) {}

  getInterestingTopicsNearMe(): FirebaseListObservable<InterestingTopic> {
    return this.afdb.list('/interestingTopic');
  }

}
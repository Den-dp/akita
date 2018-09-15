import { Injectable } from '@angular/core';
import { RouterStore, RouterState } from './router.store';
import { Query } from '../../akita/src';

@Injectable()
export class RouterQuery extends Query<RouterState> {
  constructor(protected store: RouterStore) {
    super(store);
  }
}

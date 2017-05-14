import { Injectable } from '@angular/core';
import { Spraak } from '../_models/spraak'


@Injectable()
export class PraktiskService {


    getSpraak(i: number) {
        return new Spraak().liste[i].spraak;
    }


}
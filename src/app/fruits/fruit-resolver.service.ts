import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FruitsResolved } from './fruits';
import { Observable, of } from 'rxjs';
import { FruitsService } from './fruits.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FruitResolver implements Resolve<FruitsResolved>{

    constructor(private fruitsService: FruitsService) {

    }
    resolve(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<FruitsResolved> {
        const id = route.paramMap.get('id');
        if (isNaN(+id)) {
            const message = `the provided id not number: ${id}`;
            console.log(message);
            return of({ fruit: null, error: message });
        }


        return this.fruitsService.getFruitDetails(+id)
            .pipe(
                map(fruit => ({ fruit: fruit })),
                catchError(error => {
                    const message = `Retrieval error: ${error}`;
                    console.error(message);
                    return of({ fruit: null, error: message });
                })
            );
    }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, throwError, tap } from "rxjs";
import { IAddress } from "../models/address.model";
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn:'root'
})

export class AddressService {
    constructor(private http: HttpClient, private notificationService: NotificationService){}

    addresses: IAddress[] = []
    address: IAddress = {
        Id: '', 
        name: '', 
        city: '', 
        street: '', 
        building: '', 
        apartment: ''
      };;

    getAll(): Observable<IAddress[]> {
        return this.http.get<IAddress[]>("http://localhost:3000/dev/v1/addresses").pipe(
            delay(200),
            tap(products => this.addresses = products.sort((a, b) => Number(a.Id) - Number(b.Id))), // sort by Id to more cleanable displaying
            catchError(this.errorHandler)
        )
    }

    create(address: IAddress){
        return this.http.post<IAddress>("http://localhost:3000/dev/v1/addresses", address)
            .pipe(
                tap(addresses => {
                    this.addresses.push(addresses);
                    console.log(this.addresses) // here we can see new item exist in a list but somehow doesnt display on the page
                })
            )
    }

    update(id: string, body: IAddress): Observable<IAddress> {
        return this.http.put<IAddress>(`http://localhost:3000/dev/v1/addresses/${id}`, body)
          .pipe(
            tap(updatedAddress => {
              const index = this.addresses.findIndex(address => address.Id === id);
              if (index !== -1) {
                this.addresses[index] = updatedAddress; // Replace old address with the updated one
                this.notificationService.alert('Address updated successfully!');
              } else {
                this.notificationService.alert('Address not found in the list, but it might have been updated in the database.');
              }
            }),
            catchError(this.errorHandler)
          );
    }

    delete(id: string) {
        return this.http.delete<IAddress>(`http://localhost:3000/dev/v1/addresses/${id}`)
          .pipe(
            tap(() => {
              const index = this.addresses.findIndex(address => address.Id === id);
              if (index !== -1) {
                this.addresses.splice(index, 1);
              }
            }),
            catchError(this.errorHandler)
          );
    }

    getById(id: string): Observable<IAddress> {
        return this.http.get<IAddress>(`http://localhost:3000/dev/v1/addresses/${id}`)
            .pipe(
                tap(address => this.address = address),
                catchError(this.errorHandler)
            );
    }

    private errorHandler(error: HttpErrorResponse){
        return throwError(() => {error.message})
    }
}
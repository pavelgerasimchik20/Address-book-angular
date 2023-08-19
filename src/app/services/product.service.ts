import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, throwError, tap, BehaviorSubject } from "rxjs";
import { IProduct } from "../models/product.model";

@Injectable({
    providedIn:'root'
})

export class ProductService {
    constructor(private http: HttpClient){}

    products: IProduct[] = []

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>("https://fakestoreapi.com/products", {
            params: new HttpParams({
                fromObject: {limit:10}
            })
        }).pipe(
            delay(200),
            tap(products => this.products = products),
            catchError(this.errorHandler)
        )
    }

    create(product: IProduct){
        return this.http.post<IProduct>("https://fakestoreapi.com/products", product)
            .pipe(
                tap(product => {
                    this.products.push(product);
                    console.log(this.products) // here we can see new item exist in a list but somehow doesnt display
                })
            )
    }

    private errorHandler(error: HttpErrorResponse){
        return throwError(() => {error.message})
    }
}
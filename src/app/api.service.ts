import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';
import { Customer } from './customer'
import { Categorie } from './categorie'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/products";
const apiUrl2 = "http://localhost:3000/costumers";
const apiUrl3 = "http://localhost:3000/categories";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  //C.R.U.D Products 

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(products => console.log('Fetch products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct (product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  updateProduct (id, product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  //C.R.U.D Customers
  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(apiUrl2)
      .pipe(
        tap(customers => console.log('Fetch customers')),
        catchError(this.handleError('getCustomers', []))
      );
  }
  getCustomer(id: number): Observable<Customer> {
    const url = `${apiUrl2}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => console.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }
  addCustomer (customer): Observable<Customer> {
    return this.http.post<Customer>(apiUrl2, customer, httpOptions).pipe(
      tap((customer: Customer) => console.log(`added customer w/ id=${customer.id}`)),
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }
  updateCustomer (id, customer): Observable<any> {
    const url = `${apiUrl2}/${id}`;
    return this.http.put(url, customer, httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }
  deleteCustomer (id): Observable<Customer> {
    const url = `${apiUrl2}/${id}`;
    return this.http.delete<Customer>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  //C.R.U.D Categories
  getCategories (): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(apiUrl3)
      .pipe(
        tap(categories => console.log('Fetch categories')),
        catchError(this.handleError('getCategories', []))
      );
  }
  getCategorie(id: number): Observable<Categorie> {
    const url = `${apiUrl3}/${id}`;
    return this.http.get<Categorie>(url).pipe(
      tap(_ => console.log(`fetched Categorie id=${id}`)),
      catchError(this.handleError<Categorie>(`getCategorie id=${id}`))
    );
  }
  addCategorie (categorie): Observable<Categorie> {
    return this.http.post<Categorie>(apiUrl3, categorie, httpOptions).pipe(
      tap((categorie: Categorie) => console.log(`added categorie w/ id=${categorie.id}`)),
      catchError(this.handleError<Categorie>('addCategorie'))
    );
  }
  updateCategorie (id, categorie): Observable<any> {
    const url = `${apiUrl3}/${id}`;
    return this.http.put(url, categorie, httpOptions).pipe(
      tap(_ => console.log(`updated categorie id=${id}`)),
      catchError(this.handleError<any>('updateCategorie'))
    );
  }
  deleteCategorie (id): Observable<Categorie> {
    const url = `${apiUrl3}/${id}`;
    return this.http.delete<Categorie>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted categorie id=${id}`)),
      catchError(this.handleError<Categorie>('deleteCategorie'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";
import { Item } from "./item";
import { ITEMS } from "./mock-items";
import { HttpClient, HttpHeaders } from '@angular/common/http'

const ITEM_API_URL = "http://127.0.0.1:8080"

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${ITEM_API_URL}/item`);
  }

  getItem(id: number) : Observable<Item> {
    return this.http.get<Item>(`${ITEM_API_URL}/item/${id}`);
  }

  addItem(name, description, image: string, price, owner: number): void {
    this.http.post(`${ITEM_API_URL}/item`, {name: name, description: description, price: price, image: image, owner: owner});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class <%= classify(name)%>CrudService {
    const API_URL = ''

    constructor(private http: HttpClient) {}

    findAll(): Observable<<%= classify(name) %>[]>{
    <% if(transform) {%>
        return this.http.get<<%= classify(name) %>[]>(API_URL).pipe(map(this.transform))
    <% } else { %>
        return this.http.get<<%= classify(name) %>[]>(API_URL)
    <% } %>
    }

    <% if (transform) {%>
    transform(response: any): <%= classify(name) %>[] {
        return {}
    }
    <% } %>
} 

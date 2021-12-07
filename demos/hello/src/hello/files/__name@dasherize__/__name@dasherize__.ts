import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'hello-<%= dasherize(name) %>',
})
export class Hello<%= classify(name)%>Component {
} 

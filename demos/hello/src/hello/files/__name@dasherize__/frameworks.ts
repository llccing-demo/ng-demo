import { Component } from '@angular/core';

@Component({
    selector: 'frameworks',
    template: `
        <h1>Frameworks</h1>
        <% if (frameworks && frameworks.length) { %>
            <ul>
            <% for (let framework of frameworks) { %> 
                <li><%= framework %></li>
            <% } %>
            </ul>
        <% } %>
    `
})
export class FrameworksComponent {
}
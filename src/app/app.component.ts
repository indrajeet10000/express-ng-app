import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemService} from './item.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [ItemService],
})
export class AppComponent implements OnInit {
	itemList: any[] = [];
	newItemName: string = '';
	
	constructor(private itemService: ItemService) {}
		
	ngOnInit() {
		this.fetchItems();
	}
	
	fetchItems() {
		this.itemService.getItems().subscribe(items => {
			this.itemList = items;
		});
	}
	
	addItem() {
		if(this.newItemName) {
			this.itemService.addItem(this.newItemName)
				.subscribe(() => {
					this.newItemName = '';
					this.fetchItems();
				});
		}
	}
}
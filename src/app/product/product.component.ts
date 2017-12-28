import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	private products:Array<Product>;

  constructor() { }

  ngOnInit() {
  	this.products = [
  		new Product(1,"title1",12,1,"desc1",["fff","sddd"]),
  		new Product(2,"title2",5,5,"desc2",["fff","sddd"]),
  		new Product(3,"title3",3,3,"desc3",["fff","sddd"]),
  		new Product(4,"title4",5,4,"desc4",["fff","sddd"]),
  		new Product(5,"title5",8.5,1,"desc5",["fff","sddd"]),
  		new Product(6,"title6",55,2,"desc6",["fff","sddd"]),
  		new Product(7,"title7",112,3,"desc7",["fff","sddd"]),
  	];
  }

}

export class Product {
	
	private id:number;
	private title:string;
	private price:numbe
	private rating:number;
	private desc:string;
	private categories:Array<string>;

	constructor(id:number,title:string,price:number,rating:number,desc:string,categories:Array<string>) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.rating = rating;
		this.desc = desc;
		this.categories = categories;
	}

	public getId():number {
		return this.id;
	}

	public getTitle():string {
		return this.title;
	}

	public getPrice():number {
		return this.price;
	}

	public getRating():number {
		return this.rating;
	}

	public getDesc():string {
		return this.desc;
	}

	public getCategories():Array<string> {
		return this.categories;
	}

}
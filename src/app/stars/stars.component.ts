import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	@Input()
	private rating: number = 0;
	private stars: Array<Star> = [];

  constructor() { }

  ngOnInit() {
  	for(let i = 1; i <= 5; i++) {
  		if(i <= this.rating) {
  			this.stars.push(new Star(false));
  		}else{
  			this.stars.push(new Star(true));
  		}
  	}
  }

}

export class Star {
	
	private flag: boolean;

	constructor(flag: boolean) {
		this.flag = flag;
	}

	public getFlag(): boolean {
		return this.flag;
	}
}
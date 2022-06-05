import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-circle-precentage',
	templateUrl: './circle-precentage.component.html',
	styleUrls: ['./circle-precentage.component.scss'],
})
export class CirclePrecentageComponent implements OnInit {
	@Input() percentage: number = 0;
	@Input() strokeColor: string = 'white';
	@Input() strokeWidth: number = 4;
	@Input() width: number = 60;
	@Input() label: string = '';

	public radius = this.width / 2 - this.strokeWidth * 2;
	public circumference = this.radius * 2 * Math.PI;
	public strokeDashArray = `${this.circumference} ${this.circumference}`;
	public strokeDashOffset = 138.4;

	ngOnInit(): void {
		setTimeout(
			() =>
				(this.strokeDashOffset =
					this.circumference -
					(this.percentage / 100) * this.circumference),
			100
		);
	}
}

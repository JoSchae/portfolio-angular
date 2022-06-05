import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirclePrecentageComponent } from './circle-precentage.component';

describe('CirclePrecentageComponent', () => {
	let component: CirclePrecentageComponent;
	let fixture: ComponentFixture<CirclePrecentageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CirclePrecentageComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CirclePrecentageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-123',
        duration: 120,
        rating:4,
        releaseDate: 'December, 2 , 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 45.99,
        code: 'XPS-456',
        duration: 38,
        rating:4.4,
        releaseDate: 'December, 7 , 2019'
      }
    ]
  }

}

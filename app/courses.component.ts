import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
	selector: 'courses',
	template: `
    <h2>Hi this is the courses angular component</h2>
    <ul>
      <li *ngFor="#course of courses">{{ course }}</li>
    </ul>
  `,
  providers: [CourseService]
})
export class CoursesComponent {
  courses: String[] = [];
  title: String = "This is the title of the courses page"
  constructor  (courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}

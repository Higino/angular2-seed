import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
	selector: 'courses',
	template: `
    <h2>Hi this is the list of available courses</h2>
		<input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">{{ course }}</li>
    </ul>
  `,
  providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
  courses: String[] = [];
  title: String = "This is the title of the courses page"
  constructor  (courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}

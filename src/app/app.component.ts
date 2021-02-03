import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';

  skills = [
    { name: 'Java', icon: '../../src/app/assets/java.png' },
    { name: 'C', icon: '../src/app/assets/c.png'},
    { name: 'Python', icon: '/assets/python.png'},
    { name: 'Github', icon: '../'},
    { name: 'REST API', icon: '../../'},
    { name: 'Javascript', icon: '/docs/assets/js.png'},
    { name: 'Angular', icon: '/docs/assets/angular.png'},
    { name: 'SQL', icon: '/docs/assets/sql.jpg'},
    { name: 'Node.js', icon: '/docs/assets/node.png'},
    { name: 'React', icon: '/docs/assets/react.png'},
    { name: 'Jenkins', icon: '/docs/assets/jenkins.png'},
    { name: 'Cucumber', icon: '/docs/assets/cucumber.png'},
    { name: 'Selenium', icon: '/docs/assets/selenium.png'}
  ];

  interpersonal = [
    'Customer Service',
    'Team Management',
    'Conflict Resolution',
    'Collaborative Communication'
  ];

  experience = [
    {
      name: 'NCSU Senior Design',
      date: 'Jan 2020 - May 2020',
      description: [
        {
          text1: 'Connected existing user interface to a network controller that managed autonomous vehicles (Python)',
          text2: '',
          linkText: '',
          linkUrl: ''
        },
        {
          text1: 'Communicated directly with a client to build requirements, create and present design documents, then iteratively implement code',
          text2: '',
          linkText: '',
          linkUrl: ''
        },
        {
          text1: 'Achieved clear, straightforward communication and aggressive time management',
          text2: '',
          linkText: '',
          linkUrl: ''
        },
      ]
    }, {
      name: 'NCSU Software Engineering',
      date: 'Aug 2019 - Dec 2019',
      description: [
        {
          text1: 'Utilized Agile development methods to add features to an existing ',
          text2: ' (AngularJS)',
          linkText: 'electronic health records system',
          linkUrl: 'https://github.com/ncsu-csc326/iTrust2'
        },
        {
          text1: 'Adapted to multiple team roles to take part in designing, coding, testing, and debugging in both back-end and front-end contexts',
          text2: '',
          linkText: '',
          linkUrl: ''
        },
        {
          // tslint:disable-next-line: max-line-length
          text1: 'Applied continuous integration to create new user interface features that were tested using JUnit, Selenium, and Cucumber',
          text2: '',
          linkText: '',
          linkUrl: ''
        }
      ]
    }
  ];
}

/* global describe, test, expect */
const app = require('../../app')
const request = require('supertest')

describe('courses', () => {
  test('it should render a list of courses', () => {
    return request(app).get('/courses')
      .expect(200)
      .then((response) => {
        expect(response.text.match(/<h1>All Courses /)).toBeTruthy()
      })
  })
  test('it should render a course', () => {
    return request(app).get('/courses/headless-content-management-using-contentful')
      .expect(200)
      .then((response) => {
        expect(response.text.match(/class="course__title"/)).toBeTruthy()
      })
  })
  test('it should return 404 when a course does not exist', () => {
    return request(app).get('/courses/dont-exist').expect(404)
  })

  test('it should render a lesson', () => {
    return request(app).get('/courses/headless-content-management-using-contentful/lessons/content-from-your-idea-to-any-display')
      .expect(200)
      .then((response) => {
        expect(response.text.match(/class="lesson__title"/)).toBeTruthy()
      })
  })
})

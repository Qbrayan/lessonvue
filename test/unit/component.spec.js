// test/component.spec.js
var Vue = require('vue')
var ComponentA = require('../../src/components/a.vue')

describe('a.vue', function () {

  it('has a created funtion', () => {
    expect(typeof ComponentA.created).toBe('function')
  })

  it('should have correct message', function () {
    expect(typeof ComponentA.data).toBe('function')
    expect(ComponentA.data().msg).toBe('Hello Brian!')
  })

  // asserting rendered result by actually rendering the component
  it('should render correct message', function () {
    var vm = new Vue({
      components: {
        'test': ComponentA
      }
    }).$mount()
    expect(vm.$el.textContent).toBe('I want to see you!')
  })
})

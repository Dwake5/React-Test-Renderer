<h1> React testing with React-Test-Renderer </h1>

I am following a tutorial hosted at https://www.valentinog.com/blog/testing-react/, to improve my skills with TDD and specifically React testing. 

Docs: 
https://reactjs.org/docs/test-renderer.html

The general format of a test is: 

describe("Thing being tested", () => {

    test("What you're going to test", () => {

        [Put tests here, >1 to test for edge cases is better]

    })
    
})

This library condenses the react to pure JS.
This is something called snapshot testing, it does not use the real DOM. It takes a snapshot of the component on first pass and then see's if it matches the actual component. 

This kind of testing is good if the component doesnt change often. 

Testing the internal implementation of an object is always a bad idea

Act is imported into the testing library and is used when a component with react hooks is acted upon

If you are using an API, you should not send a request to the actual API, because this will often cost money and if the API goes down you're correct tests will fail

xyz.spec.js === xyz.test.js
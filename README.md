# preact-lifecycle-bug
Minimal reproduction of a lifecycle bug in preact

Run ```yarn start``` to start the webpack dev server which should open the test page in the browser

Notice that componentDidMount does not get called in the GoodComponent when there is an exception in the render method of another component that rendered before it.



## React style guide

----
* [Syntax](#syntax)
  * [A Note on Experimental Features](#a-note-on-experimental-features)
  * [Prettier](#prettier)
  * [Use ES6 classes.](#use-es2015-classes)
  * [Component method and property ordering](#component-method-and-property-ordering)
  * [Name handlers handleEventName.](#name-handlers-handleeventname)
  * [Name handlers in props onEventName.](#name-handlers-in-props-oneventname)
  * [Only export a single react class.](#only-export-a-single-react-class)
  * [Prop Types are Encouraged!](#prop-types-are-encouraged)
* [Language features](#language-features)
  * [Make "presentation" components pure.](#make-presentation-components-pure)
  * [Prefer <a href="http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#what-components-should-have-state">props to state</a>.](#prefer-props-to-state)
  * [<em>Never</em> store state in the DOM.](#never-store-state-in-the-dom)

----------
### Syntax

### A Note on Experimental Features

*This repo uses the following experimental Javascript syntax:*
- static fields
- instance properties
- autobinded class methods

All three are made available through `babel-plugin-transform-class properties`.

The standard way:
```js
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hi' };
    this.logMessage = this.logMessage.bind(this);
  }

  logMessage() {
    // This works because of the bind in the constructor above.
    console.log(this.state.message);
  }

  render() {
    return (
      <input type="button" value="Log" onClick={this.logMessage} />
    );
  }
}
```

The experimental way:
```js
class HelloWorld extends React.Component {
  // Note that state is a property,
  // so no constructor is needed in this case.
  state = {
    message: 'Hi'
  };

  logMessage = () => {
    // This works because arrow funcs adopt the this binding of the enclosing scope.
    console.log(this.state.message);
  };

  render() {
    return (
      <input type="button" value="Log" onClick={this.logMessage} />
    );
  }
}
```

*Note:* If you are unsure how to use the experimental syntax feel free to submit a PR in the regular style. We can show you how it maps to the experimental syntax.


### Prettier

Most formatting rules are automatically enforced by a `prettier` pre-commit hook.

#### Use ES2015 classes.

- Use an instance property for `state`.
- Autobind event handlers and callbacks.

    Example:

    ```jsx
    import React, {Component} from 'react';

    class Foo extends Component {
        static defaultProps = {}

        // instance property
        state = {}

        // autobinded event handler
        handleClick = (e) => {}
    }
    ```

- If `state` depends on `props`, define it in the constructor.

    Example:

    ```jsx
    class Bar extends Component {
        constructor(props) {
            super(props);   // must be called first
            this.state = {
                value: props.value,
            };
        }
    }
    ```

#### Component method and property ordering

Ordering within a React component is strict. The following example illustrates the precise ordering of various component methods and properties:

```js
class Foo extends Component {
    // Static properties
    static defaultProps = {}

    // The `constructor` method; can be omitted sometimes
    constructor() {
        super();
    }

    // Instance properties
    state = { hi: 5 }

    // React lifecycle hooks.
    // They should follow their chronological ordering:
    // 1. componentWillMount
    // 2. componentDidMount
    // 3. componentWillReceiveProps
    // 4. shouldComponentUpdate
    // 5. componentWillUpdate
    // 6. componentDidUpdate
    // 7. componentWillUnmount
    componentDidMount() { ... }

    // All other instance methods
    handleClick = (e) => { ... }

    // Finally, the render method
    render() { ... }
}
```

#### Name handlers `handleEventName`.

Example:

```jsx
<Component
    onClick={this.handleClick}
    onLaunchMissiles={this.handleLaunchMissiles}
/>
```

#### Name handlers in props `onEventName`.

This is consistent with React's event naming: `onClick`,`onDrag`, `onChange`, etc.

Example:

```jsx
<Component onLaunchMissiles={this.handleLaunchMissiles} />
```

#### Only export a single react class.

Every .jsx file should export a single React class, and nothing else.

Note that the file can still define multiple classes, it just can't export more than one.

#### PropTypes are Encouraged!

If using propTypes, use static properties for `defaultProps`.

```js
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

---------------------

### Language features

#### Make "presentation" components pure.

It's useful to think of the React world as divided into ["logic" components and "presentation" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

"Logic" components have application logic, but do not emit HTML themselves.

"Presentation" components are typically reusable, and do emit HTML.

Logic components can have internal state, but presentation components never should.

#### Prefer [props to state](http://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#what-components-should-have-state).

You almost always want to use props. By avoiding state when possible, you minimize redundancy, making it easier to reason about your application.

A common pattern — which matches the "logic" vs. "presentation" component distinction — is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.

Copying data from props to state can cause the UI to get out of sync and is especially bad.

#### *Never* store state in the DOM.

Do not use `data-` attributes or classes. All information should be stored in JavaScript, either in the React component itself, or in a React store if using a framework such as Redux.

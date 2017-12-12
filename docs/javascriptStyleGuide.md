## JavaScript Style Guide

----

* [Syntax](#syntax)
  * [Prettier](#prettier)
  * [Naming](#naming)
  * [File names](#file-names)
  * [Imports](#imports)
* [Comments and documentation](#comments-and-documentation)
  * [Inline Comments](#inline-comments)
  * [Top level file and class comments](#top-level-file-and-class-comments)
  * [Methods and properties comments](#methods-and-properties-comments)
* [Core language rules](#core-language-rules)
  * [Equality](#equality)
  * [Array and Object literals](#array-and-object-literals)
  * [Variable Declarations](#variable-declarations)
* [ES6/7 rules](#es67-rules)
  * [Use =&gt; instead of bind(this)](#use--instead-of-bindthis)
  * [Use backticks for string interpolation](#use-backticks-for-string-interpolation)
  * [Use ES6 classes for React classes](#use-es6-classes-for-react-classes)
----

This guide is adapted from the Khan's Tutorials style guide.

----------
### Syntax

### Prettier

Most formatting rules are automatically enforced by a `prettier` pre-commit hook.

[Prettier]((https://prettier.io/docs/en/index.html) is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style. It takes your code and reprints it from scratch by taking the line length into account.

The pre-commit hook will auto-format your `.js` and `.jsx` files every time a commit is made.

You can integrate it into your favorite editor [here](https://prettier.io/docs/en/editors.html)

#### Naming

Everything in `camelCase` except for constants and classes.

```js
methodNamesLikeThis
variableNamesLikeThis
parameterNamesLikeThis
propertyNamesLikeThis
ClassNamesLikeThis
SYMBOLIC_CONSTANTS_LIKE_THIS
```

#### File names

Everything in `camelCase` except for React Components.

```
fileNamesLikeThis.js
ReactComponentNamesLikeThis.js
```

#### Imports

**Module System**
Use ES2015 imports (`import foo from 'foo'`). Don't use CommonJS require (`const foo = require('foo')`). [Learn more about ES2015 imports](https://docs.google.com/document/d/12kT37eK7VusH8OK4vU9b7AmXN2G0Sw8g0c1LZ83-l-c/edit#heading=h.2j42ozjzl6id).

**Grouping**
Cluster imports into two groups:
- third-party (aka vendor) libraries
- first-party modules

Third-party libaries is anything we didn't write, like React and Lodash.
First-party modules is anything we wrote and that lives in this repo.

```js
import React from 'react';
import _ from 'lodash';

import App from './App.jsx'
import Card from './Card.jsx'
```

------------------------------
### Comments and documentation

#### Inline Comments

Use `//` for inline comments should be of the `//` variety. Avoid `/* */`.

#### Top level file and class comments

All files and classes should have comments.

JSDoc is strongly preferred, but not required. It's more important to have some documentation in the first place.

Syntax:
```js
/**
 * A JSDoc comment should begin with a slash and 2 asterisks.
 */
```

Top-level (top-of-file) comments are designed to orient readers unfamiliar with the code to what is in this file and any other disclaimers clients of the code should be given.  It should provide a description of the file's contents and any dependencies or compatibility information.  As an example:

```js
/**
 * Various components to handle management of lists of coaches for
 * the profile page.
 *
 * These utilities were not written to be a general purpose utility
 * for the entire code base, but has been optimized with the
 * assumption that the Profile namespace is fully loaded.
 */
```

Class comments should be used for every class, and give a description along with appropriate type tags

```js
/**
 * Class making something fun and easy.
 *
 * @param {string} arg1 An argument that makes this more interesting.
 * @param {Array.<number>} arg2 List of numbers to be processed.
 */
function SomeFunClass(arg1, arg2) {
  // ...
}
```

#### Methods and properties comments

All non-trivial methods and properties should also have JSDoc comments.

Example:

```js
/**
 * A UI component allows users to select badges from their full list
 * of earned badges, displaying them in a container.
 * Expects a Badges.BadgeList as a model.
 */
Badges.DisplayCase = Backbone.View.extend({
    /**
     * Whether or not this is currently in edit mode and the full
     * badge list is visible.
     */
    editing: false,
    fullBadgeList: null,

    /**
     * Enters "edit mode" where badges can be added/removed.
     * @param {number=} index Optional index of the slot in the display-case
     *     to be edited. Defaults to the first available slot, or if none
     *     are available, the last used slot.
     * @return {Badges.DisplayCase} This same instance so calls can be
     *     chained.
     */
    edit: function(index) {
    …
    },
   ...
};
```

-----------------------
### Core language rules

#### Equality

Use `===` (strict equality).

`==` has [numerous oddities](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/).

The only valid use of `==` is for comparing against null and undefined at the same time:

```js
// Check null and undefined, but distinguish between other falsey values
if (someVariable == null) {
```

Though you will often want to just check against falsey values, and can just say `if (!someVariable) {...}`.

#### Array and Object literals

Use `[]` and `{}` literals to initialize arrays and
objects. Avoid `Array` and `Object` constructors.

#### Variable Declarations

Use `const` by default, then `let` if you need reassignment. Avoid `var`.

---------------
### ES6/7 rules

Prefer newer syntax in the following cases.

| Construct | Use...                                | ...instead of |
| --------- | ------------------------------------- | ---------------------- |
| backticks | `` `http://${host}/${path}` `` | `"http://" + host + "/" + path` |
| destructuring | `var {x, y} = a;` | `var x = a.x; var y = a.y;` |
| fat arrow | `foo(() => {...})` | `foo(function() {...}.bind(this))` |
| let/const | `let a = 1; const b = "4EVAH"; a++;` | `var a = 1; var b = "4EVAH"; a++;` |
| includes | `array.includes(item)` | `array.indexOf(item) !== -1` |
| for/of | `for (const [key, value] of Object.entries(obj)) {...}` | `_.each(obj, function(value, key) {...})` |
| spread | `{...a, ...b, c: d}` | `_.extend({}, a, b, {c: d})` |
| rest params | `function(bar, ...args) {foo(...args);}` | `function(bar) {var args = Array.prototype.slice.call(arguments, 1); foo.apply(null, args);}` |

#### Use `=>` instead of `bind(this)`

Arrow functions are easier to read (and with Babel, more efficient)
than calling `bind` manually.

#### Use rest params instead of `arguments`

The magic `arguments` variable has some odd quirks. It's simpler to
use rest params like `(...args) => foo(args)`.

#### Use backticks for string interpolation

`+` is not forbidden, but backticks are encouraged!

#### Use ES6 classes for React classes

See [React Use ES6 classes](react.md#use-es6-classes) for details.

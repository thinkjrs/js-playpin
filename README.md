# js-playpin
_My place to learn, explore, and practice JavaScript-related items._

![Plastic balls in playpin](https://storage.googleapis.com/github.thinkjrs.dev/greyson-joralemon-9IBqihqhuHc-unsplash.jpg)

## `/examples`

### `/examples/formik-next.js`: A tutorial

Referencing the Formik and Next.js documentation, we'll combine the
two and mostly use those authors' pre-built instructional code.

#### Setup -> "initial commit"

1. create a `package.json`:
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}
```
2. Install your dependencies:
```bash
npm install react react-dom next formik -S # save them to package.json
```
3. Create a pages directory and `index.js` contained within:
```bash
mkdir pages
touch pages/index.js
```

Then throw the following in your newly minted `index.js` file:
```javascript
import Head from 'next/head';


function Index() {
  return (
    <div>
      <Head>
        <title>Formik-Next.js Tutorial</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>A <code>Formik</code> & <code>Next.js</code> exemplar</h1>
      <p>Hello, world!</p>
    </div>
  );
};

export default Index;
```

4. Run your development server on port 3000:
```bash
npm run dev
```

Pending everything works you should see a `compiled successfully - 
ready on http://localhost:3000` message in your terminal, to which
you should surely navigate.

##### What you should see

![Screen grab of expected results](https://storage.googleapis.com/github.thinkjrs.dev/formik-nextjs01.JPG)

#### Diving in



## JavaScript tutorial

A quick tour of the language via my personal learning journal.

### Statements

Declaring objects is easy in JavaScript, as is controlling their scope, via the `let`, `const`, and `var` statements.

#### Statement - `let`: _block_ scope
> The `let` statement declares a **block scope local variable**, optionally initializing it to a value.
> - _https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let_

##### `ReferenceError` 
Important to note, `let` variables _are not initialized until their definition is evaluated_, different from `var` variables which are given a value of `undefined`.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone
#### Statement - `var`: _enclosing_ scope
> The `var` statment declares a **variables**, optionally initializing it to a value.
> - _https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var_

##### "hoisting" 

Variables declared via `var` are all "hoisted" to the top of the page, processed before any other code execution.

From the Mozilla JS docs:
> This also menas that a variable can appear to be used before it's declared.

###### Best practice: `var` at top of context scope

More from the Mozilla Js docs:
> it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain.

##### No "hoisting" for value assignment
Remember that there's no hoist mechanism for assigning a variable a value; the typical when-it's-executed strategy is employed here. As in, when the assignment itself is reached throughout program execution.

#### Statement - `const`

Block-scoped, the value of a constant can't be changed through
reassignment and can't be redeclared. Think of `const` variables as
statically declared via `let` statements.

> ... creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do **not** become properties of the `window` object, unlike `var` variables.
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

As an important consequence to the definition above, the `const` declaration does **not** mean the contents of its assigned object
are immutable--read the above closely!

### Sources

Various links, sources, and reference materials for the tutorial above.

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var 
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone 

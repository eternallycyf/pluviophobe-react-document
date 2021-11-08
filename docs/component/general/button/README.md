# Button
To trigger an operation.

## When To Use
A button means an operation(or a series of operations).Clicking a button will trigger corresponding business logic.
In pluviophobe-react we provide 5 types of button.
- Primary button: indicate the main action, one primary button at most in one section.
- Default button: indicate a series of actions without priority.
- Dashed button: used for adding action commonly.
- Text button: used for the most secondary action.
- Link button: used for external links.
  And 4 other properties additionally.
- `danger`: used for actions of risk, like deletion or authorization.
- `ghost`: used in situations with complex background, home pages usually.
- `disabled`: when actions are not available.
- `loading` : add loading spinner in button, avoiding multiple submits too.

##

<RcCard
  content={
    <>
      <h2>type</h2>
      <Button type="primary" disabled={false}>
         primary button 
      </Button>
      <Button type="default" disabled={false}>
         default button 
      </Button>
      <Button type="danger" disabled={false}>
         danger button 
      </Button>
       <Button type="link" disabled={false}>
         link button 
      </Button>
      <h2>size</h2>
      <Button type="primary" size='lg'>
         lg button 
      </Button>
       <Button type="primary" size='small'>
         small button 
      </Button>
    </>
  }
  
  code={`
      import { Button } from 'pluviophobe-react';
      <h2>type</h2>
      <Button type="primary" disabled={false}>
         default button 
      </Button>
      <Button type="default" disabled={false}>
         default button 
      </Button>
      <Button type="danger" disabled={false}>
         default button 
      </Button>
      <Button type="link" disabled={false}>
         default button 
      </Button>
      <h2>size</h2>
      <Button type="primary" size='lg'>
         lg button 
      </Button>
       <Button type="primary" size='small'>
         small button 
      </Button>
  `}
  descriptionTitle={'Button Type'}
  description ={
       <div>
          There are <code>primary</code> button, <code>default</code> button, <code>dashed</code> button, <code>text</code> button and <code>link</code> button in pluviophobe-react
        </div>
  }
/>




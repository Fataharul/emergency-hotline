<h1>JavaScript Q&amp;A</h1>

<h3>1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll</h3>

<ol>
  <li><b>getElementById("id")</b> -> This DOM method helps us to select the 1 element which matches the given unique id. Takes only id's as argument. Returns only one element.</li>
  <li><b>getElementsByClassName("class")</b> -> This method gives us all the elements that matches the given class name. Takes only class names as argument. Returns all the elements with matching class name.</li>
  <li><b>querySelector("selector")</b> -> This method gives us the first element that matches the given selector name. Accepts any CSS selector (id, class, tag, etc.). Returns first matching element.</li>
  <li><b>querySelectorAll("selector")</b> -> This method returns all the elements that matches the given selector name. Accepts any CSS selector (id, class, tag, etc.). Returns all the elements with matching selector name.</li>
</ol>

<h3>2. How do you create and insert a new element into the DOM?</h3>

<p>We can insert a new element into DOM by following 3 simple steps</p>
<ol>
  <li>First we will create the element by using document.createElement("tag") method. In place of "tag" we will place the tag of the element we want to create. Like: "div","p", "h1", etc.</li>
  <li>Then we will set the innerText or innerHtml as per our requirement.</li>
  <li>Finally, we will add the element into DOM by using appendChild(), append() or prepend() methods.</li>
</ol>

<h3>3. What is Event Bubbling and how does it work?</h3>

<p>
  Event Bubbling is a term in web development which is often used to describe how events work in DOM. When an event triggers in an element
  it gets passed to it's parent element, then it's grand parent element and all the way upto the document or root
  element. Like bubble the event moves upto top until it reaches the root element. That's why it is called Event Bubbling.
</p>

<h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>

<p>
  Event Delegation is technique in javascript where instead of adding event listeners to all the child elements we add event listener to their
  parents. Then we track which for which child the event was triggered using event.target method.
</p>

<p>Event Delegation is useful for many reasons: </p>
<ol>
  <li>It helps us to reduce the number of event listeners. Which makes the code more readable and managable.</li>
  <li>It makes the code dynamic as we can add childs to a parent and the parent itself will handle the events. So, we won't have to handle the events for newly added child.</li>
</ol>

<h3>5. What is the difference between preventDefault() and stopPropagation() methods?</h3>

<ol>
  <li>preventDefault() -> Stops the default behavior of browser. For example: stopping a form from submitting or a link from opening.</li>
  <li>stopPropagation() -> This method is used to stop the event from bubbling up to parent elements.</li>
</ol>

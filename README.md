# heroAssignmentFive

# JavaScript DOM & Events - Notes

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById**:  
  Gets one element by its ID. Returns a single element.  

  ```const element = document.getElementById("myId");```

* **getElementsByClassName**:
  Gets all elements with a certain class. Returns a collection of elements.

  ```const elements = document.getElementsByClassName("myClass");```
  

* **querySelector**:
  Gets the first element that matches a CSS selector.

  ```const element = document.querySelector(".myClass");```


* **querySelectorAll**:
  Gets all elements that match a CSS selector. Returns a list of elements.

  ```const elements = document.querySelectorAll(".myClass");```

---

## 2. How to create and insert a new element into the DOM

1. Create an element using `document.createElement()`.

   ```const newDiv = document.createElement("div");```
   
2. Add text or attributes (optional).

   ```newDiv.innerText = "Hello World!";```
   ```newDiv.className = "myDiv";```
   
3. Add it to the page using `appendChild()` or `insertBefore()`.

   ```document.body.appendChild(newDiv);```
   

---

## 3. Event Bubbling

* Event bubbling is when an event starts from the element that was clicked (target) and then goes up to its parents.
* Example: Clicking a button inside a div will first trigger the button's click, then the div, then the body.
* This happens automatically in JavaScript.

---

## 4. Event Delegation

* Event delegation is when you put one event listener on a parent element to handle events for its child elements.
* Useful because it saves memory and works for new elements added later.


`document.getElementById("parent").addEventListener("click", function(e) {`
`    if(e.target && e.target.tagName === "BUTTON") {`
`        console.log("Button clicked:", e.target.innerText);`
`    }`
`});`

---

## 5. preventDefault() vs stopPropagation()

* **preventDefault()**: Stops the normal action of an element.
  Example: Stop a form from submitting.


## document.querySelector("form").addEventListener("submit", function(e){
##    e.preventDefault(); // form won't reload
## });

* **stopPropagation()**: Stops the event from going up to parent elements.


## document.querySelector("button").addEventListener("click", function(e){
##    e.stopPropagation(); // parent click won't trigger
## });

---

## Summary

* `getElementById` → one element by ID
* `getElementsByClassName` → many elements by class
* `querySelector` → first element by selector
* `querySelectorAll` → all elements by selector
* Event Bubbling → event moves up the DOM
* Event Delegation → parent listens to child events
* `preventDefault()` → stops default action
* `stopPropagation()` → stops event bubbling

---
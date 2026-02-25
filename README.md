# BigbasketMock

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Notes for refernce

## CORS issue

To prevent CORS issue , a proxy is set.

Step 1 — Create proxy.conf.json in root (same level as angular.json)

{
  "/api": {
    "target": "https://freeapi.miniprojectideas.com",
    "secure": true,
    "changeOrigin": true
  }
}

Step 2 — Modify angular.json

In 
"serve": { }
Add
"options": {
  "proxyConfig": "proxy.conf.json"
}

Step 3 — Change Your API URL

this.uri = "/api/BigBasket/GetAllCategory";

## track keyword

@for (cat of categories; track cat.categoryId)

It tells Angular:

“Each item in this list has a unique identity, and that identity is categoryId.”

So instead of tracking items by position (index), Angular tracks them by ID.

🧠 Why That Matters

Imagine your list:

[
  { categoryId: 55, categoryName: "Fruits" },
  { categoryId: 56, categoryName: "Bakery" }
]


If Angular tracks by index (default behavior):

Item at index 0 = Fruits

Item at index 1 = Bakery

Now imagine the list updates:

[
  { categoryId: 99, categoryName: "New Category" },
  { categoryId: 55, categoryName: "Fruits" },
  { categoryId: 56, categoryName: "Bakery" }
]


Without track, Angular thinks:

Index 0 changed → destroy old DOM

Index 1 changed → destroy old DOM

Recreate everything

💥 That’s inefficient.

🚀 With track cat.categoryId

Angular now thinks:

Oh, 55 is still 55

56 is still 56

Only 99 is new

So it only adds ONE new DOM element.

Much faster. Much cleaner.

📌 Simple Rule

Always track by a unique key.

Best options:

id

categoryId

productId

Never track by:

index (unless list never changes)

non-unique values

🟢 In Your Case

This is perfect:

@for (cat of categories; track cat.categoryId)


Because:

✔ categoryId is unique
✔ It won’t change
✔ Good performance

⚠ Small Extra Tip

If your ID might be undefined at first, safer syntax is:

@for (cat of categories; track cat.categoryId!)


The ! tells TypeScript:

“Trust me, it exists.”

One-Line Summary

track cat.categoryId =
“Angular, use this ID to uniquely identify list items so you don’t destroy and recreate DOM unnecessarily.”

Clean. Efficient. Professional.

If you want, I can also show how this differs from *ngFor trackBy in older Angular.

## shareReplay()

🎯 What does shareReplay(1) do?

It:

Makes the API call only once

Shares the result with all subscribers

Caches (replays) the last emitted value

Think of it like:

“Fetch once. Store result. Give same result to everyone.”

🟢 Super Simple Example (Non-HTTP)

Without shareReplay:

const obs$ = new Observable(observer => {
  console.log("API CALLED");
  observer.next(Math.random());
  observer.complete();
});

obs$.subscribe(v => console.log("Sub1:", v));
obs$.subscribe(v => console.log("Sub2:", v));


Output:

API CALLED
Sub1: 0.1234

API CALLED
Sub2: 0.9876


Two calls. Two different values.

✅ Now with shareReplay(1)
const obs$ = new Observable(observer => {
  console.log("API CALLED");
  observer.next(Math.random());
  observer.complete();
}).pipe(
  shareReplay(1)
);

obs$.subscribe(v => console.log("Sub1:", v));
obs$.subscribe(v => console.log("Sub2:", v));


Output:

API CALLED
Sub1: 0.4567
Sub2: 0.4567


Only one call. Same value reused.

That’s the magic.

## ChangeDetectorRef

Added ChangeDetectorRef because angular was not refreshing the DOM when the service returns data


# Clean Code by Robert C. Martin — Reading Summary

**Book:** Clean Code: A Handbook of Agile Software Craftsmanship
**Author:** Robert C. Martin ("Uncle Bob")
**Chapters covered:** 2 (Meaningful Names), 3 (Functions), 4 (Comments), 6 (Objects and Data Structures)

## Introduction

The main idea connecting these four chapters is that code should explain itself. Starting from a meaningful name and a clean structure, well-written code removes the need for extra explanation, makes reading easier, and makes refactoring safer.

## Chapter 2 — Meaningful Names

Naming should reveal the intention of the code. A name should tell the reader what something does without needing to open it or read a comment.

The rules I took from this chapter:

- **Intention-revealing conventions.** Methods like `getName` or `setName` tell you exactly what they do, and for booleans we use the `is` prefix, like `isActive`, so the name reads naturally inside a condition:

```js
if (user.isActive) {
  sendGreeting(user);
}
```

- **Searchable names.** A variable should be easy to find by having a unique and meaningful name that can be searched in the codebase. Single letters or magic numbers are impossible to search for.
- **No disinformation.** A variable name should always describe the true value it holds — nothing else — and reflect its exact type. A misleading name is worse than a vague one.
- **One word per concept.** Pick a single word for each operation and use it consistently across the codebase, instead of mixing different words for the same idea.

When every name reveals its intention this way, the code becomes readable on its own, which is the foundation for everything in the following chapters.

## Chapter 3 — Functions

A function should be responsible for doing one thing only, to improve code readability. It should use its arguments and return a behaviour based on those arguments — nothing more. Making one function do multiple things at once complicates readability and makes refactoring much harder, because changing one responsibility risks breaking the others hidden inside the same function.

The number of arguments matters too. A function with 4–5 parameters is a bad sign because it has a dependency on multiple arguments at once. The solution is to separate it into multiple smaller functions, each incorporating the parameters it actually needs.

Here is a refactoring example. The original function does several things at once: looping, filtering by status, calculating a discount, building a report string, and sending a log:

```js
function processOrders(orders) {
  let total = 0;
  let summary = "Order Summary:\n";

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === 'completed') {
      let finalPrice = orders[i].price;

      if (orders[i].isPremiumCustomer) {
        finalPrice = finalPrice * 0.9;
      }

      total += finalPrice;
      summary += `- Order #${orders[i].id}: $${finalPrice.toFixed(2)}\n`;

      notifier.sendSystemLog(`Processed ${orders[i].id}`);
    }
  }

  summary += `Total Revenue: $${total.toFixed(2)}`;
  return summary;
}
```

After cleaning it up, each responsibility lives in its own small, well-named function:

```js
const isCompleted = (order) => order.status === 'completed';

const calculateDiscountedPrice = (order) => {
  return order.isPremiumCustomer ? order.price * 0.9 : order.price;
};

const formatOrderLine = (order, price) => {
  return `- Order #${order.id}: $${price.toFixed(2)}\n`;
};

function generateRevenueReport(orders) {
  let totalRevenue = 0;
  let reportContent = "Order Summary:\n";

  orders.filter(isCompleted).forEach(order => {
    const finalPrice = calculateDiscountedPrice(order);
    totalRevenue += finalPrice;
    reportContent += formatOrderLine(order, finalPrice);
    notifier.sendSystemLog(`Processed ${order.id}`);
  });

  return `${reportContent}Total Revenue: $${totalRevenue.toFixed(2)}`;
}
```

Each piece of logic is now readable and testable on its own, and the main function reads like a description of what happens instead of how. Even the rename from `processOrders` to `generateRevenueReport` applies Chapter 2: the new name reveals what the function actually returns.

## Chapter 4 — Comments

Martin argues that most comments are a failure, because the code should explain itself. Adding a comment to explain a function is redundant — the function should already be readable, starting from a meaningful name and clean structure, so that no comment is needed in the first place.

A comment is justified only in specific cases: when there is special documentation that cannot be explained through the code or syntax itself — for example, the reasoning behind a decision — as well as future plans or TODOs.

## Chapter 6 — Objects and Data Structures

Objects provide behaviour or actions without the need to know their internal parts, while data structures allow easy access to the data and provide no behaviour of their own. They are opposites, and knowing which one you are writing keeps the design clear. Hiding the internal parts of an object matters because the code using it depends only on its behaviour — the internals can change without breaking anything outside.

A practical example of the data structure side is the DTO (Data Transfer Object). In API Platform, DTOs are a feature that allows creating a route while leveraging API Platform's serialization and normalization, without using a controller or writing your own queries — the DTO is just a shape for the data crossing the boundary, with no behaviour attached.

## Conclusion

Across these chapters, the same principle repeats at every level: meaningful names make code self-explanatory, single-responsibility functions keep it readable and refactorable, comments are reserved for what code genuinely cannot express, and the separation between objects (behaviour) and data structures (data) keeps boundaries clean.

For me, the takeaway is a change in how I think about writing code: not just making something the machine can execute, but writing code my team can read, maintain, and modify without needing me to explain it.

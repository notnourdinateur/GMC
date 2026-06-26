/* =====================================================================
   NovaCart — Shopping Cart logic (Vanilla JavaScript, DOM events)

   This single file makes the cart fully functional:
     1. "+" / "-" buttons adjust each item's quantity.
     2. The trash button deletes an item from the cart.
     3. The heart button "likes" an item and changes its colour.
     4. The grand total is recalculated after every change.

   Technique used: EVENT DELEGATION.
   Instead of attaching a listener to every single button (there are many),
   we attach ONE "click" listener to the cart container. When a click
   happens we look at event.target to figure out which button was pressed.
   This keeps the code short and still works for any number of rows.
   ===================================================================== */

// ---- Grab the elements we need to read from / write to ----
const cart        = document.querySelector(".cart");          // wraps all rows
const grandTotalEl = document.querySelector(".grand-total");  // total in summary
const likedCountEl = document.querySelector(".liked-count");  // liked counter
const emptyMsg     = document.querySelector(".empty-msg");    // "cart is empty"

/* ---------------------------------------------------------------------
   Helper: recalculate every line total AND the grand total.
   Called after any quantity change or deletion so the numbers always
   stay in sync with what is shown on screen.
   ------------------------------------------------------------------- */
function updateTotals() {
  let grandTotal = 0;

  // Loop over each item still present in the cart
  document.querySelectorAll(".cart-item").forEach((item) => {
    // Unit price is stored on the element as data-price (e.g. data-price="120")
    const unitPrice = Number(item.dataset.price);

    // Current quantity shown in the stepper
    const qty = Number(item.querySelector(".qty-value").textContent);

    // Price for this single row = unit price × quantity
    const lineTotal = unitPrice * qty;

    // Show the line total (formatted with 2 decimals, e.g. $240.00)
    item.querySelector(".item-total").textContent = "$" + lineTotal.toFixed(2);

    // Add it to the running grand total
    grandTotal += lineTotal;
  });

  // Write the grand total into the summary box
  grandTotalEl.textContent = "$" + grandTotal.toFixed(2);

  // If there are no items left, reveal the "empty cart" message
  const remaining = document.querySelectorAll(".cart-item").length;
  emptyMsg.hidden = remaining > 0;
}

/* ---------------------------------------------------------------------
   Helper: count how many items are currently liked and show it.
   ------------------------------------------------------------------- */
function updateLikedCount() {
  const liked = document.querySelectorAll(".like-btn.liked").length;
  likedCountEl.textContent = liked;
}

/* ---------------------------------------------------------------------
   ONE click listener for the whole cart (event delegation).
   ------------------------------------------------------------------- */
cart.addEventListener("click", (event) => {
  // .closest() walks up from the clicked element to find the button type.
  // This works whether the user clicked the <button> or the <i> icon inside it.
  const plusBtn   = event.target.closest(".plus");
  const minusBtn  = event.target.closest(".minus");
  const deleteBtn = event.target.closest(".delete-btn");
  const likeBtn   = event.target.closest(".like-btn");

  // The row (.cart-item) that contains whatever was clicked
  const item = event.target.closest(".cart-item");
  if (!item) return; // safety: click landed outside any row

  /* ---------- 1 & 4. INCREASE quantity ---------- */
  if (plusBtn) {
    const qtyEl = item.querySelector(".qty-value");
    qtyEl.textContent = Number(qtyEl.textContent) + 1;
    updateTotals(); // keep prices in sync
  }

  /* ---------- 1 & 4. DECREASE quantity ---------- */
  if (minusBtn) {
    const qtyEl = item.querySelector(".qty-value");
    const current = Number(qtyEl.textContent);

    // Never let quantity drop below 1 (use delete to remove the item)
    if (current > 1) {
      qtyEl.textContent = current - 1;
      updateTotals();
    }
  }

  /* ---------- 2 & 4. DELETE the item ---------- */
  if (deleteBtn) {
    // Add a class that triggers the slide-out animation, then remove the
    // element from the DOM once the animation finishes.
    item.classList.add("removing");
    item.addEventListener("transitionend", () => {
      item.remove();      // actually take it out of the cart
      updateTotals();     // recompute the total without this item
      updateLikedCount(); // in case the removed item was liked
    }, { once: true });
  }

  /* ---------- 3. LIKE / UNLIKE (heart colour) ---------- */
  if (likeBtn) {
    const icon = likeBtn.querySelector("i");

    // Toggle the "liked" class — CSS turns the heart pink when present
    likeBtn.classList.toggle("liked");

    // Swap between the outline heart (fa-regular) and the filled heart
    // (fa-solid) so a liked item looks filled in, an unliked one hollow.
    if (likeBtn.classList.contains("liked")) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }

    // Replay the little "pop" animation each time the heart is clicked
    likeBtn.classList.remove("pop");
    void likeBtn.offsetWidth; // force reflow so the animation can restart
    likeBtn.classList.add("pop");

    updateLikedCount();
  }
});

/* ---------------------------------------------------------------------
   Run once on page load so the totals shown in the HTML are guaranteed
   to match the data, instead of trusting the hard-coded numbers.
   ------------------------------------------------------------------- */
updateTotals();
updateLikedCount();

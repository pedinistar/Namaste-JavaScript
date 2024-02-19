// ⭐⭐⭐⭐Closure with event listener⭐⭐⭐⭐

function attachEventListener() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    console.log("button clicked", ++count);
  });
}

attachEventListener();

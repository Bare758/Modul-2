const global = "Global";

(function () {
  document.querySelector("#btn1").addEventListener("click", () => {
    const notGlobalFunction = () => {
      const notGlobal = "Not Global";
      document.getElementById("id1").innerHTML =
        typeof notGlobal + " " + notGlobal;
    };
    notGlobalFunction();
    document.getElementById("id2").innerHTML = typeof global + " " + global;

    document.getElementById("id3").innerHTML = typeof notGlobal;
  });

  const event = new CustomEvent("change-color", {
    detail: { details: { color: "red", string1: "Animal" } },
  });

  document.addEventListener("change-color", (e) => {
    let color1 = e.detail.details.color;

    document.querySelectorAll(".a1").forEach((el) => {
      el.style.color = color1;
    });
  });

  document.addEventListener("change-color", (e) => {
    let word1 = e.detail.details.string1;
    console.log(e);
    document.querySelector("#id4").innerHTML = word1;
  });

  let full = true;

  document.querySelector("#btn5").addEventListener("click", () => {
    full && (document.querySelector("#id5").innerHTML = "&& is true");
  });

  document.querySelector("#btn4").addEventListener("click", () => {
    document.dispatchEvent(event);
  });
})();


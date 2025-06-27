
document.addEventListener("DOMContentLoaded", function () {
  // Apply .is-selected to checked inputs only
  document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach((input) => {
    const label = input.closest("label");
    if (!label) return;

    const updateState = () => {
      const groupName = input.name;
      const allInGroup = document.querySelectorAll(`input[name='${groupName}']`);

      allInGroup.forEach((item) => {
        const l = item.closest("label");
        if (l) l.classList.remove("is-selected");
      });

      if (input.checked && label) label.classList.add("is-selected");
    };

    input.addEventListener("change", updateState);
    if (input.checked) updateState(); // initial state
  });
});

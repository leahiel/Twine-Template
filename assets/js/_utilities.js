// LINK: assets/js/_setup.js#utilities
/* Set a tooltip for a singular word. This also makes it a template. 
BUG: After a linkreplace, this function doesn't work properly. Likely an issue with tt-macro. */
function addTooltip(macroname, passage, metaname = false) {
  let psg = Story.get(passage);

  Template.add(macroname, function () {
    let name = metaname ? metaname : this.name;

    // Only show tooltips if they're enabled in settings.
    // AND
    // TOOD: Only show tooltips if there is text in the passage.
    if (settings.tooltips) {
      return "<<tt " + psg.title + ">>" + name + "<</tt>>";
    } else {
      return name;
    }
  });
}

/* Reset if these already exist. If one exists, then the others must exist. */
function settingsHandler() {
  if (Template.has("he")) {
    Template.delete("he");
    Template.delete("him");
    Template.delete("his");
    Template.delete("Mr");
    Template.delete("Mister");
    Template.delete("wizard");
    Template.delete("wizards");
    Template.delete("boy");
    Template.delete("man");
    Template.delete("sir");
  }

  switch (settings.pronouns) {
    case "male":
      Template.add("he", "he");
      Template.add("him", "him");
      Template.add("his", "his");
      Template.add("Mr", "Mr.");
      Template.add("Mister", "Mister");
      Template.add("wizard", "wizard");
      Template.add("wizards", "wizards");
      Template.add("boy", "boy");
      Template.add("man", "man");
      Template.add("sir", "sir");
      break;
    case "female":
      Template.add("he", "she");
      Template.add("him", "her");
      Template.add("his", "her");
      Template.add("Mr", "Miss");
      Template.add("Mister", "Miss");
      Template.add("wizard", "witch");
      Template.add("wizards", "witches");
      Template.add("boy", "girl");
      Template.add("man", "woman");
      Template.add("sir", "ma'am");
      break;
    default:
      /* Assume "misc": */
      Template.add("he", "they");
      Template.add("him", "them");
      Template.add("his", "their");
      Template.add("Mr", "M.");
      Template.add("Mister", "Gentleperson");
      Template.add("wizard", "wizard");
      Template.add("wizards", "wizards");
      Template.add("man", "guy");
      Template.add("sir", "sir");
  }
}

/** Returns an array either with no duplicate items (default), or with duplicate items. */
function ranItems(amount, arr, isDuplicatable = false) {
  if (amount === 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (isDuplicatable) {
    let temparr = [];
    for (amount; amount > 0; amount--) {
      temparr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return temparr;
  }

  if (amount > arr.length) {
    console.warn(
      `ranItems: You tried to randomized without creating duplicates ${amount} items, but there are only ${arr.length} items in the array. We set the amount to the length of the array so the program can continue running.`
    );
    amount = arr.length;
  }

  // DESIRED: Optimize this.
  // To start with, if amount === arr.length, we can just return a shufflized array.
  let temparr = [];
  for (amount; amount > 0; amount--) {
    let randItem = arr[Math.floor(Math.random() * arr.length)];
    while (temparr.includes(randItem)) {
      randItem = arr[Math.floor(Math.random() * arr.length)];
    }

    temparr.push(randItem);
  }

  return temparr;
}

// LINK: assets/js/_setup.js#UPDATE

function update_save() {
  //setup.version -> current version

  // We purposefully don't break out of the switch because we want it to update sequentially.
  switch (State.variables.version) {
    case undefined:
      console.log("Updating save data to %c0.1.0 InDev%c.", "color: lightblue", "color: initial");
      State.variables.version = "0.1.0 InDev";
      Save.autosave.save();
      console.log("Successfully updated save data to %c0.1.0 InDev%c.", "color: lightblue", "color: initial");
    case "0.1.0 InDev":
    //
  }
}

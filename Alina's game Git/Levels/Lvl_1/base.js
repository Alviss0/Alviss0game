"use strict";

import { incrementScore } from "../../Common/incrementScore.js";
import { changeTheme } from "../../Common/changeTheme.js";
import { settings } from "../../Common/settings.js";
import { addModal } from "../../Common/modal.js";

addModal(settings.Levels.Level_1);
changeTheme();

const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  incrementScore(settings.Levels.Level_1.Score);
  location.href = "../Lvl_2/lvl2.html";
});

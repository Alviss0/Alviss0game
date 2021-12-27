"use strict";

import { incrementScore } from "../../Common/incrementScore.js";
import { changeTheme } from "../../Common/changeTheme.js";
import { settings } from "../../Common/settings.js";

import { addModal } from "../../Common/modal.js";

addModal(settings.Levels.Level_2);
changeTheme();

const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  incrementScore(settings.Levels.Level_2.Score);
  location.href = "../Lvl_3/lvl3.html";
});

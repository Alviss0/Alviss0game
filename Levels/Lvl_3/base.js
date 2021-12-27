"use strict";
import { settings } from "../../Common/settings.js";
import { addModal } from "../../Common/modal.js";
import { addDrop } from "./Drag.js";
import { changeTheme } from "../../Common/changeTheme.js";

addModal(settings.Levels.Level_3);
addDrop(settings.Levels.Level_3);
changeTheme();

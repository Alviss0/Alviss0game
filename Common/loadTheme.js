let themeLink = document.getElementById("themeLink");

const LTlightThemeLink = "../../Common/lightTheme.css";
const LTdarkThemeLink = "../../Common/darkTheme.css";

const LTlightTheme = "lightTheme";
const LTdarkTheme = "darkTheme";

let LTcurrTheme = localStorage.getItem("currTheme");

if (LTcurrTheme == LTlightTheme || LTcurrTheme == "undefined") {
  themeLink.href = LTlightThemeLink;
} else {
  themeLink.href = LTdarkThemeLink;
}

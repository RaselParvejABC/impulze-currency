const vscode = require("vscode");
const fs = require("fs");

// Callback on Extension Activation
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("Impulze Currency is now active!");

  // Callback on Currency Command
  let currencyRegistration = vscode.commands.registerCommand(
    "impulze-currency.currency",

    function () {
      vscode.window.showInformationMessage(
        "Happily Converting for You: Impulze Currency Converter!"
      );

      // Create and show Currency WebView
      const currencyUI = vscode.window.createWebviewPanel(
        "currencyUI", // Internal ID
        "Impulze Currency Converter", // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
          enableScripts: true,
        }
      );

      currencyUI.webview.html = fs
        .readFileSync(__dirname + "/converter.html", "utf8")
        .toString();
    }
  );

  context.subscriptions.push(currencyRegistration);
}

// Callback on Extension Deactivation
function deactivate() {
  vscode.window.showWarningMessage("Impulze Currency is Deactivated!");
}

module.exports = {
  activate,
  deactivate,
};

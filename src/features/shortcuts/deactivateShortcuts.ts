import { t } from "../../i18n/language";

let deactivateShortcutsMessage = `${t("deactivateShortcutsAlert")} ${
  window.location.pathname.startsWith("/clases/examen")
    ? t("deactivateShortcutsExamNote")
    : ""
}`;

let deactivateConfirmShortcuts = window.confirm(deactivateShortcutsMessage);

if (deactivateConfirmShortcuts) {
  chrome.storage.sync.set({ shortcuts: false });
  window.location.reload();
}

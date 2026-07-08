import { t } from "../../i18n/language";

let deactivateSpotlightMessage = t("spotlightAlert");

let deactivateConfirmSpotlight = window.confirm(
  deactivateSpotlightMessage
) as boolean;

if (deactivateConfirmSpotlight) {
  chrome.storage.sync.set({ spotlight: false });
  window.location.reload();
}

// =====================================================
//  Golden Place – site settings
//  This is the ONLY file you need to edit for contact details.
//  Anything left empty ("") is hidden on the site automatically.
// =====================================================
window.GP_CONFIG = {
  // WhatsApp number in international format, digits only. Example: "972501234567"
  whatsapp: "",

  // Phone number as it should be displayed. Example: "050-123-4567"
  phone: "",

  // Contact email. Example: "info@goldenplace.co.il"
  email: "",

  // Name of the accessibility coordinator (shown on the accessibility statement)
  contactName: "",

  // Your listing pages
  bookingUrl: "",
  airbnbUrl: "",
  zimmertopUrl: "https://www.zimertop.co.il/en/zimmer/goldenplace.html"
};

// ---- shared helper: fills / hides [data-cfg] elements on any page ----
(function () {
  function apply() {
    var c = window.GP_CONFIG;
    document.querySelectorAll("[data-cfg]").forEach(function (el) {
      var key = el.getAttribute("data-cfg");
      var val = c[key];
      var wrap = el.closest("[data-cfg-wrap]") || el;
      if (!val) { wrap.hidden = true; return; }
      wrap.hidden = false;
      if (key === "phone") el.href = "tel:" + val.replace(/[^\d+]/g, "");
      else if (key === "email") el.href = "mailto:" + val;
      else if (key === "whatsapp") el.href = "https://wa.me/" + val;
      else if (/Url$/.test(key)) el.href = val;
      if (el.hasAttribute("data-cfg-text")) el.textContent = val;
    });
  }
  window.GP_applyConfig = apply;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();

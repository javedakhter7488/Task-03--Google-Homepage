// ─────────────────────────────────────────
//  Google Homepage Clone — script.js
//  Handles interactive behaviour (UI only)
// ─────────────────────────────────────────

(function () {
  "use strict";

  // ── Focus the search input automatically on page load ──
  // Google autofocuses the search box so users can type immediately.
  window.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("searchInput");
    if (input) {
      input.focus();
    }
  });

  // ── Mic button — visual ripple feedback (no real API) ──
  var micBtn = document.getElementById("micBtn");
  if (micBtn) {
    micBtn.addEventListener("click", function () {
      micBtn.classList.add("active");
      setTimeout(function () {
        micBtn.classList.remove("active");
      }, 300);
    });
  }

  // ── "Google Search" button — show input value in title briefly ──
  var btnGoogleSearch = document.getElementById("btnGoogleSearch");
  if (btnGoogleSearch) {
    btnGoogleSearch.addEventListener("click", function () {
      var q = document.getElementById("searchInput").value.trim();
      if (q) {
        // Mimic what a real search would do — redirect (disabled here)
        // window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(q);
        // For the clone, just echo in the page title
        document.title = q + " - Google Search";
      }
    });
  }

  // ── "I'm Feeling Lucky" button — same stub ──
  var btnLucky = document.getElementById("btnLucky");
  if (btnLucky) {
    btnLucky.addEventListener("click", function () {
      var q = document.getElementById("searchInput").value.trim();
      if (q) {
        document.title = "Lucky: " + q;
      }
    });
  }

  // ── Allow pressing Enter in the search box ──
  var searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var q = searchInput.value.trim();
        if (q) {
          document.title = q + " - Google Search";
        }
      }
    });
  }

})();
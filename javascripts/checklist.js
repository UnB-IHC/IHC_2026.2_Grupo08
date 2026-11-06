/* Checklist interativo: salva marcações no navegador, mostra progresso,
   filtra pendentes, limpa a página e copia a lista de pendentes. */
(function () {
  "use strict";

  function init() {
    var article = document.querySelector(".md-content article");
    var items = article ? Array.prototype.slice.call(article.querySelectorAll("li.task-list-item")) : [];
    if (!items.length || article.querySelector(".ck-bar")) return;

    var STORE = "ihc-g08:" + location.pathname.replace(/index\.html$/, "");
    var total = items.length;

    function keyOf(li) {
      return li.textContent.replace(/\s+/g, " ").trim().slice(0, 90);
    }
    function box(li) { return li.querySelector('input[type="checkbox"]'); }

    var saved = [];
    try { saved = JSON.parse(localStorage.getItem(STORE) || "[]"); } catch (e) { saved = []; }
    var set = {};
    saved.forEach(function (k) { set[k] = true; });

    items.forEach(function (li) {
      var b = box(li);
      if (b) b.checked = !!set[keyOf(li)];
    });

    /* Barra de progresso */
    var bar = document.createElement("div");
    bar.className = "ck-bar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "Progresso do checklist");
    bar.innerHTML =
      '<div class="ck-bar__top">' +
      '<strong class="ck-label" aria-live="polite"></strong>' +
      '<span class="ck-actions">' +
      '<button type="button" class="ck-btn" data-act="filter" aria-pressed="false">Mostrar só pendentes</button>' +
      '<button type="button" class="ck-btn" data-act="copy">Copiar pendentes</button>' +
      '<button type="button" class="ck-btn" data-act="reset">Limpar marcações</button>' +
      "</span></div>" +
      '<progress class="ck-progress" max="' + total + '" value="0"></progress>' +
      '<span class="ck-status" role="status" aria-live="polite"></span>';
    var h1 = article.querySelector("h1");
    if (h1 && h1.nextSibling) h1.parentNode.insertBefore(bar, h1.nextSibling);
    else article.insertBefore(bar, article.firstChild);

    var label = bar.querySelector(".ck-label");
    var prog = bar.querySelector("progress");
    var status = bar.querySelector(".ck-status");
    prog.setAttribute("aria-label", "Progresso do checklist");

    /* Contador por seção (h2) */
    var counters = [];
    Array.prototype.forEach.call(article.querySelectorAll("h2"), function (h) {
      var lis = [], n = h.nextElementSibling;
      while (n && n.tagName !== "H2") {
        if (n.matches && n.matches("ul")) {
          lis = lis.concat(Array.prototype.slice.call(n.querySelectorAll(":scope > li.task-list-item")));
        }
        n = n.nextElementSibling;
      }
      if (!lis.length) return;
      var span = document.createElement("span");
      span.className = "ck-count";
      var link = h.querySelector(".headerlink");
      h.insertBefore(span, link || null);
      counters.push({ el: span, lis: lis });
    });

    function done(list) {
      return list.filter(function (li) { var b = box(li); return b && b.checked; }).length;
    }
    function refresh() {
      var d = done(items), pct = Math.round((d / total) * 100);
      label.textContent = d + " de " + total + " itens atendidos (" + pct + "%)";
      prog.value = d;
      counters.forEach(function (c) {
        var x = done(c.lis);
        c.el.textContent = x + "/" + c.lis.length;
        c.el.classList.toggle("ck-count--ok", x === c.lis.length);
      });
    }
    function persist() {
      var keys = items.filter(function (li) { var b = box(li); return b && b.checked; }).map(keyOf);
      try { localStorage.setItem(STORE, JSON.stringify(keys)); } catch (e) { /* armazenamento indisponível */ }
    }
    function say(msg) {
      status.textContent = msg;
      setTimeout(function () { status.textContent = ""; }, 3500);
    }

    article.addEventListener("change", function (ev) {
      if (ev.target && ev.target.matches('li.task-list-item input[type="checkbox"]')) {
        persist(); refresh();
      }
    });

    bar.addEventListener("click", function (ev) {
      var btn = ev.target.closest("button[data-act]");
      if (!btn) return;
      var act = btn.getAttribute("data-act");

      if (act === "filter") {
        var on = article.classList.toggle("ck-only-pending");
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        btn.textContent = on ? "Mostrar todos" : "Mostrar só pendentes";
      }

      if (act === "reset") {
        if (!window.confirm("Limpar todas as marcações desta página?")) return;
        items.forEach(function (li) { var b = box(li); if (b) b.checked = false; });
        persist(); refresh(); say("Marcações desta página limpas.");
      }

      if (act === "copy") {
        var pend = items.filter(function (li) { var b = box(li); return b && !b.checked; });
        var title = h1 ? h1.textContent.replace(/¶/g, "").trim() : document.title;
        var txt = "Pendentes em \"" + title + "\" (" + pend.length + " de " + total + "):\n" +
          pend.map(function (li) {
            var c = li.cloneNode(true);
            Array.prototype.forEach.call(c.querySelectorAll(".fonte"), function (n) { n.remove(); });
            return "- " + c.textContent.replace(/\s+/g, " ").trim();
          }).join("\n");
        var ok = function () { say(pend.length + " itens pendentes copiados."); };
        var fail = function () { say("Não foi possível copiar. Selecione e copie manualmente."); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(ok, fail);
        } else { fail(); }
      }
    });

    refresh();
  }

  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

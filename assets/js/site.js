/* systim — progressive enhancement only.
   With JavaScript off the page reads, navigates and submits to the server. */
(function () {
  'use strict';

  /* --- Theme -------------------------------------------------------------
     The toggle ships hidden and is revealed here, so a no-JS visitor is
     never handed a control that cannot work. The ground itself is already
     set by the blocking script in <head>.                                  */

  var toggle = document.querySelector('[data-theme-toggle]');

  function currentTheme() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function paintToggle() {
    if (!toggle) return;
    var dark = currentTheme() === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light panel' : 'Switch to dark panel');
  }

  if (toggle) {
    toggle.hidden = false;
    paintToggle();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('systim-theme', next); } catch (e) { /* not fatal */ }
      paintToggle();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!document.documentElement.getAttribute('data-theme')) paintToggle();
    });
  }

  /* --- Year --------------------------------------------------------------- */

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  /* --- Contact form ------------------------------------------------------
     Client-side validation names the problem and the recovery, at the field.
     The form still posts normally; this only stops a submit we know will
     fail and reports what the server would have reported.                   */

  var form = document.querySelector('[data-form]');
  if (!form) return;

  var status = form.querySelector('[data-form-status]');
  var submit = form.querySelector('.submit');
  var label = form.querySelector('[data-submit-label]');

  var RULES = {
    'f-name':    'Enter the name we should reply to.',
    'f-company': 'Enter your company name.',
    'f-email':   'Enter a work email we can reply to.',
    'f-process': 'Describe the process, even roughly. A sentence is enough.'
  };

  function fieldOf(input) { return input.closest('.field'); }

  function showError(input, message) {
    var wrap = fieldOf(input);
    var note = form.querySelector('[data-err-for="' + input.id + '"]');
    if (wrap) wrap.setAttribute('data-invalid', '');
    input.setAttribute('aria-invalid', 'true');
    if (note) {
      note.textContent = message;
      note.hidden = false;
      input.setAttribute('aria-describedby', note.id || (note.id = input.id + '-err'));
    }
  }

  function clearError(input) {
    var wrap = fieldOf(input);
    var note = form.querySelector('[data-err-for="' + input.id + '"]');
    if (wrap) wrap.removeAttribute('data-invalid');
    input.removeAttribute('aria-invalid');
    if (note) { note.hidden = true; note.textContent = ''; }
  }

  function validate(input) {
    var value = input.value.trim();
    if (!value) { showError(input, RULES[input.id] || 'This field is required.'); return false; }
    if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      showError(input, 'That email address is missing something — check the domain.');
      return false;
    }
    clearError(input);
    return true;
  }

  var inputs = Array.prototype.slice.call(form.querySelectorAll('input, textarea'));

  inputs.forEach(function (input) {
    /* Validate on the way out, then keep it honest as they fix it. */
    input.addEventListener('blur', function () { if (input.value.trim()) validate(input); });
    input.addEventListener('input', function () {
      if (fieldOf(input) && fieldOf(input).hasAttribute('data-invalid')) validate(input);
    });
  });

  form.addEventListener('submit', function (event) {
    var first = null;
    inputs.forEach(function (input) {
      if (!validate(input) && !first) first = input;
    });

    if (first) {
      event.preventDefault();
      if (status) {
        status.textContent = 'Check the highlighted fields and send again.';
        status.setAttribute('data-tone', 'error');
      }
      if (first) first.focus();
      return;
    }

    /* No endpoint is wired yet — see CONTENT.md. Until one is, report that
       honestly rather than showing a success state that did not happen. */
    if (form.getAttribute('action') === '#') {
      event.preventDefault();
      if (status) {
        status.removeAttribute('data-tone');
        status.textContent = 'This form has no endpoint yet. Email hello@systim.example, or set the form action — see CONTENT.md.';
      }
      return;
    }

    if (submit) {
      submit.disabled = true;
      if (label) label.textContent = 'Sending';
    }
  });
})();

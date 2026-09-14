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

  function contactAddress() {
    var link = document.querySelector('.contact__alt a[href^="mailto:"]');
    return link ? link.getAttribute('href').replace(/^mailto:/, '').split('?')[0] : 'our contact address';
  }

  function setStatus(message, tone) {
    if (!status) return;
    status.textContent = message;
    if (tone) { status.setAttribute('data-tone', tone); }
    else { status.removeAttribute('data-tone'); }
  }

  function setBusy(busy) {
    if (submit) submit.disabled = busy;
    if (label) label.textContent = busy ? 'Sending' : 'Send';
  }

  form.addEventListener('submit', function (event) {
    var first = null;
    inputs.forEach(function (input) {
      if (!validate(input) && !first) first = input;
    });

    if (first) {
      event.preventDefault();
      setStatus('Check the highlighted fields and send again.', 'error');
      first.focus();
      return;
    }

    var endpoint = form.getAttribute('action');

    /* Treat the shipped placeholder as unconfigured so the form can never POST
       to a URL that does not exist. Say so plainly rather than dropping the
       enquiry into a success state that never happened. */
    if (!endpoint || endpoint === '#' || endpoint.indexOf('YOUR_FORMSPREE_ID') !== -1) {
      event.preventDefault();
      setStatus('This form is not connected yet. Please email us directly at '
        + contactAddress() + '.', 'error');
      return;
    }

    /* Post in the background so the visitor keeps the page, their input, and
       the error if it fails. A normal navigation submit would lose all three. */
    if (!window.fetch || !window.FormData) return;   /* let the browser submit */

    event.preventDefault();
    setBusy(true);
    setStatus('Sending\u2026');

    window.fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      form.reset();
      inputs.forEach(clearError);
      setStatus('Thank you. We have your note and will reply from a real person, '
        + 'usually within two working days.');
    }).catch(function () {
      setStatus('That did not send. Please try again, or email us directly at '
        + contactAddress() + '.', 'error');
    }).then(function () {
      setBusy(false);
    });
  });
})();

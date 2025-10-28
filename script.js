
(function () {
  const buttons = document.querySelectorAll('.copy');

  function setTempLabel(btn, text, ms = 1300) {
    const original = btn.textContent;
    btn.textContent = text;
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, ms);
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
        setTempLabel(btn, 'Copied!');
      } catch (err) {
        console.error('Clipboard error:', err);

        const ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          setTempLabel(btn, 'Copied!');
        } catch (e) {
          setTempLabel(btn, 'Copy manually');
        } finally {
          document.body.removeChild(ta);
        }
      }
    });
  });
})();

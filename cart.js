document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'megatecla_cart_count';
  const countEl = document.querySelector('.basket-count');

  const getCount = () => parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;

  const renderCount = (count) => {
    if (!countEl) return;
    countEl.textContent = count;
  };

  renderCount(getCount());

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const count = getCount() + 1;
      localStorage.setItem(STORAGE_KEY, String(count));
      renderCount(count);

      if (countEl) {
        countEl.classList.remove('bump');
        void countEl.offsetWidth;
        countEl.classList.add('bump');
      }
    });
  });
});

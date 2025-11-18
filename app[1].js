const queueBtn = document.getElementById('queueBtn');
const landing = document.getElementById('landing');
const chartRoot = document.getElementById('chartRoot');
const chartWrap = document.getElementById('chartIframeWrap');
const backBtn = document.getElementById('backBtn');

function buildTradingViewIframe() {
  const params = new URLSearchParams({
    symbol: 'OANDA:XAUUSD',
    interval: '15',
    theme: 'dark',
    style: '1',
    locale: 'en',
    studies: '',
    toolbarbg: '#f1f3f6',
    hide_side_toolbar: 'false',
    allow_symbol_change: 'true',
    saveimage: 'true'
  });

  const src = 'https://s.tradingview.com/widgetembed/?' + params.toString();
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = 'XAUUSD Chart';
  iframe.allowFullscreen = true;
  iframe.style.border = '0';
  return iframe;
}

queueBtn.addEventListener('click', () => {
  chartWrap.innerHTML = '';
  chartWrap.appendChild(buildTradingViewIframe());
  landing.classList.add('hidden');
  chartRoot.classList.remove('hidden');
});

backBtn.addEventListener('click', () => {
  chartWrap.innerHTML = '';
  chartRoot.classList.add('hidden');
  landing.classList.remove('hidden');
});
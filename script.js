const stocks = {
  AAPL: {
    name: "Apple Inc.", exchange: "NASDAQ", price: "$257.50", change: "+1.24%",
    metrics: [["Market Cap","$3.8T"],["P/E","38.2x"],["EPS","$6.74"],["Revenue","$416.2B"],["52W Range","$169–$260"]],
    overview: "Apple designs, manufactures, and markets consumer electronics, software, and services.",
    watch: ["iPhone and Services growth", "Free cash flow generation", "Valuation relative to history"]
  },
  MSFT: {
    name: "Microsoft Corp.", exchange: "NASDAQ", price: "$510.20", change: "+0.82%",
    metrics: [["Market Cap","$3.8T"],["P/E","37.1x"],["EPS","$13.74"],["Revenue","$281.7B"],["52W Range","$344–$555"]],
    overview: "Microsoft develops software, cloud services, devices, and enterprise technology products.",
    watch: ["Azure and cloud growth", "AI investment returns", "Operating margin"]
  },
  NVDA: {
    name: "NVIDIA Corp.", exchange: "NASDAQ", price: "$184.60", change: "+2.11%",
    metrics: [["Market Cap","$4.5T"],["P/E","53.4x"],["EPS","$3.46"],["Revenue","$130.5B"],["52W Range","$86–$191"]],
    overview: "NVIDIA designs accelerated computing platforms, graphics processors, and AI infrastructure.",
    watch: ["Data-center demand", "Gross margins", "AI infrastructure competition"]
  },
  AMZN: {
    name: "Amazon.com Inc.", exchange: "NASDAQ", price: "$233.10", change: "+0.64%",
    metrics: [["Market Cap","$2.5T"],["P/E","36.8x"],["EPS","$6.33"],["Revenue","$716.9B"],["52W Range","$161–$243"]],
    overview: "Amazon operates e-commerce, cloud computing, advertising, logistics, and digital services.",
    watch: ["AWS growth", "Operating margins", "Retail efficiency"]
  },
  GOOGL: {
    name: "Alphabet Inc.", exchange: "NASDAQ", price: "$246.70", change: "+1.03%",
    metrics: [["Market Cap","$3.0T"],["P/E","29.4x"],["EPS","$8.39"],["Revenue","$402.8B"],["52W Range","$142–$256"]],
    overview: "Alphabet provides internet services including search, advertising, cloud computing, and digital products.",
    watch: ["Search and advertising growth", "Cloud profitability", "AI investment"]
  }
};

function renderStock(ticker) {
  const key = ticker.trim().toUpperCase();
  const s = stocks[key];
  if (!s) {
    alert("Demo version: try AAPL, MSFT, NVDA, AMZN, or GOOGL.");
    return;
  }
  document.getElementById("companyName").textContent = s.name;
  document.getElementById("companyTicker").textContent = `${s.exchange}: ${key}`;
  document.getElementById("price").textContent = s.price;
  document.getElementById("change").textContent = s.change;
  document.getElementById("overview").textContent = s.overview;
  document.getElementById("metrics").innerHTML = s.metrics.map(([label,value]) =>
    `<div class="metric"><label>${label}</label><strong>${value}</strong></div>`).join("");
  document.getElementById("watch").innerHTML = s.watch.map(x => `<li>${x}</li>`).join("");
  document.getElementById("research").scrollIntoView({behavior:"smooth"});
}

document.getElementById("searchBtn").addEventListener("click", () => renderStock(document.getElementById("tickerInput").value));
document.getElementById("tickerInput").addEventListener("keydown", e => {
  if (e.key === "Enter") renderStock(e.target.value);
});

renderStock("AAPL");

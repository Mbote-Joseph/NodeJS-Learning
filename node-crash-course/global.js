setTimeout(() => {
  console.log("Joseph Learning Node setTimeOut");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("Interval clearTimeOut");
}, 1000);

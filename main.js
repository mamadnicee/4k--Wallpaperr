function startPayment(file){
  // لینک واقعی سرویس پرداخت کریپتو مثل NOWPayments یا Sellix قرار بده
  const paymentURL = "https://nowpayments.io/payment/?iid=YOUR_ID";
  window.open(paymentURL,"_blank");

  // شبیه‌سازی تایید پرداخت برای تست
  setTimeout(()=>{
    alert(`Payment confirmed! Download your file: ${file}`);
    window.location.href = `https://your-secure-storage/${file}`;
  },5000);
}

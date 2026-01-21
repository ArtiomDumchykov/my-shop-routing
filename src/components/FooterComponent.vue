<template>
    <footer class="footer">
      <div class="footer-content">
          <p>Email: support@shop.com</p>
          <p>Телефон: +380 50 123 4567</p>

          <ul>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Доставка</a></li>
          </ul>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 My Shop. Усі права захищено.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    margin-top: 40px;
    color: #333;
    text-align: center;
    border-top: 1px solid #ddd;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    gap: 80px;
    padding: 0 10%;
  }
  
ul {
    list-style: none;
    padding: 0;
    display:flex;
    gap: 80px;
  }
  
li {
    margin-bottom: 5px;
  }
  
a {
    text-decoration: none;
    color: black;
  }
  
a:hover {
    text-decoration: underline;
  }
 
  .footer-bottom {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
  }
  </style>
  
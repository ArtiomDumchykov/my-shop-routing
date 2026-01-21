<template>
    <div>
        <h2 class="title">Відгуки</h2>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Рейтинг</th>
            <th>Коментар</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index) in reviews" :key="index">
            <td>{{ review.Name }}</td>
            <td>{{ review.Rating }}</td>
            <td>{{ review.Comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import Papa from 'papaparse';
  
  export default {
    data() {
      return {
        reviews: [], // Масив для зберігання розпарсених даних
      };
    },
    created() {
      const csvContent = `
  Name,Rating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.
      `;
      Papa.parse(csvContent.trim(), {
        header: true,
        complete: (result) => {
          this.reviews = result.data; // Зберігаємо розпарсені дані
        },
      });
    },
  };
  </script>
  
  <style scoped>
  h2{
    text-align: center;
  }
  table {
    width: 90%;
    margin:30px auto;
  }
  th, td {
   background: #f8f9fa;
    padding: 4px;
  }

  .title {
    background-color: aqua;
  }
  </style>
  















  
   <!-- <template>
    <div>
      <p>
        <a href="#" @click.prevent="toggleReviews">
          {{ showReviews ? 'Сховати відгуки' : 'Показати відгуки' }}
        </a>
      </p>
      <div v-if="showReviews">
        <h3>Відгуки клієнтів</h3>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Рейтинг</th>
              <th>Коментар</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(review, index) in reviews" :key="index">
              <td>{{ review.Name }}</td>
              <td>{{ review.Rating }}</td>
              <td>{{ review.Comment }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showReviews: false, // Чи показувати відгуки
        reviews: [
          { Name: 'Іван', Rating: 5, Comment: 'Дякую за швидку доставку' },
          { Name: 'Ольга', Rating: 5, Comment: 'Все супер! Буду замовляти ще' },
          { Name: 'Андрій', Rating: 5, Comment: 'Обслуговування, як завжди - на висоті' },
          { Name: 'Марина', Rating: 4, Comment: 'Все чудово, але коробка була прим\'ята' },
        ],
      };
    },
    methods: {
      toggleReviews() {
        this.showReviews = !this.showReviews; // Перемикання видимості відгуків
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f4f4f4;
  }
  </style> -->
  
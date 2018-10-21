<template>
  <div id="book" class="container">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="page-header">
      <h1>Firebase and Vue</h1>
    </div>
    <div class="card">
      <div class="card-header">Add Book</div>
      <div class="card-body">
        <form id="form" class="form-inline" @submit.prevent="addArticle">
          <div class="form-group mb-2">
            <label for="title" class="sr-only">Title</label>
            <input id="title" type="text" class="form-control" placeholder="Title" v-model="newArticle.title" />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="author" class="sr-only">Author</label>
            <input id="author" type="text" class="form-control" placeholder="Author" v-model="newArticle.author" />
          </div>
          <div class="form-group mb-2">
            <label for="url" class="sr-only">Url</label>
            <input id="url" type="text" class="form-control" placeholder="http://" v-model="newArticle.url" />
          </div>
          <button class="btn btn-primary mx-sm-3 mb-2">Add</button>
        </form>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3>Articles List</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles" :key="article.id">
              <td>
                <a :href="article.url">{{ article.title }}</a>
              </td>
              <td>{{ article.author }}</td>
              <td>
                <span class="pointer" @click="removeArticle(article)">
                    <i class="fas fa-trash"></i>
                  </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import articlesRef from '../../api/config';
export default {
  name: 'app',
  firebase: {
    articles: articlesRef
  },
  data () {
    return {
      newArticle: {
        title: '',
        author: '',
        url: ''
      }
    };
  },
  methods: {
    addArticle () {
      articlesRef.push(this.newArticle);
      this.newArticle.title = '';
      this.newArticle.author = '';
      this.newArticle.url = '';
    },
    removeArticle (article) {
      articlesRef.child(article['.key']).remove();
    }
  }
};
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
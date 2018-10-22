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

    <!--added -->
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h4>Box Chart</h4>
        </v-flex>        
        <v-flex lg4 sm6 xs12>
          <box-chart
            title="Page views dataref"
            sub-title="10%"
            icon="trending_up"
            :data="countries"
            :chart-color="[color.blue.darken1]"
            type="area"
          >
          </box-chart>
        </v-flex>        
        <v-flex lg4 sm6 xs12>
          <box-chart
            title="Monthly Sales"
            sub-title="10%"
            icon="trending_up"
            card-color="pink"
            :data="dataset.monthVisit"
            :chart-color="[color.pink.lighten2]"
            type="bar"
          >
          </box-chart>
        </v-flex>     
        <v-flex lg4 sm6 xs12>
          <box-chart
            card-color="indigo"
            title="Page views"
            sub-title="10%"
            icon="trending_up"
            :data="dataset.monthVisit"
            :chart-color="[color.shades.white]"
            type="line"
          >
          </box-chart>
        </v-flex>     
      </v-layout>
    </v-container>
    </div>
</template>

<script>
import EChart from '@/components/chart/echart';
import Material from 'vuetify/es5/util/colors';
import MiniChart from '@/components/widgets/chart/MiniChart';
import BoxChart from '@/components/widgets/chart/BoxChart';
import VWidget from '@/components/VWidget';

import {
  monthVisitData2,
} from '@/api/chart2'; 

import {
  articlesRef,
  dataRef
} from '@/api/db';

export default {
  name: 'app',
  firebase: {
    articles: articlesRef,
    countries: dataRef
  },
  components: {
    BoxChart,
    MiniChart,
    EChart,
    VWidget
  },
  data () {
    return {
      newArticle: {
        title: '',
        author: '',
        url: ''
      },
      // added
      selectedTab: 'tab-1',
      option: null,
      dataset: {
        monthVisit: monthVisitData2,
        dataRef: dataRef
      },
      color: Material
    };
  },
  // added
  created () {
    console.log(this.$refs.chart);
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
    },
    // added
    handleTabChange (val, e) {
      // make sure the chart resized while parent from hidden to show
      window.dispatchEvent(new Event('resize'));
    }
  }
};

// 基于准备好的dom，初始化echarts实例
// let myChart = Echart.init(document.getElementById('main'));

// 指定图表的配置项和数据
let option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['number']
  },
  xAxis: {
    data: ['skirt', 'furcoat', 'pants', 'jeans', 'heels', 'dress']
  },
  yAxis: {},
  series: [{
    name: 'number',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
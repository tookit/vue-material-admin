<template>
  <div id="page-icons">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex 12>
          <v-tabs v-model="selectedTab" color="grey lighten-3">
            <v-tab ripple href="#tab-1">
              Matrial Icons
            </v-tab>
            <v-tab ripple href="#tab-2">
              Font Awesome 
            </v-tab>
            <v-tabs-items v-model="selectedTab">
              <v-tab-item id="tab-1">
                <v-card flat>
                  <v-card-text>
                    <ul class="demo-icons-list">
                      <li v-for="(item, index) in material" :key="index">
                        <i class="icon material-icons"> {{item.ligature}}</i>
                      </li>        
                    </ul>
                    <div class="text-sm-center">
                      <v-btn href="https://material.io/icons/" color="primary" large depressed>More</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-2">
                <v-card flat>
                  <v-card-text>
                    <ul class="demo-icons-list">
                      <li v-for="(item, index) in ft" :key="index">
                        <i class="fa" :class="item"></i>
                      </li>        
                    </ul>
                    <div class="text-sm-center">
                      <v-btn href="https://fontawesome.com/icons?d=gallery" color="primary" large depressed>More</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>              
            </v-tabs-items>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
export default {
  components: {
    VWidget
  },
  data () {
    return {
      selectedTab: null,
      tabs: null,
      material: null,
      ft: null
    };
  },
  computed: {
  },  
  created () {
    fetch('/static/data/material.json')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.material = json.icons.splice(0, 100);
      });
    fetch('/static/data/font-awesome.json')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const version = '4.7.0';
        this.ft = json[version].splice(0, 100);
      });      
  },
  methods: {
  }
};
</script>

<style scoped>
.demo-icons-list {
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 32px
}

.demo-icons-list li {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 72px;
    height: 72px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: .1s;
    transition: .1s
}

.demo-icons-list li .material-icons {
    font-size: inherit
}

.demo-icons-list li [data-i8-icon] {
    margin: 0 10px
}

.demo-icons-list li [data-provide~=emoji] svg {
    width: 32px;
    height: 32px
}

.demo-icons-list li:hover {
    background-color: #f7fafc
}

.demo-icons-list.icons-size-16px {
    font-size: 16px
}

.demo-icons-list.icons-size-16px li {
    width: 56px;
    height: 56px
}

.demo-icons-list.icons-size-24px {
    font-size: 24px
}

.demo-icons-list.icons-size-24px li {
    width: 64px;
    height: 64px
}

.demo-icons-list.icons-size-32px {
    font-size: 32px
}

.demo-icons-list.icons-size-32px li {
    width: 72px;
    height: 72px
}

.demo-icons-list.icons-size-48px {
    font-size: 48px
}

.demo-icons-list.icons-size-48px li {
    width: 88px;
    height: 88px
}

.demo-icons-list.icons-size-64px {
    font-size: 64px
}

.demo-icons-list.icons-size-64px li {
    width: 104px;
    height: 104px
}

.demo-icons-list.icons-size-80px {
    font-size: 80px
}

.demo-icons-list.icons-size-80px li {
    width: 120px;
    height: 120px
}

.demo-icons-list.icons-size-96px {
    font-size: 96px
}

.demo-icons-list.icons-size-96px li {
    width: 136px;
    height: 136px
}
</style>


Vue.component('post', {
  template: `<li class="list-group-item">
        <i class="glyphicon glyphicon-chevron-up" @click="upvote" ></i>
        <span class="label label-primary">{{ post.votes }}</span>
        <i class="glyphicon glyphicon-chevron-down" @click="downvote" ></i>
        <a>{{ post.title }}</a>
      </li>`,
  props: ['post'],
  data: function () {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function () {
      this.post.votes +=1;
      
    },
    downvote: function () {
      this.post.votes -=1;
    }
  }
});

var vm = new Vue({
  el: "#app",
  data: {
    posts: [{
                title: "How many pieces of biscuits did you eat",
                votes: 15
            },
            {
                title: "How many houses do you have",
                votes: 8
            },
            {
                title: "How many cars do you have",
                votes: 7
            },
            {
                title: "What is your age",
                votes: 21
            }]
  }
});
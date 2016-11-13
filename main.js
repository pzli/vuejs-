
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello world!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
		]
	}
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function(){
			this.message = this.message.split("").reverse().join("");
		}
	}
});

var app6= new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue.js!'
	}
});

Vue.component("todo-item",{
	props: ["todo"],
	template: "<li>{{ todo.text }}</li>"
});

var app7= new Vue({
	el: '#app-7',
	data: {
		groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
	}
});


// var watchExampleVM = new Vue({
//   el: '#watch-example',
//   data: {
//     question: '',
//     answer: 'I cannot give you an answer until you ask a question!'
//   },
//   watch: {
//     // 如果 question 发生改变，这个函数就会运行
//     question: function (newQuestion) {
//       this.answer = 'Waiting for you to stop typing...'
//       this.getAnswer()
//     }
//   },
//   methods: {
//     // _.debounce 是一个通过 lodash 限制操作频率的函数。
//     // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
//     // ajax请求直到用户输入完毕才会发出
//     // 学习更多关于 _.debounce function (and its cousin
//     // _.throttle), 参考: https://lodash.com/docs#debounce
//     getAnswer: _.debounce(
//       function () {
//         var vm = this
//         if (this.question.indexOf('?') === -1) {
//           vm.answer = 'Questions usually contain a question mark. ;-)'
//           return
//         }
//         vm.answer = 'Thinking...'
//         axios.get('https://yesno.wtf/api')
//           .then(function (response) {
//             vm.answer = _.capitalize(response.data.answer)
//           })
//           .catch(function (error) {
//             vm.answer = 'Error! Could not reach the API. ' + error
//           })
//       },
//       // 这是我们为用户停止输入等待的毫秒数
//       500
//     )
//   }
// })


var app8 = new Vue({
	el: "#app-8",
	data: {}
});

var app9 = new Vue({
	el: "#app-9",
	data: {
		parentMessage: "parent",
		items: [
			{"message": "Foo"},
			{"message": "Bar"}
		]
	}
});

var app10 = new Vue({
	el: "#app-10",
	data: {
		numbers: [1,2,3,4,5]
	},
	computed: {
		evenNumbers: function(){
			return this.numbers.filter(function(v){
				return v % 2 == 0;
			})
		}
	}
});

var app11 = new Vue({
	el: "#app-11",
	data: {
		name: "Vue.js"
	},
	methods: {
		greet: function(event){
			alert("Hello " + this.name + " !");
			alert(event.target.nodeName);
		}
	}
});

var app12 = new Vue({
	el: "#app-12",
	data: {
		checked: "false"
	}
});

var app13 = new Vue({
	el: "#app-13",
	data: {
		checkedNames: []
	}
});

var app14 = new Vue({
	el: "#app-14",
	data: {
		selected: "One",
		options: [
			{"value": "One"},
			{"value": "Two"},
			{"value": "Three"}
		]
	}
});

Vue.component("my-component",{
	template: "<div>A custom component!</div>"
});

var app15 = new Vue({
	el: "#app-15"
})

Vue.component("simple-counter",{
	template: "<button v-on:click='counter += 1'>{{ counter }}</button>",
	data: function(){
		return {
			counter: 0
		}
	}
});

var app16 = new Vue({
	el: "#app-16"
});



Vue.component("child",{
	props: ["message"],
	template: "<div>{{message}}</div>"
});

var app17 = new Vue({
	el: "#app-17",
	data: {
		abc: "123"
	}
});

var app18 = new Vue({
	el: "#app-18",
	data: {
		message: "Hello vue.js!"
	}
});

Vue.component("button-counter", {
	template: "<button v-on:click='increment'>{{ counter }}</button>",
	data: function(){
		return {
			counter: 0
		}
	},
	methods: {
		increment: function(){
			this.counter += 1;
			this.$emit('increment');
		}
	}
});

var app19 = new Vue({
	el: "#app-19",
	data: {
		counterTotal: 0
	},
	methods: {
		incrementTotal: function(){
			this.counterTotal += 1;
		}
	} 
})

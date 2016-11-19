(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 存储模块
	var store = {
		fetch: function(){
			return JSON.parse(window.localStorage.getItem("myTodoList") ||  "[]");
		},
		save: function(todos){
			window.localStorage.setItem("myTodoList", JSON.stringify(todos));
		}
	};

	// 自定义指令,双击某一项后,这个input自动获得焦点,添加自定义指令最好放在Vue实例之前???(不知道原因)
	Vue.directive("focus",function(el, binding){
		if(!binding.value){
			return;
		}
		el.focus();
	});

	// Vue实例模块
	var app = new Vue({
		el: "#app",
		data: {
			todos: store.fetch(),
			newTodo: "",
			editedTodo: null,
			visibility: "all"
		},
		watch: {
			todos: {
				deep: true,
				handler: store.save
			}
		},
		computed: {
			filteredTodos: function(){
				if(this.visibility == "all") {
					return this.todos;
				}else if(this.visibility == "active") {
					return this.todos.filter(function(todo){
						return todo.isFinished == false;
					})
				}else if(this.visibility == "completed") {
					return this.todos.filter(function(todo){
						return todo.isFinished == true;
					})
				}
			},
			remaining: function(){
				var length = 0;
				for(var i = 0; i < this.todos.length; i++) {
					if(this.todos[i].isFinished == false) {
						length ++;
					}
				}
				return length;
			},
			allDone: {
				get: function() {
					var flag = true;
					for(var i = 0; i < this.todos.length; i++) {
						if(this.todos[i].isFinished == false) {
							flag = false;
							break;
						}
					}
					return flag;
				},
				set: function(value){
					for(var i = 0; i < this.todos.length; i++) {
						this.todos[i].isFinished = value;
					}
				}
			}
		},
		methods: {
			// 添加一个新的todo
			addTodo: function(){
				var value = this.newTodo && this.newTodo.trim();
				if (!value) {
					return;
				}
				this.todos.push({ text: value, isFinished: false, id: Math.random() * 1 });
				this.newTodo = '';

				console.log(this.location)
			},
			// 点击删除按钮后移除这一项
			removeTodo: function(todo){
				var todos = this.todos;
				for(var i = 0; i < todos.length; i++) {
					if(todo.id == todos[i].id) {
						this.todos.splice(i,1);
					}
				}
			},
			// 双击某一项todo后进入编辑模式
			editTodo: function(todo){
				this.beforeEditCache = todo.text;
				this.editedTodo = todo;
			},
			// 完成编辑后同步todo
			doneEdit: function(todo){
				this.editedTodo = null;
				todo.text = todo.text.trim();
				if(!todo.text) {
					this.removeTodo(todo);
				}
			},
			// 按ESC后返回原来的状态
			cancelEdit: function(todo){
				this.editedTodo = null;
				todo.text = this.beforeEditCache;
			},
			// 清楚全部已完成
			clearCompleted: function(){
				var arr = [];
				for (var i = 0; i < this.todos.length; i++) {
					if(this.todos[i].isFinished == false) {
						arr.push(this.todos[i]);
					}
				}
				this.todos = arr;
			}
		}
		
	});

	// var router = new VueRouter({
	// 	routes: [
	// 		{
	// 			path: "/",
	// 			beforeEnter: function(to, from, next){
	//         next(function(){
	//         	console.log("all");
	//         	app.visibility = "all";
	//         })
	//       }
	// 		},
	// 		{
	// 			path: "/all",
	// 			beforeEnter: function(to, from, next){
	//         next(function(){
	//         	console.log("all");
	//         	app.visibility = "all"
	//         })
	//       }
	// 		},
	// 		{
	// 			path: "/active",
	// 			beforeEnter: function(to, from, next){
	//         next(function(){
	//         	console.log("active");
	//         	app.visibility = "active"
	//         })
	//       }
	// 		},
	// 		{
	// 			path: "/completed",
	// 			beforeEnter: function(to, from, next){
	//         next(function(){
	//         	console.log("completed");
	//         	app.visibility = "completed"
	//         })
	//       }
	// 		}
	// 	]

	// });
	// 没看懂vue-router怎么通过路由切换一个Vue实例的某个属性,所以还是用了director.js
	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app.visibility = 'all';
		}
	});

	router.init();
	
})(window);


// 未完成的项目

// 三个路由转换

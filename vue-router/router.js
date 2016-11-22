(function(window, document) {

	/*如果使用模块化机制编程， 要调用 Vue.use(VueRouter)*/
	/*var router1 = new VueRouter({
		routes: [
			{
				path: "/foo",
				component: {
					template: "<div>foo</div>"
				}
			},
			{
				path: "/bar",
				component: {
					template: "<div>bar</div>"
				}
			}
		]
	});

	new Vue({
		router: router1
	}).$mount("#app1");*/

	/*-------------------------------------------------------------------*/

	/*var router2 = new VueRouter({
		routes: [
			{
				path: "/user/:id",
				component: {
					template: "<div>{{ $route.params.id }}</div>"
				}
			}
		]
	});

	new Vue({
		router: router2
	}).$mount("#app2");*/

	/*-------------------------------------------------------------------*/

	/*var router3 = new VueRouter({
		routes: [
			{
				path: "/user/:id",
				component: {
					template: "<div><h2>{{ $route.params.id }}</h2><router-view></router-view></div>"
				},
				children: [
					{
						path: "",
						component: {
							template: "<div>index</div>"
						}
					},
					{
						path: 'profile',
						component: {
							template: "<div>profile</div>"
						}
					},
					{
						path: 'posts',
						component: {
							template: "<div>posts</div>"
						}
					}
				]
			}
		]
	});

	new Vue({
		router: router3
	}).$mount("#app3");*/

	/*-------------------------------------------------------------------*/
	/*var router4 = new VueRouter({
		routes: [
			{
				path: "/user/:id",
				name: "user",
				component: {
					template: "<div>{{ $route.params.id }}</div>"
				}
			}
		]
	});

	new Vue({
		router: router4
	}).$mount("#app4");*/

	/*-------------------------------------------------------------------*/

	const router5 = new VueRouter({
	  routes: [
	    {
				path: "/user/:id",
				name: "user",
				components: {
					default: {template: "<div>$route.params.id  | {{ $route.params.id }}</div>"},
					a: {template: "<div>$route.name  | {{ $route.name }}</div>"},
					b: {template: "<div>$route.params.id + 1  | {{ $route.params.id + 1 }}</div>"},
				}
			}
	  ]
	});

	new Vue({
		router: router5
	}).$mount("#app5");

	/*-------------------------------------------------------------------*/


})(window, document);
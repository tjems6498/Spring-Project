/**
 *
 */
//3개의 컴포넌트 정의
var Join = {
	template: '<div><h3>JOIN</h3>' +
		'<div><label for="id">id</label><input type="text" id="id" v-model="id" /></div>' +
		'<div><label for="pwd">pwd</label><input type="password" id="pwd" v-model="pwd" /></div>' +
		'<div><label for="name">name</label><input type="text" id="name" v-model="name" /></div>' +
		'<div><label for="email">email</label><input type="text" id="email" v-model="email" /></div>' +
		'<div><input type="radio" name="type" id="type2" value="2" v-model="type"><label for="type2">seller</label><br>' +
		'<input type="radio" name="type" id="type3" value="3" v-model="type"><label for="type3">consumer</label></div>' +
		'<button v-on:click="joinForm">join</button>' +
		'</div>',
	data: {//컴포넌트에서 사용하는 값 저장
		id: '',
		pwd: '',
		name: '',
		email: '',
		type: ''
	},
	methods: {//함수 등록
		joinForm: function() {
			const form = new URLSearchParams();//폼파람 객체.
			form.append('id', this.id)
			form.append('pwd', this.pwd)
			form.append('name', this.name)
			form.append('email', this.email)
			form.append('type', this.type)
			
			axios.post('http://localhost:8081/shop-members/', form)
				.then(function(response) {//response: 응답객체
					if (response.data.result) {
						this.id = response.data.join_id;
						alert('join success: join_id=' + this.id)
					} else {
						alert('join fail')
					}
				})

		},
	}
};
var Login = {
	template: '<div><h3>LOGIN</h3>' +
		'<div><label for="id">id</label><input type="text" id="id" v-model="idval" /></div>' +
		'<div><label for="pwd">pwd</label><input type="password" id="pwd" v-model="pwdval" /></div>' +
		'<button v-on:click="loginForm">login</button>' +
		'</div>',

	data: {
		idval: '',
		pwdval: '',
		m: null

	},
	methods: {//함수 등록
		loginForm: function() {
			const pwdval = this.pwdval
			axios.get('http://localhost:8081/shop-members/' + this.idval)
				.then(function(response) {//response: 응답객체
					if (response.data.result) {
						this.m = response.data.data // 검색한 객체
						
						if (this.m.pwd == pwdval) {
							alert(this.m.id + '/' + this.m.name + '/ login success')
							sessionStorage.setItem('login_id', this.m.id)
							sessionStorage.setItem('type', this.m.type)
														
						} else {
							alert('pwd fail')
						}

					} else {
						alert('not found id')
					}
				})
		},
	}
};


var Menu = {
	template: '<div> Menu </div>'
};

//라우터 등록
var routes = [{
	path: '/join',
	component: Join
}, {
	path: '/login',
	component: Login
}, {
	path: '/menu',
	component: Menu
}];

//라우터 객체 생성
var router = new VueRouter({
	routes
});

//뷰 객체
var app = new Vue({
	router
}).$mount('#app');

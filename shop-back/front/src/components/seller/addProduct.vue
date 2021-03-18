<template>
<div>
  <h3>상품등록</h3>
  <div><label for="title">title</label><input type="text" id="title" v-model="title" /></div>
  <div><label for="content">content</label><input type="text" id="content" v-model="content" /></div>
  <div><label for="price">price</label><input type="number" id="price" v-model="price" /></div>
  <div><label for="amount">amount</label><input type="number" id="amount" v-model="amount" /></div>
  <div><label for="file1">상품사진</label><input type="file" ref="file1" />
    <input type="file" ref="file2" /><input type="file" ref="file3" /><input type="file" ref="file4" />
  </div>
  <p><label for="cate">카테고리 선택</label><select id="cate" v-model="cate">

      <option v-for="c in cates" :key="c.num" v-bind:value="c.num">{{c.name}}</option>
    </select></p>
  <button v-on:click="add">등록</button>
</div>
</template>


<script>
export default {
  name: 'AddProduct',
  data() { //반응형. 값이 갱신되면 화면도 갱신
      return {
        cates: [],
        title: '',
        content: '',
        price: 0,
        amount: 0,
        cate: '',
      };
    },
    created: function() {
      const self = this;
      this.$axios.get('/cates/')
        .then(function(response) {
          if (response.status == 200) {
            if (response.data.result) {
              self.cates = response.data.list;
            } else {
              alert('plist fail')
            }
          } else {
            alert('connect fail:' + response.status);
          }
        })
    },
    methods: {
      add: function() {
        //title, content, seller, price, amount, cate, file1~4
        const self = this;
        const form = new URLSearchParams(); //폼파람 객체.
        form.append('title', self.title)
        form.append('content', self.content)
        form.append('seller', sessionStorage.getItem("login_id"))
        form.append('price', self.price)
        form.append('amount', self.amount)
        form.append('cate', self.cate)
        if (this.$refs.file1.files[0] != null)
          form.append('file1', this.$refs.file1.files[0])
        if (this.$refs.file2.files[0] != null)
          form.append('file2', this.$refs.file2.files[0])
        if (this.$refs.file3.files[0] != null)
          form.append('file3', this.$refs.file3.files[0])
        if (this.$refs.file4.files[0] != null)
          form.append('file4', this.$refs.file4.files[0])

        this.$axios.post('/products/', form,
        // 이게 작동이 잘 안
        // {
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     }
        //   }
        )
          .then(function(response) { //response: 응답객체
            //alert(response.status);
            if (response.data.result) {
              alert('등록완료')
              self.$router.push('/smain');
            } else {
              alert('등록실패')
            }
          })
      }
    }
  }


  </script>

<template>
<div>
  <p>구매자 Menu</p>
  <p>{{id}} / {{type_num}} / {{type_name}}</p>
</div>
</template>

<script>
export default {
  name: 'CMain',
  data() {
    return {
      id: '',
      type_num: '',
      type_name: '',
      plist: [],
    };
  },
  created: function() {
    this.id = sessionStorage.getItem("login_id");
    this.type_num = sessionStorage.getItem("type_num");
    this.type_name = sessionStorage.getItem("type_name");
    alert(this.id + '/' + this.type_name);
  },
  methods: {}
};
</script>

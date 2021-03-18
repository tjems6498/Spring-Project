/**
 *
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/member/login.vue";
import Join from "@/components/member/join.vue";
import SMain from "@/components/seller/sellerMain.vue";
import EditProduct from "@/components/seller/editProduct.vue";
import AddProduct from "@/components/seller/addProduct.vue";
import CMain from "@/components/consumer/consumerMain.vue";


Vue.use(VueRouter); // 뷰 어플리케이션에 라우터 플러그인을 추가한다.

// 라우터 객체를 생성
export default new VueRouter({
  mode: "history",
  routes: [{
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  },
  {
    path: "/smain",
    name: "SMain",
    component: SMain
  },
  {
    path: "/edit-product",
    name: "EditProduct",
    component: EditProduct
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct
  },
  {
    path: "/cmain",
    name: "CMain",
    component: CMain
  },]
});

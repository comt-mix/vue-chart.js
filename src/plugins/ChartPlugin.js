import Chart from "chart.js"

export default {
  install: (Vue) => {
    Vue.prototype.$_Chart = Chart; //chart.js는 여기서 한번만 불러옴.
    //다른 컴포넌트 어디에서든 불러서 사용할 수 있게 하는 것.
  }
}
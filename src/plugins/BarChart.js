import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      default: () => {},
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  watch: {
    chartOptions() {
      this.renderChart(this.chartData, this.chartOptions)
    },
  },
}

<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
  mounted() {
    // const ctx = document.getElementById("lineChart");
    // const ctx = this.$refs.lineChart;

    new this.$_Chart(this.$refs.lineChart, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>

import { onCleanup, onMount, createSignal } from "solid-js";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const chartTypes = [
  { label: "Bar Chart", value: "bar" },
  { label: "Line Chart", value: "line" },
  { label: "Pie Chart", value: "pie" },
  { label: "Radar Chart", value: "radar" },
];

export default function AmChart() {
  let chartRoot;
  const [selectedType, setSelectedType] = createSignal("bar");
  let root;

  async function renderChart(type) {
    if (root) {
      root.dispose();
    }
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const grouped = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    const data = Object.entries(grouped).map(([user, count]) => ({
      user: `User ${user}`,
      count,
    }));

    root = am5.Root.new(chartRoot);
    root.setThemes([am5themes_Animated.new(root)]);

    if (type === "bar") {
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          layout: root.verticalLayout,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "user",
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      xAxis.data.setAll(data);

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Posts",
          xAxis,
          yAxis,
          valueYField: "count",
          categoryXField: "user",
        })
      );

      series.data.setAll(data);
    } else if (type === "line") {
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          layout: root.verticalLayout,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "user",
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      xAxis.data.setAll(data);

      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: "Posts",
          xAxis,
          yAxis,
          valueYField: "count",
          categoryXField: "user",
          stroke: am5.color(0x3366cc),
        })
      );

      series.data.setAll(data);
      series.strokes.template.setAll({ strokeWidth: 3 });
      series.bullets.push(() =>
        am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill"),
          }),
        })
      );
    } else if (type === "pie") {
      const chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.verticalLayout,
        })
      );

      const series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "count",
          categoryField: "user",
        })
      );

      series.data.setAll(data);
    } else if (type === "radar") {
      const chart = root.container.children.push(
        am5radar.RadarChart.new(root, {
          layout: root.verticalLayout,
        })
      );

      const xAxis = chart.xAxes.push(
        am5radar.CategoryAxis.new(root, {
          categoryField: "user",
          renderer: am5radar.AxisRendererCircular.new(root, {}),
        })
      );

      const yAxis = chart.yAxes.push(
        am5radar.ValueAxis.new(root, {
          renderer: am5radar.AxisRendererRadial.new(root, {}),
        })
      );

      xAxis.data.setAll(data);

      const series = chart.series.push(
        am5radar.RadarColumnSeries.new(root, {
          name: "Posts",
          xAxis,
          yAxis,
          valueYField: "count",
          categoryXField: "user",
        })
      );

      series.data.setAll(data);
    }
  }

  onMount(() => {
    renderChart(selectedType());

    // Cleanup chart saat unmount
    onCleanup(() => {
      if (root) root.dispose();
    });
  });

  // Re-render chart saat tipe berubah
  function handleTypeChange(e) {
    setSelectedType(e.target.value);
    renderChart(e.target.value);
  }

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">Jumlah Postingan per User</h2>
      <div class="mb-4">
        <label for="chartType" class="mr-2 font-semibold">Pilih Tipe Chart:</label>
        <select
          id="chartType"
          value={selectedType()}
          onInput={handleTypeChange}
          class="border rounded px-2 py-1"
        >
          {chartTypes.map((type) => (
            <option value={type.value}>{type.label}</option>
          ))}
        </select>
      </div>
      <div ref={(el) => (chartRoot = el)} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}

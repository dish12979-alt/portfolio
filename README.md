# 丁旭 AI Coding 产品实践作品集

这是一个静态单页作品集，可直接部署到 Netlify。

## 需要放入的截图

请把脱敏截图放到 `portfolio/assets/`，并按下面文件名命名：

- `hero-main-scene.png`：首屏主图，建议使用系统全景或盾构环片监测大图
- `metro-network.png`：三维地铁线路与站点展示
- `tbm-monitor-ai.png`：盾构监控与 AI 诊断侧栏
- `time-series-panel.png`：盾构响应分析/时序图
- `geology-excavation.png`：地层钻孔与开挖工具
- `tunnel-ring-monitor.png`：环片监测/结构状态视图
- `tbm-digging-simulation.png`：掘进模拟/盾构机三维动画

图片大小不需要完全一致，页面会统一裁切为 16:9 展示。建议使用 PNG 或 JPG，单张尽量控制在 1.5MB 以内。

## 本地预览

直接双击 `portfolio/index.html` 即可预览。

如果希望用本地服务器预览，可在 `portfolio/` 目录运行：

```powershell
python -m http.server 8088
```

然后访问：

```text
http://localhost:8088
```

## Netlify 部署

1. 打开 https://app.netlify.com/drop
2. 将整个 `portfolio/` 文件夹拖进去
3. 等待生成在线地址
4. 后续如果补充演示视频，可以把视频链接加到 `index.html` 的“演示视频待补充”按钮处

## 数据说明

作品集页面默认说明为：截图与后续演示视频均基于脱敏历史样例数据及模拟展示数据生成，不包含敏感原始数据。

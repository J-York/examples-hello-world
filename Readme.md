# YorkHub — LLM Gateway 首页

一个兼容 OpenAI API 的 LLM 网关主页示例（Deno）。

## 开发

- 启动本地服务：`deno task dev`
- 访问：`http://localhost:8000`

## 使用说明（客户端）

YorkHub 兼容 OpenAI 的接口协议。将 OpenAI 客户端的 Base URL 修改为 YorkHub 地址（即你访问首页的同源地址），其余参数保持不变。

示例（cURL）：

```
curl -X POST "<YOUR_YORKHUB_ORIGIN>/v1/chat/completions" \
  -H "Authorization: Bearer sk-..." \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [{"role":"user","content":"Hello from YorkHub!"}]
  }'
```

示例（JavaScript / TypeScript）：

```
const baseURL = "<YOUR_YORKHUB_ORIGIN>"; // YorkHub
const resp = await fetch(`${baseURL}/v1/chat/completions`, {
  method: "POST",
  headers: {
    "Authorization": "Bearer sk-...",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello from YorkHub!" }],
  }),
});
const data = await resp.json();
console.log(data.choices?.[0]?.message?.content);
```

## 主题

首页默认跟随系统深浅色主题，并提供按钮进行手动切换（浅色 / 深色 / 自动）。

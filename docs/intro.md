---
sidebar_position: 1
---

# はじめに

GLSLの型や関数をテストで理解することを目的としたドキュメントです。

お気持ちは[個人のブログ](https://tkskto.me/blog/%E7%A7%81%E3%81%8C%E3%81%AA%E3%81%9CGLSL%E3%82%92%E6%9B%B8%E3%81%91%E3%81%AA%E3%81%84%E3%81%AE%E3%81%8B/index.html)に書いておりますので、よければご覧いただけると嬉しいです。

テストの内容は執筆開始時点の最新バージョンである[OpenGL ES 3.2](https://registry.khronos.org/OpenGL-Refpages/es3/)の仕様をもとに、自作したものです。

またテストするためにGLSLの基本型や関数もJavaScriptで再実装しなおしていますが、再実装することが目的ではないので簡素化したりしてるところがいくつかあります。

中には単純なコードでテストできないAPI（`texture`とか）も存在しているので、その辺りもいったん省略します。テストする手段が見つかったら追加したいとは思ってます。ひらめき待ちです。

執筆時点で筆者はCGの知識がほとんどありません。なにか改善ポイントを見つけたら、[GitHub](https://github.com/tkskto/glsl-testing)にIssueを立てるか、PRを作成いただけると幸いです。

実装がわかっても、使い方が分からなかったりするので、今後Shadertoyの作例リンクを貼りたいと思っています。

## いくつかの前提

### 型について

GLSLの関数にはいくつかの型が明記されていて、対応表は以下の通りとなります。

| 型        | 対象                           | 説明                  |
|----------|--------------------------------|---------------------|
| genFType | `float`,`vec2`,`vec3`,`vec4`   | 浮動小数点型の値を扱う型をまとめた型  |
| genIType | `int`,`ivec2`,`ivec3`,`ivec4`  | 整数型の値を扱う型をまとめた型     |
| genUType | `uint`,`uvec2`,`uvec3`,`uvec4` | 符号なし整数型の値を扱う型をまとめた型 |
| genBType | `bool`,`bvec2`,`bvec3`,`bvec4` | 真偽値型の値を扱う型をまとめた型    |

### JavaScriptの丸め誤差

JavaScriptでは小数点以下の計算を行った際に誤差が発生します。たとえば

```javascript
Math.cos(Math.PI * 0.5)
```

は`0`になることが期待されますが、結果は`6.123233995736766e-17`となります。この数値は0に限りなく近い値ですが、0ではありません。

このまま扱うとテストに失敗してしまうため、MDNの[Number](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)ページを参考に小数点以下17桁目を四捨五入することにしています。

## リファレンス集

基本HTML版を見ており、PDF版やOpenGL本体は基本参照しないです。

*   [The OpenGL ES® Shading Language, Version 3.20.6](https://registry.khronos.org/OpenGL/specs/es/3.2/GLSL_ES_Specification_3.20.html)
*   [OpenGL® ES 3.2 Reference Pages](https://registry.khronos.org/OpenGL-Refpages/es3/)
*   [OpenGL ES 3.2 API Reference Guide](https://www.khronos.org/files/opengles32-quick-reference-card.pdf)
*   [OpenGL® ES Version 3.2 (May 5, 2022)](https://registry.khronos.org/OpenGL/specs/es/3.2/es_spec_3.2.pdf)

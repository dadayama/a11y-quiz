# a11y quiz
アクセシビリティのクイズアプリです。

## 特徴
- アクセシビリティの基礎知識から実践的な内容まで学べるクイズを収録
- 問題の正誤に応じてわかりやすい解説を表示
- 進行状況がわかるプログレスバー付き
- Astro × React × TypeScript による高速で型安全な実装
- microCMSからクイズデータを取得し、管理・更新も容易

## 使用技術
| 技術 | 説明 |
|---------|---------|
| Astro.js | フロントエンドフレームワーク |
| TypeScript | 型安全な開発 |

## フォルダ構成
```
a11y-quiz/
├── src/
│   ├── components/
│   │   ├── AnswerOption.tsx         # 解答ボタンコンポーネント
│   │   ├── Explanation.tsx         # 解説表示コンポーネント
│   │   ├── ProgressBar.tsx         # プログレスバーコンポーネント
│   │   ├── Question.tsx            # クイズの1問表示コンポーネント
│   │   ├── QuizContainer.tsx       # クイズ全体を管理するコンテナ
│   │   └── ResultScreen.tsx        # 結果表示コンポーネント
│
│   ├── layouts/
│   │   └── Layout.astro             # 共通レイアウト
│
│   ├── libs/
│   │   ├── fetchQuizzes.ts          # クイズデータ取得用関数
│   │   └── microcmsClient.ts        # microCMSのクライアント設定
│
│   ├── pages/
│   │   └── index.astro              # トップページ
│
│   ├── types/
│   │   └── types.ts                 # 型定義
│
├── public/                          # 画像フォルダ
│
├── astro.config.mjs                 # Astro設定ファイル
├── tailwind.config.cjs              # Tailwind設定ファイル
├── tsconfig.json                    # TypeScript設定
├── package.json
└── README.md
```


## セットアップ
1. **リポジトリをクローン**
```
git clone https://github.com/dadayama/a11y-quiz.git
cd  a11y-quiz
```

2. **環境変数を設定**
.env.local を作成して以下の値を設定
このプロジェクトでは、以下の環境変数を使用します。`.env.local` ファイルを作成し、必要な値を設定してください。
```
MICROCMS_API_KEY
MICROCMS_SERVICE_DOMAIN
```
  
3. 依存関係をインストール
```
npm install
```

4. 開発サーバーを起動
```
npm run dev
```

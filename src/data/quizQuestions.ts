import { QuizQuestion } from '../types/quiz';

export const accessibilityQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Webアクセシビリティにおいて、テキストの最小コントラスト比はWCAG AAレベルで何倍以上必要ですか？",
    options: [
      "2:1",
      "3:1",
      "4.5:1",
      "7:1"
    ],
    correctAnswer: 2,
    explanation: "WCAG 2.1 AAレベルでは、通常のテキストに対して4.5:1以上のコントラスト比が必要です。これは視覚障害のあるユーザーが読みやすくするための基準です。大きなテキスト（18pt以上、または14pt以上の太字）の場合は3:1以上が求められます。"
  },
  {
    id: 2,
    question: "画像のアクセシビリティにおいて、スクリーンリーダーに必須のHTML属性は何ですか？",
    options: [
      "src属性",
      "alt属性",
      "title属性",
      "description属性"
    ],
    correctAnswer: 1,
    explanation: "alt属性は画像の代替テキストを提供し、視覚的に画像を見ることができないユーザーに対して画像の内容を説明するために使用されます。これは意味のある画像すべてに対する基本的なアクセシビリティ要件です。"
  },
  {
    id: 3,
    question: "ARIAとは何の略称ですか？",
    options: [
      "Accessible Rich Internet Applications",
      "Advanced Responsive Interface Attributes",
      "Accessibility Rules for Internet Access",
      "Automated Rendering for Interactive Applications"
    ],
    correctAnswer: 0,
    explanation: "ARIAは「Accessible Rich Internet Applications」の略で、Webコンテンツやアプリケーションをより多くの人がアクセスできるようにするための属性セットです。特に動的なコンテンツや高度なUIコントロールを使用する際に重要です。"
  },
  {
    id: 4,
    question: "セマンティックHTMLを使用することの利点として、正しくないものはどれですか？",
    options: [
      "スクリーンリーダーユーザーのアクセシビリティ向上",
      "SEOパフォーマンスの向上",
      "ウェブページの読み込み速度の向上",
      "文書構造の明確化"
    ],
    correctAnswer: 2,
    explanation: "セマンティックHTMLはアクセシビリティ、SEO、文書構造の改善に役立ちますが、ページの読み込み速度には直接的な影響を与えません。ページの読み込み速度は、ファイルサイズ、サーバーレスポンス時間、コードの最適化などの要因に関係します。"
  },
  {
    id: 5,
    question: "HTML要素のtabindex属性の目的は何ですか？",
    options: [
      "データテーブルに適切なインデックスを付ける",
      "タブキーによるナビゲーション順序を定義する",
      "テキストフィールドで許可されるタブの数を設定する",
      "要素を表形式で配置する"
    ],
    correctAnswer: 1,
    explanation: "tabindex属性は、ユーザーがTabキーを使用して要素間を移動する際のフォーカス順序を指定します。これは、マウスを使用しないユーザーが効果的にページを操作できるようにするために重要なキーボードアクセシビリティの要素です。"
  }
];
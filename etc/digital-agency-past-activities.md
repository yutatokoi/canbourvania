# デジタル庁が今まで「法令xデジタル」をテーマにしてきたこと

## 法令xデジタルワークショップ

<https://www.digital.go.jp/policies/legal-practice/workshop-202403>

### 【Part1】法令×デジタルの取組紹介

- 法令は社会の基盤。法令データを利活用した社会的価値の高いサービスの開発が期待。
    - 法令を編集・分析・管理する「法制事務」は、「法令データ」を支える基盤。
    - 現在の法制事務は目視・手作業に頼る。デジタル技術を最大限活用できるよう改善が急務。
- Although 法令 is similar to programming, it lacks good "developer experience"
    - <img width="1497" alt="Screenshot 2025-02-03 at 20 21 52" src="https://github.com/user-attachments/assets/3ae820e9-26a4-4538-8d93-b30308686575" />
    - <img width="1522" alt="Screenshot 2025-02-03 at 20 25 20" src="https://github.com/user-attachments/assets/d5737b73-d758-4194-99d3-6b75e4af5fac" />
- LLMを活用した実験結果 (2023-06~2023-10)
    - 条文や施策概要などの文章をもとに、資料や図を作成したり、アイデアを出力する実験例では、すぐに実現できそうな一定の結果が出ている印象。特に、資料の素案作成の手間を削減したり、短時間でアイデアを発見する効果が見られた。
    - 他方、条文を生成したり、法令条文特有のチェックを行う実験例については、単純なプロンプトでは意図した出力がなされないケースが多かった。プロンプトの工夫や、問題を分割するなど、中長期的に更なる研究を要すると考えられる。
        - (-> これは "reasoning model" を活用すれば改善されるだろうか？reasoning modelの活用は流石にデジタル庁内部でもう実施されてしまっている懸念がある)
    - いずれの場合も、出力結果を法制事務経験者が確認したところ修正を要する場面が複数あったため、人によるチェックや、ルールベースのチェックプログラムなどによる自動チェックと組み合わせることが有効と考えられる。
- LLMx法制事務の注意事項
    - もっともらしさ：法制事務のタスクでは、複雑な場面での厳密性が特に求められるため、出力がもっともらしくても適切に注意を喚起する仕組みが必要と考えられる。また、厳密にルールを適用するために、別の決定論的なチェック機能等を併用することが有効である可能性。
    - 外部の情報に依存しない、要約などの言語的タスクでは効果を期待。法令や条文の検索・分析などのタスクでは、よりどころとなる法令データベース・APIが必要と考えられる。その上で、APIを組み合わせた処理や、プログラムのコード案の出力などが考えられる。
    - 例えば要約や条文の推敲のタスクでは、出力された要約が正確か、条文が法令として適切かを分析・判断する技能が必要と考えられる。その前提で、気づきにくいアイデアを出力するブレスト用途では効果を期待。
- LLMを活用した実験例
    - <img width="1513" alt="Screenshot 2025-02-03 at 20 59 18" src="https://github.com/user-attachments/assets/40fde25d-303f-4168-a95f-c22d6313bbd8" />
    - <img width="1527" alt="Screenshot 2025-02-03 at 20 59 25" src="https://github.com/user-attachments/assets/44eefe97-a8f5-483f-a5bd-808af86fb747" />
    - <img width="1519" alt="Screenshot 2025-02-03 at 20 59 46" src="https://github.com/user-attachments/assets/879b6734-c231-4e2c-bcf5-c8594e33b3de" />


<img width="1317" alt="Screenshot 2025-02-03 at 21 01 30" src="https://github.com/user-attachments/assets/d9111ea1-5539-4bdd-b6b3-87a8e9373df3" />

### 【Part 2】法制事務の実態の紹介

法制事務には特殊な文章の精密な操作が必要。主に手作業で行われているため、時間と手間がかかるだけでなく、ヒューマンエラーが生じやすい。

## 法制事務のデジタル化及び法令データの整備・利活用に関する調査・実証

2023年に行われた実証実験 (各実験に関する報告書: <https://www.digital.go.jp/policies/legal-practice>)
- 法制事務の業務分析
- 法制事務エディタのプロトタイピング・ユーザテスト
- 法制事務エディタの技術検証
- 法令データの公開機能の検討拡張
- アーキテクチャやデータ構造の検証
- デジタル法制の現状・未来に関する調査研究

## 生成AIの取り組み（ハッカソン1日目発表資料）

- They used o1 for 条文案生成
    - It seems like they only tried to prompt better
    - Results were not great. Only good for たたき台やブレインストーミング
    - -> Would be faster to just make the 条文案 without o1

## 株式会社Kiei実証調査

(<https://prtimes.jp/main/html/rd/p/000000012.000128238.html>)

- アナログ規制点検ツール
    - 現在ある法令には、アナログ規制である可能性を通知する
    - 正確な判定からは程遠い。Promptによる判定とEmbeddingを用いた判定のハイブリッド、単語ベクトルによる類似度推測
- 用例検索システム
    - 

# キャンボルベニア

## Roadmap

1. Make a template-like Word Add-in that does the following
  - Ability to "see" the content
  - Ability to process the content seen
  - Ability to modify the content based on the process result
  - Sample repositories:
    - Hello world in Word: <https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/hello-world/word-hello-world>
    - AI generated content in Word: <https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/word-ai-generated-content>
    - Other Word Add-in samples: <https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples>
2. Add LLM capabilities to the processing of the content
3. Output the LLM processed results to the Word interface

## AI Model

- 黄浦1: RAG on Dify
  - Seems like the simplest solution to get a RAG model working (RAG is probably the best method for this use case)
  - Critical things that I still need to consider:
    - Does it have an API interface to be able to connect to the Word Add-in?
    - Does it take XML or JSON data? -> If not, what options would I have to convert the XML data?

## 提出案

> 行政機関の意思決定過程における効率化を目指し、AIを活用した立法支援ツールの開発を提案します。本ツールは、既存の法令や判例データベースを基盤に、条文案の検証、用例検索、改正案作成支援を行います。さらに、議論内容を自動で記録し宿題事項を整理する機能や、文書作成の効率化を図る機能を備えます。この結果、法制局審査や主管省庁の準備作業の効率化を実現し、法案作成全体のプロセス短縮と精度向上が期待されます。
>
> (宿題is like a 業界用語 for legislative review)

![IMG_0581](https://github.com/user-attachments/assets/84571457-09f0-42e1-9d12-df679eb4e289)

## Feedback from 上田さん（デジタル庁出向中、元New Yorkの法学部の留学の方）

- 昔の職人は割と一太郎を使いがちだが、現在はWordに移行中
- 法文は0から一人だけで書き上げるのは難しい。単語のチョイスとか書き方に素人感が出たり、統一感がないから。だから現状は現存のものを参考にしながら書き上げる
- 条文検索などが簡単にできると便利
- 問題はどこまでのクオリティに仕上げられるか

デジ庁川野さん（総務省では携帯料金引き下げてくれた方）：

- 横書きの仕様書を縦書きの法律に書き直すのに5人必要！法令ハッカソンにはこういうの求める
- 主に省庁向けのサービス開発求めてます。主に行政機関を手伝ってください。

## Ideation

The point of the hackathon isn't to make a polished product, but rather to propose an idea that they could polish themselves. We will just be making a rough prototype for demonstration purposes. So if our idea is too similar to what they are already doing, then it won't be of much benefit to them.

Looking at their presentations, it seems they are very cautious about using LLMs, when it comes to their inaccuracy and hallucinations (thank god!). So suggesting that we can get an LLM to *replace* humans would probably not make a good impression. We would want to propose that the LLM is merely an *assistant* and a *copilot*.

AIには名前を付けて、人格を作り上げる方が日本人には親しみやすい (安野さん): <https://youtu.be/fNEky0bVXjE?si=wNz7o5zwFHE2Mu9y&t=634>

## Awards

- 最優秀賞x1, 優秀賞x1, 部門賞（法政事務効率化、法令等データの提供方法、）
- などなど

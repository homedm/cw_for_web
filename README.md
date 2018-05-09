# cw_for_web
====
## 概論
どんなデバイスでもcw（モールス符号）の聞き取り練習を行えるようにします。

## 対象
アマチュア無線家でcwの練習をしたい方。モールス符号に興味を持っている方。

## 機能
### CW WEB RUNNER
basic:一文字単位での聞き取り
japan: 日本のアマチュア無線局のコールサイン
world: 海外のアマチュア無線局のコールサイン
上記の三つのモードでのモールス符号の聞き取り練習を行えます。

#### Add De
再生する信号の前にDEをつけて再生します。この場合はDEの後のコールを聞き取って回答します。

#### repeat wrong signal
有効にすると間違えた信号を回答できるまで再生します。

### CW TUTOR FOR WEB
ボタンをクリックすると、そのボタンに対応した文字のモールス符号が再生されます。
PLAYボタンをクリックすると、今までに入力した文字列をすべて再生します。

## 対応ブラウザ
Web audio apiを使っているため、IEには対応していません。

## 使用法
### CW WEB RUNNER
ページ下側にあるラジオボタンでモードを選択します。
ページ上側にあるplayボタンで音を流します。
聞き取れた符号をキーボードでテキストボックスに入力します。
answerボタンをクリックし、答え合わせをします。

PCで使用する場合はEnter keyを押すことで再生、答え合わせがされます。
また、ESCkeyを押すことで符号の再生を中断できます。

回答履歴はページの一番下にあるテキストボックス中に記録されていきます。

こちら[CW WEB RUNNER](https://homedm.github.io/cw_for_web/ "CW_FOR_WEB"), [CW TUTOR FOR WEB](https://homedm.github.io/cw_for_web/cwTutor.html)をブラウザで開けば使用できます。

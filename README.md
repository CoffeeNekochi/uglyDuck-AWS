# 醜小鴨-剩食資訊平台

## 一、前言
在台灣食材及生鮮蔬果一般可在菜市場、量販店、超市及超商購買，較追求品質及新鮮的量販店、超市及超商中，對於食材與蔬果各有一套嚴謹的篩選制度，因此為了提供更好的食物品質，超市、超商與量販店往往會將賣相差的NG品、超過最佳賞味期限的過期品丟棄，根據環保署統計超市及量販店每月製造500公噸以上的廚餘，超商每年報廢的食物價值亦超過70億台幣，而菜市場雖然較難統計資料，但可想而知賣相較差的食材也難逃被丟棄的命運，最讓人惋惜的是許多被丟棄的食材往往新鮮且營養，一樣皆能烹飪出健康美味的料理，用於生產這些食物的資源，包含水、土地、能源、勞動力等都將付之一炬，食物損失和垃圾掩埋處理的溫室氣體排放更加劇氣候變遷等問題，
    雖然在台灣已經有處理剩食問題的社區廚房概念，從蒐集剩食到廚房進行烹飪，並提供用餐地點讓廚師們進行廚藝交流等，但經營規模較小，處理的剩食量仍不多，而我們希望能更有效的減少每年台灣的剩食量，因此我們使用AWS提供的服務來解決剩食問題，利用系統建構一個平台，將食材供應者及需求者整合起來，提供給需求者便宜的食物並減少食材供應方的浪費。

## 二、創意描述
本系統主要以登記及查詢剩食資訊為主，以網頁形式呈現，並且提供三方使用者使用，分別為剩食提供商、中央廚房以及慈善機構，主要運用資料庫儲存及查閱各方使用者的剩食資訊。

* 剩食提供者: 功能為登記剩食資訊，包括食材品項、數量、重量以及可收取時間，使物流人員可依不同時間地點的剩食提供者制定出最佳運輸路線至中央廚房，

* 中央廚房:  共有三項功能，第一為查閱剩食履歷，包括供應商基本資訊、食材品項、數量、重量，使中央廚房可輕鬆方便掌握當天剩食概況，以發想當日菜單；第二為登記食品資訊，食材經過中央廚房加工後成為要分發的食品，例如:便當、粥，將食品資訊登記至平台上，提供給慈善機構瀏覽；第三為登記及查看食材庫存，登記當日剩下的食材資訊，包括食材名稱、數量、保存期限，以便庫存管理，並設有過期食品通知及警訊，若有食材已到保存期限日期，將發出警訊至中央廚房，把控食材安全且減少人員潛在疏失。

* 慈善機構: 功能為登記需求品項，中央廚房公布當日食品資訊後，慈善機構可於平台上登記購買需要的食品。

## 三、系統開發工具與技術
![](https://i.imgur.com/wjpkvnH.png)

## 四、系統使用環境

本系統采以響應式網頁設計將此平臺呈現，使用者可透過電腦及手機瀏覽器以超鏈接快速進入平臺，無需下載即可執行以降低使用者使用需求。使用者在網站前端執行的動作將通過API接口進行資料操作傳遞，並從後端執行計算后回饋給使用者。同時也會利用使用者認證來進行使用者界面控制，為不同使用者提供個別使用界面。但發生警訊觸發事件時，也會通過資料庫選擇發送警訊對象並對其發送簡訊進行通知，以確保食品安全都在標準下。

## 五、學習影片
[CRUD with Lambda + API Gateway + DynamoDB](https://youtu.be/Ut5CkSz6NR0)

[Frontend with Javascript + DynamoDB + Cognito](https://youtu.be/jKvbOhJ7RtQ)

[API Gateway + Lambda](https://youtu.be/FIrzkt7kH80)

[API Gateway + API Keys](https://youtu.be/V-ac_ZvdAW4)

[Amazon Cognito + Google Sign In](https://youtu.be/r1P_glQGvfo)

[Amazon Cognito + API Gateway](https://youtu.be/oFSU6rhFETk)

[DynamoDB FilterExpression](https://youtu.be/MxF2_b0LODs)

[DynamoDB Query and GetItem](https://youtu.be/Nk_vjiv6_bE)

[DynamoDB Scan vs Query](https://youtu.be/U-yApJ2_FCE)

[SNS + Lambda](https://youtu.be/PsJsP-7cydk)

# wasateam-test

## 程式架構做到最大的沿用性、維護性
1. 製作輸入類型的元件，利用 v-model 實現父子元件雙向綁定功能，只需在元件傳入相對應的資料結構即可
![wasateam](https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F%E6%88%AA%E5%9C%96%202022-04-18%20%E4%B8%8B%E5%8D%889.29.19.png?alt=media&token=8d6e1f44-f52c-4451-80af-88f2914c28fc)
2. 此輸入類型的元件無任何依賴性，獨立出來的元件能在任何地方被使用
3. sass 架構採用 7-1 Pattern，將不同種類劃分成 abstracts、base、layout.... 方便日後新增或維護時能明確劃分
4. 使用 dataset attribute 搭配 css variable 來動態切換 darkmode，簡單且易於方便管理
![wasateam](https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F%E6%88%AA%E5%9C%96%202022-04-18%20%E4%B8%8B%E5%8D%889.36.56.png?alt=media&token=4863e325-7098-4b08-a070-71ac96cb0639)
5. 在 props 進來時會進行型別＆數值檢查，以免 props 傳入不符合預期 
![wasateam](https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F%E6%88%AA%E5%9C%96%202022-04-18%20%E4%B8%8B%E5%8D%889.41.05.png?alt=media&token=270a7610-33b4-4b23-b94f-7451dfdf51cc)
6. 在只使用 v-model＆props 就能做到的前提下，省去使用 vuex 來管理資料狀態，讓資料只在有限的範圍內操作，在除錯時也好下手
7. 使用 eslint 來控管團隊程式碼撰寫風格，且也符合 vue 官方設計規範
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# new-news

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### hacker API
https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

# js의 this..
# 1. window(전역)
# 2. 메소드 호출, this 실행 = window
# 3. new 메소드 생성, this 실행 = 함수
# 4. 화살표 함수의 this 호출되는 위치에 this 반환

# 비동기 호출에서는 기존에 있었던 this를 벗어난 this가 생김.. (undefined)
# 때문에 let vm = this; 사용
# 하지만 ES6 화살표 함수에서는 this가 호출되는 위치에 this를 가져옴.
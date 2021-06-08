# 구조

## 1. 구성요소

### 1. 메인 Canvas element

Canvas를 통해 실제로 그래픽스가 구현될 Element입니다. 현재, root/Engine.html에 있으며, Test.html에서 iframe으로 작동하는지 확인 중.

### 2. Global Object Array

엔진에서 그래픽스로 구현할 객체들의 모음. engine.js의 loading 함수에서 로드됩니다.

### 3. Draw WebWorker

engine.js에서 각각의 폴리곤 픽셀계 좌표를 계산하고, 실제로 Canvas에 그려냅니다.



## 2. Abstract Logic

### 1. Object Loading

js 안에 담긴 JSON형식 객체를 engine.js에서 불러옵니다.

### 2. Global Object Array

엔진에서 그래픽스로 구현할 객체들의 모음. engine.js의 loading 함수에서 로드됩니다. 객체는 폴리곤 배열, 속성, 벡터로 구성되어있으며, 벡터를 통해서 좌표와 이동을 동시에 처리합니다.

### 3. Object Distribution

engine.js에서 프레임마다 Global Object Array에서 가져온 객체를 각각의 웹 워커에게 전달합니다.

### 4. Compute & Draw

각가의 웹 워커가 분배된 Global Object의 픽셀계 좌표를 계산하여 Canvas에 넘겨줍니다.
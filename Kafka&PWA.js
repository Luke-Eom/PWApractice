import { now } from "./time.mjs";

console.log("Now", now())

// 프로젝트 단위로 모듈 적용
// package.json 파일에 json 형식으로
// { "type" :  module""}
// 그 후 확장자를 js로
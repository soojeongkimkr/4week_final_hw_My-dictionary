// voca.js

// Actions
// 어떤 변동사항을 만들건지 액션타입을 선언한다.
const CREATE = 'voca/CREATE';
const DELETE = "voca/DELETE";

// 변동사항의 초기값을 선언한다.
const initialState = {
  list: [{
    jp: 'あき',
    kr: '가을',
    sentenceJp: 'あきたつ',
    sentenceKr: '가을이 되다'
  }]
};

// Action Creators
// 변동사항 카테고리(생성/삭제/로드 등등)별 변동 디테일을 선언한다.
export function createVoca(voca){
  return {type: CREATE, voca: voca};
}

// 지울 것이기 때문에 지울것의 인덱스를 쓰는 것이 좋다.
export function deleteVoca(voca_index){
  // console.log("지울 voca 인덱스", voca_index);
  return {type: DELETE, voca_index};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voca/CREATE": {
      
      const new_voca_list = [...state.list, action.voca];
      // console.log(new_voca_list)
      return {list : new_voca_list};
    }
    case "voca/DELETE": {
      const new_voca_list = state.list.filter((l, idx)=> {
        
        return parseInt(action.voca_index) !== idx;
      })
      // console.log(state, action)

      // return new_bucket_list 라고만 한다면 initialState 형식과는 다르게 key 값이 없기 때문에
      // 아래와 같이 적어줘야한다.
      return {list: new_voca_list};
    }
    default:
      return state;
    }
  }
  
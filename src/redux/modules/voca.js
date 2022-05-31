// voca.js
//firebase에서 데이터 가져오기
import {db} from "../../firebase";
// firebase 데이터 제어하는 훅들
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

// Actions
// 어떤 변동사항을 만들건지 액션타입을 선언한다.
const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
const UPDATE = "voca/UPDATE"
const DELETE = "voca/DELETE";

// 변동사항의 초기값을 선언한다.
const initialState = {
  list: [
    {
    idx: 0,
    jp: 'あき',
    kr: '가을',
    sentenceJp: 'あきたつ',
    sentenceKr: '가을이 되다',
    check: false
  }
]
};



// Action Creators
// 변동사항 카테고리(생성/삭제/로드 등등)별 변동 디테일을 선언한다.
export function loadVoca(voca_list){
  return {type:LOAD, voca_list}
}

export function createVoca(voca){
  return {type: CREATE, voca: voca};
}

export function updateVoca(idx){
  return {type: UPDATE, idx}
}

// 지울 것이기 때문에 지울것의 인덱스를 쓰는 것이 좋다.
export function deleteVoca(idx){
  // console.log("지울 voca 인덱스", voca_index);
  // console.log('지울인덱스', id)
  return {type: DELETE, idx};
}


// Middlewares
export const loadVocaFB = () => {
  // 서버에서 데이터를 가져오는 비동기통신이기 때문에 async await을 사용한다.
  return async function (dispatch) {
    // 서버에 있는 데이터를 가져와서 voca_data에 넣어준다.
    const voca_data = await getDocs(collection(db, "jpvoca"))
    console.log(voca_data)

    let voca_list = [];
    voca_data.forEach((v)=> {
      console.log(v.data());
      voca_list.push({id: v.id, ...v.data()});
    });
    console.log(voca_list);

    dispatch(loadVoca(voca_list));
  };
};

export const addBucketFB = (voca) => {
  return async function (dispatch){
    const docRef = await addDoc(collection(db, "jpvoca"), voca);
    const _voca = await getDoc(docRef);
    const voca_data = {id: _voca.id, ..._voca.data()}
    console.log(voca_data);
    
    dispatch(createVoca(voca_data));
  } 
}

export const updateVocaFB = (idx) => {
  return async function (dispatch, getState){
    const docRef = doc(db, "jpvoca", String(idx));
    await updateDoc(docRef, { check : true });

    console.log(getState().voca);
    const _voca_list = getState().voca.list;
    console.log(_voca_list)
    // const voca_index = _voca_list.findIndex((v)=> {
    //   return v.idx === idx;
    // })
    // dispatch(updateVoca(voca_index))
  }
}

export const deleteVocaFB = (idx)=> {
  return async function (dispatch, getState) {
    if (!idx){
      window.alert('아이디가 없습니다!')
      return;
    }
    const docRef = doc(db, "jpvoca", idx);
    await deleteDoc(docRef);

    const _voca_list = getState().voca.list;
    const voca_index = _voca_list.findIndex((v)=> {
      return v.idex === idx;
    })
    dispatch(deleteVoca(voca_index));
  }
  }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voca/LOAD": {
      return {list: action.voca_list}
    }
    case "voca/CREATE": {
      // console.log("값을 바꿀거야")
      const new_voca_list = [...state.list, action.voca];
      // console.log(new_voca_list)
      return {list : new_voca_list};
    } 
    case "voca/UPDATE": {
      return state.list.map((v, idx)=> {
        if(idx === parseInt(action.idx)){
          return {...v, check: true}
        } 
        return state;
      })      
    }
    case "voca/DELETE": {
      const new_voca_list = state.list.filter((l, idx)=> {
        
        return parseInt(action.idx) !== idx;
      })
      console.log(new_voca_list)

      // return new_bucket_list 라고만 한다면 initialState 형식과는 다르게 key 값이 없기 때문에
      // 아래와 같이 적어줘야한다.
      return {list: new_voca_list};
    }
    default:
      return state;
    }
  }
  
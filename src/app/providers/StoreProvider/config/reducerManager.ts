import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema, StateSchemaKey, ReducerManager, MountedReducer } from "./StateSchema"; 


export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers);
    let keysToRemove:StateSchemaKey[] = []; //массив с названиями редьюсеров, которые мы хотим удалить
    const mountedReducers: MountedReducer = {}
  
    return {
      getReducerMap: () => reducers,
      getMountedReducers: () => mountedReducers, //на самом деле можно было использовать getReducerMap
      //reduce - по сути обычный корневой редьюсер
      reduce: (state: StateSchema, action: AnyAction) => {
        if (keysToRemove.length > 0) {
          state = { ...state } // создает копию состояния
          keysToRemove.forEach((key) => {
            delete state[key]; //удаляет лишнии редьюсеры
          })
          keysToRemove = []
        }
  
        return combinedReducer(state, action) //возвращает новый редьюсер
      },
  
      add: (key: StateSchemaKey, reducer: Reducer) => {
        if (!key || reducers[key]) {
          return
        }
  
        reducers[key] = reducer;
        mountedReducers[key] = true; 
  
        combinedReducer = combineReducers(reducers)
      },
  
      remove: (key:StateSchemaKey) => {
        if (!key || !reducers[key]) {
          return
        }
  
        delete reducers[key];

        keysToRemove.push(key);
        mountedReducers[key] = false; 
  
        combinedReducer = combineReducers(reducers)
      }
    }
  }
  

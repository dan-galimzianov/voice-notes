export type Note = {
    id: string
    title: string
    body: string
}


declare global {
    // fsd required
    declare type RootState = import('../app/providers/RTKProvider/index.js').RootState;
    declare type AppDispatch = import('../app/providers/RTKProvider/index.js').AppDispatch;
}
  
export {};
import { create } from "zustand"
import { signaturepost } from "../service/Auth/SignatureController/signaturePost"

const useStore = create((set)=>(
    {
        signature:null,
        setSignature:(signature)=>set({signature}),
        postSignature:async(data)=>{
            const res = await signaturepost(data);
            set({signature:res.data})
        }
    }
))
export default useStore
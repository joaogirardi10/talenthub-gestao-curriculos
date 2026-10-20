import {Detalhe} from '@/components/curriculos/detalhe'
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;return <Detalhe id={decodeURIComponent(id)}/>}

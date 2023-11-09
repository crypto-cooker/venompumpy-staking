import { FC } from "react"

interface CusInput {
    label: string,
    type: string,
    content: string,
    setContent: Function
}

const CusInput: FC<CusInput> = ({label, type, content, setContent}) => {
    return(
        <>
            <h2 className="text-[18px] font-Montserrat font-[600] mb-[10px]">{label}</h2>
            <input value={content} type={type} className="bg-[#16161E] shadow-[0px_0px_3px_1px_grey] lg:shadow-none h-[50px] rounded-[10px] w-[90%] lg:w-[75%] lg:max-w-[578px] pl-[20px] mb-[20px] opacity-90" onChange={(e:any) => {setContent(e.target.value);}}/>
        </>
    )

}

export default CusInput
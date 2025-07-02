export default function({value, pick}) {
    return (
        <button onClick={() => pick(value.id)} type="button" className={`${value.isHeld ? `bg-[#59e391] shadow-md rounded text-3xl py-2 px-4 font-bold` : 'bg-white shadow-md rounded text-3xl py-2 px-4 font-bold'} `}>{value.value}</button>
    )
}
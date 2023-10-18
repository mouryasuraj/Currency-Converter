

function SwapBtn({ swapBtn }) {
    return (
        <button onClick={swapBtn} className="px-3 py-2 rounded-sm bg-sky-900 text-white absolute top-[30%] left-[40%] hover:bg-sky-700 active:scale-[1.05] duration-200">Swap</button>
    )
}

export default SwapBtn

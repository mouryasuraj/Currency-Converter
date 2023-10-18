

function Convert({ from, to, convertBtn }) {
  return (
    <button
      onClick={convertBtn}
      className="w-full bg-gray-800 py-2 rounded-sm text-white font-bold text-lg hover:bg-gray-700 duration-200 active:scale-[0.9]">
      Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
  )
}

export default Convert

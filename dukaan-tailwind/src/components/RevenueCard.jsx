export const RevenueCard = (
    {title,amount, order}
) => {
    return (
        <div className="bg-white-500 rounded shadow-md p-4">
            <div className="text-gray-600 text-sm">
                {title} ?
            </div>
            <div className="flex justify-between">
                <div className="font-semibold text-xl">
                $ {amount}
                </div>
                <div className="text-blue-400 underline text-sm cursor-pointer">
                {order ? order  + " order" : null}
                </div>
            </div>
        </div>
    )
}
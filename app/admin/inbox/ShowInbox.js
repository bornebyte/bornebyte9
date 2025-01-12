"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ShowInbox = ({ result, filter }) => {
    const handleFilter = (e) => {
        console.log(e);
    }
    return (
        <div>
            <p className="text-5xl text-center mb-4">Inbox</p>
            <div className="h-full w-full md:w-2/3 mx-auto rounded-2xl border border-gray-700 px-10 py-8">
                <div className="w-full flex items-center justify-end">
                    <Select onValueChange={handleFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                filter && filter.map((i, index) => {
                                    return (
                                        <SelectItem key={index} value={i.category}>{i.label}</SelectItem>
                                    )
                                })
                            }
                        </SelectContent>
                    </Select>
                </div>
                {
                    result && result.map((notification) => {
                        return <div key={notification.id} className="h-full w-full my-4">
                            <p className="text-sm">{notification.created_at}</p>
                            <p className="text-2xl">{notification.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ShowInbox
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';

export default function Inbox() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg mt-14">
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Contact Us</h5>
                            </div>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    S.No
                                                </h3>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    Name
                                                </h3>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    Email
                                                </h3>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    Phone
                                                </h3>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    Select Test
                                                </h3>
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <h3 className="font-bold dark:text-white">
                                                    Message
                                                </h3>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <h3 className="font-bold dark:text-white">
                                                    Action
                                                </h3>
                                            </div>
                                        </div>
                                    </li>

                                    <Table />

                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

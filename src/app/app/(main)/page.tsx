
import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page"
import { TodoDataTable } from "./_components/todo-data-table"


export default  async function Page() {


    return (
<DashboardPage>
<DashboardPageHeader>
    <DashboardPageHeaderTitle>Tasks</DashboardPageHeaderTitle>
</DashboardPageHeader>
<DashboardPageMain>
    <TodoDataTable />
</DashboardPageMain>
</DashboardPage>
    )
}
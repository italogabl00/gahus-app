import { auth } from "@/services/auth"

export default  async function Page() {

    const session = await auth()

    return (
        <main>
            <div>
                <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span>{session?.user?.email}</span>
            </div>
        </main>
    )
}
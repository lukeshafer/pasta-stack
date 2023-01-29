import { trpc } from "@/trpc-client";
import { onMount } from "solid-js";

export default function Home() {
    onMount(async () => {
        console.log("Testing trpc");
        const r = await trpc.user.getAll.query({ name: "Luke" });
        console.log(r);
    });
    return <div>Home</div>;
}
